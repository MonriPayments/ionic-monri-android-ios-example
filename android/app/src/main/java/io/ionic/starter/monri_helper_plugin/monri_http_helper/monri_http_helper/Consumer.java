package io.ionic.starter.monri_helper_plugin.monri_http_helper.monri_http_helper;

@FunctionalInterface
public interface Consumer<T> {
    void accept(T t);
}
