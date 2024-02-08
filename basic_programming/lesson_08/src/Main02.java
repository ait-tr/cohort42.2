import java.util.Scanner;

public class Main02 {
    /*
    Посчитать сумму всех вводимых пользователем чисел, пока не будет введен 0
     */

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int sum = 0;
        System.out.println("Введите сколько угодно чисел чтобы посчитать сумму (0 для остановки)");
        int n = scanner.nextInt();
        // пока Н не равно 0
        while (n != 0) {
            // прибавляем Н к сумме
            sum += n;
            // считываем новое значение для Н
            n = scanner.nextInt();
        }
        System.out.println("Ответ: " + sum);
    }
}
