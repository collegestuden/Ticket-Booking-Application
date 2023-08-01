package BookingGas;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Connection_Class {
    private static final String DB_URL = "jdbc:mysql://127.0.0.1:3306/gas_booking_db";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "ab@2004";

    public static void addCustomerToDB(Customer customer) {
        try (Connection conn = getConnection()) {
            String query = "INSERT INTO Customer (name, phone) VALUES (?, ?)";
            PreparedStatement preparedStatement = conn.prepareStatement(query);
            preparedStatement.setString(1, customer.getName());
            preparedStatement.setString(2, customer.getPhone());
            preparedStatement.executeUpdate();
            System.out.println("Customer added successfully to the database.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void addGasAgencyToDB(GasAgency gasAgency) {
        try (Connection conn = getConnection()) {
            String query = "INSERT INTO GasAgency (name, address, phone) VALUES (?, ?, ?)";
            PreparedStatement preparedStatement = conn.prepareStatement(query);
            preparedStatement.setString(1, gasAgency.getName());
            preparedStatement.setString(2, gasAgency.getAddress());
            preparedStatement.setString(3, gasAgency.getPhone());
            preparedStatement.executeUpdate();
            System.out.println("Gas agency added successfully to the database.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void addPaymentToDB(Payment payment) {
        try (Connection conn = getConnection()) {
            String query = "INSERT INTO Payment (bookingID, paymentType, cardNumber) VALUES (?, ?, ?)";
            PreparedStatement preparedStatement = conn.prepareStatement(query);
           preparedStatement.setInt(1, payment.getBookingID());
preparedStatement.setString(2, payment.getPaymentType());
            preparedStatement.setString(3, payment.getCardNumber());
            preparedStatement.executeUpdate();
            System.out.println("Payment added successfully to the database.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void addGasBookingToDB(GasBooking gasBooking) {
        try (Connection conn = getConnection()) {
            String query = "INSERT INTO GasBooking (phone, name, quantity) VALUES (?, ?, ?)";
            PreparedStatement preparedStatement = conn.prepareStatement(query);
            preparedStatement.setLong(1, gasBooking.getPhone());
            preparedStatement.setString(2, gasBooking.getAgencyName());
            preparedStatement.setInt(3, gasBooking.getQuantity());
            preparedStatement.executeUpdate();
            System.out.println("Gas booking added successfully to the database.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static Connection getConnection() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            throw new RuntimeException("Failed to load MySQL JDBC driver.", e);
        }
        return DriverManager.getConnection(DB_URL, USERNAME, PASSWORD);
    }
}
