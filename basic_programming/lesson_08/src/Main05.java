
import java.util.Scanner;

public class Main05 {
    /*
    Проверить, является ли число простым
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = scanner.nextInt();

        boolean isPrime = true;
        // проходим от 2 до половины числа
        for (int i = 2; i <= number / 2 + 1; i++) {
            // если число делится на счетчик (который будет 2 3 4 5 и тд на каждой итерации) нацело, то число не простое
            if (number % i == 0) {
                // поэтому эту переменную меняем на false
                isPrime = false;
            }
        }
        if (isPrime) {
            System.out.println("Простое число");
        } else {
            System.out.println("Не простое число");
        }
    }
}
