
import com.mycompany.crawlertest.GrabManager;
import com.mycompany.crawlertest.GrabPage;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author root
 */
public class TestGrabPage {

    public static void main(String[] args) throws InterruptedException, ExecutionException, MalformedURLException, IOException {
        GrabManager grabManager = new GrabManager(2, 200);
        grabManager.go(new URL("http://xabuon.com/"));
        //grabManager.write("urllist.txt");
    }
}
