package last_homework;

import java.util.Scanner;

public class Task02 {
    /*
    Проверка Чётных и Нечётных Чисел: Напишите программу, которая
    запрашивает у пользователя целое число и сообщает, является ли это число чётным или нечётным.
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = scanner.nextInt();

        if (number % 2 == 0) {
            System.out.println("Четное"); // even
        } else {
            System.out.println("Нечетное"); // odd
        }
    }
}
