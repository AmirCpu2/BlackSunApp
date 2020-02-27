package amircpu.ir;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.text.Html;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        runWebView();
    }

    @Override
    public boolean isActivityTransitionRunning() {
        return super.isActivityTransitionRunning();
    }

    /**
     * Run Web View
     * Index Page
     */
    private boolean runWebView()
    {
        try
        {
            //Init value
            String url = "File:///android_asset/Page/Test.html";
            WebView webView = this.findViewById(R.id.webMain);
            webView.getSettings().setJavaScriptEnabled(true);
            webView.loadUrl(url);
            webView.addJavascriptInterface(new WebAppInterface(this), "Android");
            return true;
        }
        catch (Exception ex)
        {
            return false;
        }
    }
}
