/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.game;

/**
 *
 * @author luis1
 */
public class Player {
    private String name;
    private boolean gameOrver = false;
    private int money = 20000;

    public Player(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMoney() {
        return money;
    }

    public void addMoney(int moreMoney) {
       this.money += moreMoney;
    }
    
    public void removeMoney(int lessMoney) {
        if(lessMoney <= this.money) {
            this.money -= lessMoney;
        }
    }

    public boolean isGameOrver() {
        return gameOrver;
    }

    public void setGameOrver(boolean gameOrver) {
        this.gameOrver = gameOrver;
    }
}
