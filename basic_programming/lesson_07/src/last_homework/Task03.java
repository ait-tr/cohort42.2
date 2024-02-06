package last_homework;

import java.util.Scanner;

public class Task03 {
/*
Калькулятор Оценок: Создайте программу, которая запрашивает у пользователя оценки
по пяти предметам, затем рассчитывает и выводит средний балл.
 */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите 5 оценок: ");
        int mark1 = scanner.nextInt();
        int mark2 = scanner.nextInt();
        int mark3 = scanner.nextInt();
        int mark4 = scanner.nextInt();
        int mark5 = scanner.nextInt();

        float sum = mark1 + mark2 + mark3 + mark4 + mark5;

        System.out.println("Средняя оценка: " + sum / 5);
    }


}
