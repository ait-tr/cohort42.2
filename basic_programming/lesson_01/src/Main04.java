import java.util.Scanner;

public class Main04 {
    /*
    Факториал натурального числа.
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();

        int res = 1;
        for (int i = 2; i <= n; i++) {
            res *= i;
        }
        System.out.println(res);
    }
}
