
import java.io.IOException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author root
 */
public class test {

    public static void main(String[] args) throws IOException {
        Document document = null;

        // need http protocol
        document = Jsoup.connect("http://xabuon.com/content/63461-v--co-that-100-khoa-hocbo-tay-khong-giai-thich-duoc--x.htm").get();

        // get page title
        String title = document.title();
        System.out.println("title : " + title);
//
        if (document.getElementsByTag("h1") != null && document.getElementsByTag("h1").size() != 0) {
           
            Elements videoTag = document.getElementsByTag("iframe");
            if (videoTag != null && videoTag.size() != 0) {

                for (Element element : videoTag) {
                    if (element.hasAttr("allowfullscreen")) {
                        String tag = element.toString();
                        System.out.println(document.getElementsByTag("h1").get(1).text() + " ___  " + tag);
                    }
                }

            }
        }
    }
}
