import java.util.Scanner;

public class Main02 {
    /*
    Спросить имя пользователя, и вывести приветствие с этим именем
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Как вас зовут?");
        String name = scanner.nextLine();

        System.out.println("Привет, " + name + '!');
    }
}
