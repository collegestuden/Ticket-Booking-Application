package BookingGas;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class gas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        GasBookingManager manager = new GasBookingManager();

        int choice;
        do {
            System.out.println("\n----- Online Gas Booking System -----");
            System.out.println("1. Add Customer");
            System.out.println("2. Add Gas Agency");
            System.out.println("3. Book Gas");
            System.out.println("4. Display Customers");
            System.out.println("5. Display Gas Agencies");
            System.out.println("6. Display Bookings");
            System.out.println("7. Add Payment");
            System.out.println("8. Exit");
            System.out.print("Enter your choice: ");

            choice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (choice) {
                case 1:
                    manager.addCustomer(scanner);
                    break;
                case 2:
                    manager.addGasAgency(scanner);
                    break;
                case 3:
                    manager.bookGas(scanner);
                    break;
                case 4:
                    manager.displayCustomers();
                    break;
                case 5:
                    manager.displayGasAgencies();
                    break;
                case 6:
                    manager.displayBookings();
                    break;
                case 7:
                    manager.addPayment(scanner);
                    break;
                case 8:
                    System.out.println("Thank you for using the Online Gas Booking System.");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        } while (choice != 8);

        scanner.close();
    }
}

abstract class Entity {  // An abstract class representing the common attributes of entities like customers and gas agencies, 
	//such as ID and name. It provides a method to retrieve the ID and name of an entity.
    private int ID;
    private String name;

    public Entity(int ID, String name) {
        this.ID = ID;
        this.name = name;
    }

    public int getID() {
        return ID;
    }

    public String getName() {
        return name;
    }
    @Override  //  polymorphism means many forms two type 1. compile time(overloading) 2. run time (overrideing).It also overrides the toString() method to display customer information.
    public String toString() {
        return "ID: " + ID + ", Name: " + name;
    }
}

class Customer extends Entity {  // Customer is a subclass of Entity use(Inheritance)
    private String phone;

    public Customer(int customerID, String name, String phone) {
        super(customerID, name);  //super keyword is used to refer to the superclass (parent class) of the current class.
        this.phone = phone;
    }

    public String getPhone() {
        return phone;
    }
    @Override
    public String toString() {
        return super.toString() + ", Phone: " + phone;
    }
}

class GasAgency extends Entity {
    private String address;
    private String phone;

    public GasAgency(int agencyID, String name, String address, String phone) {
        super(agencyID, name);
        this.address = address;
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public String getPhone() {
        return phone;
    }
    @Override
    public String toString() {
        return super.toString() + ", Address: " + address + ", Phone: " + phone;
    }
}

class GasBooking {
    private int bookingID;
    private long phone;
    private String name;
    private int quantity;

    public GasBooking(int bookingID, long phone, String name, int quantity) {
        this.bookingID = bookingID;
        this.phone = phone;
        this.name = name;
        this.quantity = quantity;
    }

    public int getBookingID() {
        return bookingID;
    }

    public long getPhone() {
        return phone;
    }

    public String getAgencyName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }
}

class Payment {
    private int paymentID;
    private int bookingID;
    private String paymentType;
    private String cardNumber;

    public Payment(int paymentID, int bookingID, String paymentType, String cardNumber) {
        this.paymentID = paymentID;
        this.bookingID = bookingID;
        this.paymentType = paymentType;
        this.cardNumber = cardNumber;
    }

    public int getPaymentID() {
        return paymentID;
    }

    public int getBookingID() {
        return bookingID;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public String getCardNumber() {
        return cardNumber;
    }
    @Override
    public String toString() {
        return "Payment ID: " + paymentID + ", Booking ID: " + bookingID + ", Payment Type: " + paymentType + ", Card Number: " + cardNumber;
    }
    // You can add setter methods if required.
}

class GasBookingManager {
    private List<Customer> customers = new ArrayList<>();
    private List<GasAgency> gasAgencies = new ArrayList<>();
    private List<GasBooking> gasBookings = new ArrayList<>();

