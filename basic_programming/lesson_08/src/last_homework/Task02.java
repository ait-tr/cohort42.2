package last_homework;

import java.util.Scanner;

public class Task02 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int score = 0;
        System.out.println("Тест из трех вопросов:");
        System.out.println("1. Является ли джава языком программирования. (да/нет)");

        String answer1 = scanner.nextLine();

        if (answer1.equals("да")) {
            System.out.println("Верно!");
            score++;
        } else {
            System.out.println("Неправильно!");
        }

        System.out.println("В каком году появилась Джава? a) 1991 b) 1995 c) 2000");

        String answer2 = scanner.nextLine();
        if (answer2.equals("a")) {
            System.out.println("Верно!");
            score++;
        } else {
            System.out.println("Неправильно!");
        }

        System.out.println("Какая компания разработала Джаву? (напишите ответ)");

        String answer3 = scanner.nextLine();
        if (answer3.equals("Sun Microsystems")) {
            System.out.println("Верно!");
            score++;
        } else {
            System.out.println("Неправильно!");
        }

        if (score >= 2) {
            System.out.println("Вы справились!");
        } else {
            System.out.println("Учитесь больше!");
        }
    }
}
