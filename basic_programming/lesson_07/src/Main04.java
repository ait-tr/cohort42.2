import java.util.Scanner;

public class Main04 {
/*
Сделать программу-предсказатель будущего: в нее нужно ввести свое имя и дату рождения, а она скажет,
насколько счастливая жизнь вас ожидает
 */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Как вас зовут?");
        String name = scanner.nextLine();
        System.out.println("Введите день рождения");
        int day = scanner.nextInt();
        System.out.println("Введите месяц рождения (числом)");
        int month = scanner.nextInt();
        System.out.println("Введите год рождения");
        int year = scanner.nextInt();

        double result = Math.sin(name.length() + day * month + year);

        if (result < 0.15) {
            System.out.println("У вас очень плохая удача");
        } else if (result < 0.25) {
            System.out.println("У вас будет невеселая жизнь");
        } else if (result < 0.5) {
            System.out.println("У вас будет серая и скучная жизнь");
        }  else if (result < 0.7) {
            System.out.println("У вас будет хорошая жизнь");
        } else if (result < 0.95) {
            System.out.println("У вас будет радостная жизнь");
        } else {
            System.out.println("У вас будет шикарная и богатая жизнь");
        }
    }
}