    public void addCustomer(Scanner scanner) {
        int customerID = customers.size() + 1;
        System.out.print("Enter customer name: ");
        String name = scanner.nextLine();
        System.out.print("Enter customer phone number: ");
        String phone = scanner.nextLine();

        Customer customer = new Customer(customerID, name, phone);
        customers.add(customer);
        // Add customer to the database
        Connection_Class.addCustomerToDB(customer);
    }

    public void addGasAgency(Scanner scanner) {
        int agencyID = gasAgencies.size() + 1;
        System.out.print("Enter gas agency name: ");
        String name = scanner.nextLine();
        System.out.print("Enter gas agency address: ");
        String address = scanner.nextLine();
        System.out.print("Enter gas agency phone number: ");
        String phone = scanner.nextLine();

        GasAgency gasAgency = new GasAgency(agencyID, name, address, phone);
        gasAgencies.add(gasAgency);
        // Add gas agency to the database
        Connection_Class.addGasAgencyToDB(gasAgency);
    }

    public void bookGas(Scanner scanner) {
        int bookingID = gasBookings.size() + 1;
        System.out.print("Enter customer phoneNumber: ");
        long phone = scanner.nextLong();
        scanner.nextLine(); // Consume the newline character
        System.out.print("Enter gas agency Name: ");
        String name = scanner.nextLine();
        System.out.print("Enter quantity of gas: ");
        int quantity = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        GasBooking gasBooking = new GasBooking(bookingID, phone, name, quantity);
        gasBookings.add(gasBooking);
        // Add gas booking to the database
        Connection_Class.addGasBookingToDB(gasBooking);
    }

    public void displayCustomers() {
        if (customers.isEmpty()) {
            System.out.println("No customers found.");
        } else {
            System.out.println("\n----- Customers -----");
            for (Customer customer : customers) {
                System.out.println("ID: " + customer.getID() + " Name: " + customer.getName() + ", Phone: " + customer.getPhone());
            }
        }
    }

    public void displayGasAgencies() {
        if (gasAgencies.isEmpty()) {
            System.out.println("No gas agencies found.");
        } else {
            System.out.println("\n----- Gas Agencies -----");
            for (GasAgency agency : gasAgencies) {
                System.out.println("ID: " + agency.getID() + ", Name: " + agency.getName() + ", Address: " + agency.getAddress() + ", Phone: " + agency.getPhone());
            }
        }
    }

    public void displayBookings() {
        if (gasBookings.isEmpty()) {
            System.out.println("No gas bookings found.");
        } else {
            System.out.println("\n----- Gas Bookings -----");
            for (GasBooking booking : gasBookings) {
                System.out.println("Booking ID: " + booking.getBookingID() + ", Customer Phone: " + booking.getPhone() + ", Agency : " + booking.getAgencyName() + ", Quantity: " + booking.getQuantity());
            }
        }
    }

    public void addPayment(Scanner scanner) {
        System.out.print("Enter booking ID for the payment: ");
        int bookingID = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character after reading the integer

        // Check if the provided booking ID exists in the gas bookings list
        boolean isValidBookingID = false;
        for (GasBooking booking : gasBookings) {
            if (booking.getBookingID() == bookingID) {
                isValidBookingID = true;
                break;
            }
        }

        if (!isValidBookingID) {
            System.out.println("Invalid booking ID. Payment cannot be processed.");
            return;
        }

        System.out.print("Enter payment type (Cash or Card): ");
        String paymentType = scanner.nextLine();

        String cardNumber = null;
        if ("Card".equalsIgnoreCase(paymentType)) {
            System.out.print("Enter card number: ");
            cardNumber = scanner.nextLine();
        }

        Payment payment = new Payment(generatePaymentID(), bookingID, paymentType, cardNumber);
        // Add payment to the database
        Connection_Class.addPaymentToDB(payment);
    }

    private int generatePaymentID() {
        // You can implement your logic to generate a unique payment ID here.
        // For simplicity, we will just return a random number.
        return (int) (Math.random() * 100000);
    }
}

