/**
 * 有些对象并不适合直接访问，通过代理 的方式会会更好。
 * 代理模式为其他对象提供代理以控制这个对象的访问
 */
abstract class Subject {
    abstract request(): void;
}

class ReadSubject extends Subject {
    request(){
        console.log("my is ReadSubject");
    }
}

class Proxys extends Subject {
    private realSubject: ReadSubject;
    request(){
        if(!this.realSubject){
            this.realSubject = new ReadSubject;
        }
        this.realSubject.request();
    }
};

let proxys = new Proxys();
proxys.request(); // my is ReadSubject

