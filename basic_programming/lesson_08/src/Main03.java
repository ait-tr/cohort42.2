import java.util.Scanner;

public class Main03 {
    /*
    Написать программу, которая просит ввести натуральное число, и переспрашивает пока не будет введено правильно
     */

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n;
        // выполняем следующий код:
        do {
            // вывести сообщение
            System.out.println("Введите натуральное число");
            // считать значение
            n = scanner.nextInt();
            // это все пока введенное число меньше или равно нулю
        } while (n <= 0);

        System.out.println("Спасибо");
    }
}
