package io.ionic.starter.monri_helper_plugin.monri_http_helper;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import io.ionic.starter.monri_helper_plugin.monri_http_helper.monri_http_helper.MonriHttpHelper;

@CapacitorPlugin(name = "MonriHelper")
public class MonriHelperPlugin extends Plugin {

  @PluginMethod
  public void createPaymentSession(PluginCall call) {
    MonriHttpHelper.createPaymentSession(clientSecret -> {
      JSObject ret = new JSObject();
      ret.put("client_secret", clientSecret); // see sig of method in plugin
      call.resolve(ret);
    }).execute();
  }

}
