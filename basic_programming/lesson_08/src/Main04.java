import java.util.Scanner;

public class Main04 {
    /*
    Напечатать первые N элементов последовательности Фибоначчи.
    Число N вводится с клавиатуры
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt() - 2;

        int n1 = 0;
        int n2 = 1;

        System.out.println(n1);
        System.out.println(n2);
        // просто считаем от 0 до введенного числа
        for (int counter = 0; counter < n; counter++) {
            // каждую четную операцию:
            if (counter % 2 == 0) {
                // записываем сумму двух чисел в первую переменную
                n1 = n1 + n2;
                // выводим ее
                System.out.println(n1);
            } else {
                // записываем сумму двух чисел во вторую переменную
                n2 = n1 + n2;
                // выводим ее
                System.out.println(n2);
            }
        }
    }
}
