package com.diabolicallabs.quant.model;

import io.vertx.codegen.annotations.DataObject;
import io.vertx.core.json.JsonObject;

import java.time.Instant;

@DataObject
public class Split /* extends BaseEntityObject */ {

  public String exchange;
  public String symbol;
  public Instant splitDate;
  public Integer before;
  public Integer after;

  public Split() {
  }

  public Split(JsonObject json) {
//    super(json);
  }

  public JsonObject toJson() {
//    return super.toJson();
    return new JsonObject();
  }

  public String getExchange() {
    return exchange;
  }

  public Split setExchange(String exchange) {
    this.exchange = exchange;
    return this;
  }

  public String getSymbol() {
    return symbol;
  }

  public Split setSymbol(String symbol) {
    this.symbol = symbol;
    return this;
  }

  public Instant getSplitDate() {
    return splitDate;
  }

  public Split setSplitDate(Instant splitDate) {
    this.splitDate = splitDate;
    return this;
  }

  public Integer getBefore() {
    return before;
  }

  public Split setBefore(Integer before) {
    this.before = before;
    return this;
  }

  public Integer getAfter() {
    return after;
  }

  public Split setAfter(Integer after) {
    this.after = after;
    return this;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    Split split = (Split) o;

    if (!exchange.equals(split.exchange)) return false;
    if (!symbol.equals(split.symbol)) return false;
    return splitDate.equals(split.splitDate);
  }

  @Override
  public int hashCode() {
    int result = exchange.hashCode();
    result = 31 * result + symbol.hashCode();
    result = 31 * result + splitDate.hashCode();
    return result;
  }

}
