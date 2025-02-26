package de.ait.javalessons.threads;

public class DemoThreadExtendsThread  extends Thread {

    private Thread thread;
    private String threadName;

    DemoThreadExtendsThread(String name){
        this.threadName = name;
        System.out.println("Creating " + threadName);
    }

    public void run(){
        System.out.println("Running " + threadName);

        if(threadName.equals("Demo Thread - 1")){
            thread.interrupt();
        }
        try {
            for (int i = 10; i > 0; i--) {
                System.out.println("Thread: " + threadName + ", " + i);
                Thread.sleep(500);
            }
        }
        catch (InterruptedException exception) {
            System.out.println("Thread " + threadName + " interrupted.");
        }
        System.out.println("Thread " + threadName + " exiting.");
    }

    public void start(){
        System.out.println("Starting " + threadName);
        if (thread == null) {
            thread = new Thread(this, threadName);
            thread.setName(threadName);
            if(threadName.equals("Demo Thread - 2")){
                thread.setPriority(Thread.MAX_PRIORITY);
            }
            thread.start();
        }
    }

}
