package com.unique.test;

/**
 * Created by nan on 2017/5/3.
 */
public class testClass {
    public static void main(String[] args) {
        Foo foo1 = new Foo();
        Class c1 = Foo.class;
        Class c2 = foo1.getClass();
        Class c3 = null;
        try {
            c3 = Class.forName("com.unique.test.Foo");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        System.out.println(c1);
        System.out.println(c2);
        System.out.println(c3);
    }

}
class Foo{}
