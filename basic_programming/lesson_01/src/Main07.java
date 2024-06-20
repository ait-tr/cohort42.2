import java.util.Scanner;

public class Main07 {
    /*
       Напечатать "пирамидку" из звездочек
       Высота пирамидки вводится с клавиатуры
       Примерный вид:
       *
       **
       ***
       ****
       *****
       ******
       *****
       ****
       ***
       **
       *

    */
     public static void main(String[] args) {
         Scanner scanner = new Scanner(System.in);
         System.out.println("Введите высоту:");
         int n = scanner.nextInt();

         for (int i = 1; i <= n; i++) {
             for (int j = 1; j <= i; j++) {
                 System.out.print("*");
             }
             System.out.println();
         }
         for (int i = n - 1; i >= 1; i--) {
             for (int j = 1; j <= i; j++) {
                 System.out.print("*");
             }
             System.out.println();
         }
     }
}
