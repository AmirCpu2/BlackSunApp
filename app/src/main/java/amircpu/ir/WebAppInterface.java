package amircpu.ir;

import android.content.Context;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

public class WebAppInterface {
    Context mContext;

    /** Instantiate the interface and set the context */
    WebAppInterface(Context c) {
        mContext = c;
    }

    /** Show a toast from the web page */
    @JavascriptInterface
    public void showToast(String toast) { Toast.makeText(mContext, toast, Toast.LENGTH_SHORT).show(); }

    /** Return Value Test */
    @JavascriptInterface
    public String howTo()
    {
        int[] arr = new int[10];
        arr[0] = 1;
        return "hallo";
    }

    /** CheckHotspot */
    @JavascriptInterface
    public boolean hotspotStatus()
    {
        try
        {
            return ApManager.isApOn(this.mContext);
        }
        catch (Exception ex)
        {
            return false;
        }
    }

}