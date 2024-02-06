package last_homework;

import java.util.Scanner;

public class Task04 {

    /*
    Комбинированный налог: Создайте программу для расчёта налога, который зависит от категории
    товара и региона покупателя. Налог на электронику 10%, на одежду 5%. Если покупатель из региона A,
    применяется дополнительный налог 2%.
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double electronicTax = 0.1;
        double clothesTax = 0.05;
        double regionalTax = 0.02;

        System.out.println("Введите исходную цену");
        double price = scanner.nextDouble();
        System.out.println("Какая категория вашего товара? 1. Электроника 2. Одежда");
        int category = scanner.nextInt();
        System.out.println("Находитесь ли вы в регионе А? 1. Да 2. Нет");
        int region = scanner.nextInt();

        double tax = 0;
        if (category == 1) {
            tax += price * electronicTax;
        } else if (category == 2) {
            tax += price * clothesTax;
        }
        if (region == 1) {
            tax += price * regionalTax;
        }

        System.out.println("Ваш налог: " + tax);
    }
}
