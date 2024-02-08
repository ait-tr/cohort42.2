package last_homework;

import java.util.Scanner;

public class Task01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Введите ваш возраст:");
        int age = scanner.nextInt();

        if (age < 0 || age > 120) {
            System.out.println("Столько не живут! Неверный ввод.");
        } else if (age < 13) {
            System.out.println("kid");
        } else if (age < 19) {
            System.out.println("teen");
        } else if (age < 65) {
            System.out.println("adult");
        } else {
            System.out.println("old");
        }

    }
}
