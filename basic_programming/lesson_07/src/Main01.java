import java.util.Scanner;

public class Main01 {
    /*
    Написать программу, которая прочитает строку из консоли и выведет общее количество введенных символов
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String text = scanner.nextLine();

        System.out.println(text.length());
    }
}
