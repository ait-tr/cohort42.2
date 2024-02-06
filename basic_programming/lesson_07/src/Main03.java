import java.util.Scanner;

public class Main03 {
    /*
    Сделать калькулятор деления, который спросит два числа, и выведет полностью выражение, которое было посчитано
    Например, для ввода 8 2 программа выведет 8 / 2 = 4
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите два числа, которые нужно разделить");
        double a = scanner.nextDouble();
        double b = scanner.nextDouble();

        String res;
        if (b == 0) {
            res = "Делить на ноль нельзя!";
        } else {
            res = (a + " / " + b) + " = " + (a / b);
        }
        System.out.println(res);
    }
}
