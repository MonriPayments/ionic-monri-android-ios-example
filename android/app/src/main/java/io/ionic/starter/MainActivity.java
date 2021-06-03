package io.ionic.starter;

import android.content.Intent;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.monri.ionic.IonicMonriPlugin;
import com.monri.plugins.helper.MonriHelperPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
     registerPlugin(IonicMonriPlugin.class);
     registerPlugin(MonriHelperPlugin.class);
  }

  @Override
  protected void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    IonicMonriPlugin ionicMonriPlugin = (IonicMonriPlugin) bridge.getPlugin("IonicMonri").getInstance();
    ionicMonriPlugin.monriHandleOnActivityResult(requestCode, resultCode, data);
  }
}
