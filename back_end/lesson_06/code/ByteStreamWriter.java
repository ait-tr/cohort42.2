package de.ait.javalessons.consultation;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class ByteStreamWriter {
    public static void main(String[] args) {
        String strToWrite = "Hello";

        try {
            FileOutputStream fileOutputStream = new FileOutputStream("output.bin");
            byte[] bytes = strToWrite.getBytes();
            fileOutputStream.write(bytes);
            System.out.println("File written successfully!");
            fileOutputStream.close();
        }
        catch (FileNotFoundException exception){
            System.out.println("File not found!");
        }
        catch (IOException exception){
            System.out.println("Error while writing to file!");
        }
    }
}
