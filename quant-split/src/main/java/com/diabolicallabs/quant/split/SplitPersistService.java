package com.diabolicallabs.quant.split;

import com.diabolicallabs.quant.model.Split;
import io.vertx.codegen.annotations.GenIgnore;
import io.vertx.codegen.annotations.ProxyGen;
import io.vertx.codegen.annotations.VertxGen;
import io.vertx.core.AsyncResult;
import io.vertx.core.Handler;
import io.vertx.core.Vertx;
import io.vertx.core.json.JsonObject;
import io.vertx.serviceproxy.ProxyHelper;

@ProxyGen
@VertxGen
public interface SplitPersistService {

  String DEFAULT_ADDRESS = "split.persist";

  @GenIgnore
  static SplitPersistService createProxy(Vertx vertx, String address) {
    return new SplitPersistServiceVertxEBProxy(vertx, address);
  }

  void create(Split split, Handler<AsyncResult<Split>> handler);

  void read(String id, Handler<AsyncResult<Split>> handler);

  void update(Split split, Handler<AsyncResult<Void>> handler);

  void delete(String id, Handler<AsyncResult<Void>> handler);

}
