package last_homework;

import java.util.Scanner;

public class Task05 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите часы и минуты");
        int hour = scanner.nextInt();
        if (hour >= 0 && hour < 24) {
            int minute = scanner.nextInt();
            if (minute >= 0 && minute < 60) {
                if (hour < 8 || hour >= 13 || hour == 12 && minute > 45) {
                    if (hour == 13 && minute <= 30) {
                        System.out.println("Обед");
                    } else {
                        System.out.println("Свободное время");
                    }
                } else {
                    if (minute <= 45) {
                        System.out.println("Урок");
                    } else {
                        System.out.println("Перемена");
                    }
                }
            }
        }

    }
}
