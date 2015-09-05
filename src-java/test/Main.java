package test;

import org.openjdk.jmh.results.Result;
import org.openjdk.jmh.results.RunResult;
import org.openjdk.jmh.runner.Runner;
import org.openjdk.jmh.runner.options.Options;
import org.openjdk.jmh.runner.options.OptionsBuilder;
import org.openjdk.jmh.annotations.Benchmark;

import java.sql.*;
import java.util.Arrays;
import java.util.Collection;

public class Main {
    public void go() throws Exception {
        Options opts = new OptionsBuilder()
                .include(".*")
                .warmupIterations(10)
                .measurementIterations(10)
                .jvmArgs("-server")
                .forks(1)
                .output("txt")
                .build();

        Collection<RunResult> records = new Runner(opts).run();
        for (RunResult result : records) {
            Result r = result.getPrimaryResult();
            System.out.println("API replied benchmark score: "
                    + r.getScore() + " "
                    + r.getScoreUnit() + " over "
                    + r.getStatistics().getN() + " iterations");
        }
    }

    final String [] strings = new String[]{"henry", "john", "robert"};

    @Benchmark
    public void testBatch() throws Exception {
        Class.forName("org.h2.Driver");
        final Connection connection = DriverManager.getConnection("jdbc:h2:mem:test", "sa", "");
        connection.setAutoCommit(false);

        final Statement s = connection.createStatement();
        s.execute("CREATE SEQUENCE  ID_SEQ");
        s.execute("CREATE TABLE IF NOT EXISTS TEST (ID INT DEFAULT ID_SEQ.NEXTVAL PRIMARY KEY, NAME VARCHAR(32))");


        final PreparedStatement ps = connection.prepareStatement("INSERT INTO TEST(NAME) VALUES(?)", Statement.RETURN_GENERATED_KEYS);
        /*for (final String record : strings) {
            ps.setString(1, record);
            ps.addBatch();
        }
        int [] r = ps.executeBatch();
        System.out.println(Arrays.toString(r));*/
        ps.setString(1, strings[0]);
        System.out.println(ps.execute());
        ResultSet set = ps.getGeneratedKeys();
        System.out.println("keys");
        while (set.next()) {
            System.out.println(set.getObject(1));
        }
        ps.setString(1, strings[1]);
        System.out.println(ps.execute());
        set = ps.getGeneratedKeys();
        System.out.println("keys2");
        while (set.next()) {
            System.out.println(set.getObject(1));
        }
        connection.commit();
        connection.close();
    }

}