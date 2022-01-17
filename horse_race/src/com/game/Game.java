/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.game;

import java.util.Random;
import java.awt.Color;
import java.awt.event.KeyEvent;
import java.util.ArrayList;
import java.util.List;

import com.start.Start;

/**
 *
 * @author luis1
 */
public class Game extends javax.swing.JFrame {

    private final Player p1;
    private final Player p2;
    private final Player p3;
    private final Player p4;
    /**
     * Creates new form Game
     * @param player1
     * @param player2
     * @param player3
     * @param player4
     */
    public Game(String player1, String player2, String player3, String player4) {
        initComponents();
        setLocationRelativeTo(null);

        p1 = new Player(player1);
        p2 = new Player(player2);
        p3 = new Player(player3);
        p4 = new Player(player4);
        
        setPlayerValues();
    }
    
    private void setPlayerValues() {
        if (p1.isGameOrver() && p2.isGameOrver() && p3.isGameOrver() && p4.isGameOrver()){
            javax.swing.JOptionPane.showMessageDialog(this, "Todos quedaron en Bancarrota :(, Buena Suerte a la Proxima", "GAME OVER | Carrera de Caballos", javax.swing.JOptionPane.INFORMATION_MESSAGE);
            Start newGame = new Start();
            newGame.setVisible(true);
            this.dispose();
        }

        if (p1.isGameOrver()) {
            p1_txt.setText("");
            p1_moneytxt.setText("");
            p1_price.setText("0");
            p1_price.setEditable(false);
            p1_select.setEditable(false);
        } else {
            p1_txt.setText(p1.getName());
            p1_moneytxt.setText("$ "+String.valueOf(p1.getMoney()));
        }
        
        if (p2.isGameOrver()) {
            p2_txt.setText("");
            p2_moneytxt.setText("");
            p2_price.setText("0");
            p2_price.setEditable(false);
            p2_select.setEditable(false);
        } else {
            p2_txt.setText(p2.getName());
            p2_moneytxt.setText("$ "+String.valueOf(p2.getMoney()));
        }
        
        if (p3.isGameOrver()) {
            p3_txt.setText("");
            p3_moneytxt.setText("");
            p3_price.setText("0");
            p3_price.setEditable(false);
            p3_select.setEditable(false);
        } else {
            p3_txt.setText(p3.getName());
            p3_moneytxt.setText("$ "+String.valueOf(p3.getMoney()));
        }
        
        if (p4.isGameOrver()) {
            p4_txt.setText("");
            p4_moneytxt.setText("");
            p4_price.setText("0");
            p4_price.setEditable(false);
            p4_select.setEditable(false);
        } else {
            p4_txt.setText(p4.getName());
            p4_moneytxt.setText("$ "+String.valueOf(p4.getMoney()));
        }
    }
    
    private int getSelectHorse(String select) {
        if(select.equals("Mostufa")) {
            return 1;
        }
        
        if(select.equals("Omicron")) {
            return 2;
        }
        
        if(select.equals("Paracron")) {
            return 3;
        }
        
        if(select.equals("Trueno")) {
            return 4;
        }
        
        return 0;
    }
    
    private String getSelectHorseById(int id){
        return switch (id) {
            case 1 -> "Mostufa";
            case 2 -> "Omicron";
            case 3 -> "Paracron";
            case 4 -> "Trueno";
            default -> "default";
        };
    }
    
    private void startGame() {
        Random classRandom = new Random();
        int winnerHorse = classRandom.nextInt(4);
        winnerHorse += 1;
        List<String> winners = new ArrayList<>();

        int s_p1, s_p2, s_p3, s_p4;
        s_p1 = getSelectHorse(String.valueOf(p1_select.getSelectedItem()));
        s_p2 = getSelectHorse(String.valueOf(p2_select.getSelectedItem()));
        s_p3 = getSelectHorse(String.valueOf(p3_select.getSelectedItem()));
        s_p4 = getSelectHorse(String.valueOf(p4_select.getSelectedItem()));
        
        if(s_p1==winnerHorse && !p1.isGameOrver()){
            winners.add(p1.getName());
        }
        if(s_p2==winnerHorse && !p2.isGameOrver()){
            winners.add(p2.getName());
        }
        if(s_p3==winnerHorse && !p3.isGameOrver()){
            winners.add(p3.getName());
        }
        if(s_p4==winnerHorse && !p4.isGameOrver()){
            winners.add(p4.getName());
        }
        
        int allMoney = Integer.parseInt(p1_price.getText()) + Integer.parseInt(p2_price.getText()) + Integer.parseInt(p3_price.getText())+ Integer.parseInt(p4_price.getText());
        int winMoney;
        try {
            winMoney = allMoney/winners.size();
        } catch(Exception e){
            winMoney = 0;
        }
        
        if(winners.contains(p1.getName())){
            if(!p1.isGameOrver()) {
                p1.addMoney(winMoney);
            }
        } else {
            p1.removeMoney(Integer.parseInt(p1_price.getText()));
            if(p1.getMoney()==0){
                p1.setGameOrver(true);
            }
        }
        
        if(winners.contains(p2.getName())){
            if(!p2.isGameOrver()) {
                p2.addMoney(winMoney);
            }
        } else {
            p2.removeMoney(Integer.parseInt(p2_price.getText()));
            if(p2.getMoney()==0){
                p2.setGameOrver(true);
            }
        }
        
        if(winners.contains(p3.getName())){
            if(!p3.isGameOrver()) {
                p3.addMoney(winMoney);
            }
        } else {
            p3.removeMoney(Integer.parseInt(p3_price.getText()));
            if(p3.getMoney()==0){
                p3.setGameOrver(true);
            }
        }
        
        if(winners.contains(p4.getName())){
            if(!p4.isGameOrver()) {
                p4.addMoney(winMoney);
            }
        } else {
            p4.removeMoney(Integer.parseInt(p4_price.getText()));
            if(p4.getMoney()==0){
                p4.setGameOrver(true);
            }
        }

        String result = "GANO EL CABALLO "+winnerHorse+": "+getSelectHorseById(winnerHorse)+"\nGANADORES:\n";
        
        for(int i=0;i<winners.size();i++){
            result+="  -> "+winners.get(i)+"\n";
        }
  
        javax.swing.JOptionPane.showMessageDialog(this, result, "Horse Rase | Carrera de Caballos", javax.swing.JOptionPane.INFORMATION_MESSAGE);
        setPlayerValues();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        BG_game = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        p1_label = new javax.swing.JPanel();
        p1_moneytxt = new javax.swing.JLabel();
        p1_txt = new javax.swing.JLabel();
        p1_select = new javax.swing.JComboBox<>();
        p1_price = new javax.swing.JTextField();
        p1_placeholder1 = new javax.swing.JLabel();
        p1_placeholder2 = new javax.swing.JLabel();
        p1_placeholder3 = new javax.swing.JLabel();
        p2_label = new javax.swing.JPanel();
        p2_moneytxt = new javax.swing.JLabel();
        p2_txt = new javax.swing.JLabel();
        p2_select = new javax.swing.JComboBox<>();
        p2_price = new javax.swing.JTextField();
        p2_placeholder1 = new javax.swing.JLabel();
        p2_placeholder2 = new javax.swing.JLabel();
        p2_placeholder3 = new javax.swing.JLabel();
        p3_label = new javax.swing.JPanel();
        p3_moneytxt = new javax.swing.JLabel();
        p3_txt = new javax.swing.JLabel();
        p3_select = new javax.swing.JComboBox<>();
        p3_price = new javax.swing.JTextField();
        p3_placeholder1 = new javax.swing.JLabel();
        p3_placeholder2 = new javax.swing.JLabel();
        p3_placeholder3 = new javax.swing.JLabel();
        p4_label = new javax.swing.JPanel();
        p4_moneytxt = new javax.swing.JLabel();
        p4_txt = new javax.swing.JLabel();
        p4_select = new javax.swing.JComboBox<>();
        p4_price = new javax.swing.JTextField();
        p4_placeholder1 = new javax.swing.JLabel();
        p4_placeholder2 = new javax.swing.JLabel();
        p4_placeholder3 = new javax.swing.JLabel();
        ready_btn = new javax.swing.JPanel();
        jLabel2 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setLocationByPlatform(true);
        setResizable(false);

        BG_game.setBackground(new java.awt.Color(255, 255, 255));
        BG_game.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel1.setFont(new java.awt.Font("Roboto Black", 3, 36)); // NOI18N
        jLabel1.setText("Hora de Apostar");
        BG_game.add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(100, 0, -1, -1));

        p1_label.setBackground(new java.awt.Color(0, 153, 153));
        p1_label.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        p1_moneytxt.setFont(new java.awt.Font("Roboto", 0, 12)); // NOI18N
        p1_moneytxt.setForeground(new java.awt.Color(255, 255, 255));
        p1_moneytxt.setText("money");
        p1_label.add(p1_moneytxt, new org.netbeans.lib.awtextra.AbsoluteConstraints(70, 30, 81, 30));

        p1_txt.setFont(new java.awt.Font("Roboto", 1, 18)); // NOI18N
        p1_txt.setForeground(new java.awt.Color(255, 255, 255));
        p1_txt.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        p1_txt.setText("User1");
        p1_label.add(p1_txt, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 190, 40));

        p1_select.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Mostufa", "Omicron", "Paracron", "Trueno" }));
        p1_label.add(p1_select, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 100, 120, 30));

        p1_price.setText("Cantidad a Apostar");
        p1_price.addFocusListener(new java.awt.event.FocusAdapter() {
            public void focusGained(java.awt.event.FocusEvent evt) {
                p1_priceFocusGained(evt);
            }
        });
        p1_price.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mousePressed(java.awt.event.MouseEvent evt) {
                p1_priceMousePressed(evt);
            }
        });
        p1_price.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                p1_priceKeyTyped(evt);
            }
        });
        p1_label.add(p1_price, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 70, 120, -1));

        p1_placeholder1.setFont(new java.awt.Font("Roboto Black", 0, 12)); // NOI18N
        p1_placeholder1.setForeground(new java.awt.Color(0, 255, 255));
        p1_placeholder1.setText("Dinero:");
        p1_label.add(p1_placeholder1, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 30, -1, 30));

        p1_placeholder2.setFont(new java.awt.Font("Roboto Black", 0, 12)); // NOI18N
        p1_placeholder2.setForeground(new java.awt.Color(255, 255, 255));
        p1_placeholder2.setText("Apostar:");
        p1_label.add(p1_placeholder2, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 70, -1, 20));

        p1_placeholder3.setFont(new java.awt.Font("Roboto Black", 0, 12)); // NOI18N
        p1_placeholder3.setForeground(new java.awt.Color(255, 255, 255));
        p1_placeholder3.setText("Caballo:");
        p1_label.add(p1_placeholder3, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 100, -1, 30));

        BG_game.add(p1_label, new org.netbeans.lib.awtextra.AbsoluteConstraints(40, 50, 190, 150));

        p2_label.setBackground(new java.awt.Color(0, 204, 204));
        p2_label.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        p2_moneytxt.setFont(new java.awt.Font("Roboto", 0, 12)); // NOI18N
        p2_moneytxt.setForeground(new java.awt.Color(51, 51, 51));
        p2_moneytxt.setText("money");
        p2_label.add(p2_moneytxt, new org.netbeans.lib.awtextra.AbsoluteConstraints(70, 30, 81, 30));

        p2_txt.setFont(new java.awt.Font("Roboto", 1, 18)); // NOI18N
        p2_txt.setForeground(new java.awt.Color(255, 255, 255));
        p2_txt.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        p2_txt.setText("User2");
        p2_label.add(p2_txt, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 190, 40));

        p2_select.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Mostufa", "Omicron", "Paracron", "Trueno" }));
        p2_label.add(p2_select, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 100, 120, 30));

        p2_price.setText("Cantidad a Apostar");
        p2_price.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mousePressed(java.awt.event.MouseEvent evt) {
                p2_priceMousePressed(evt);
            }
        });
        p2_price.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                p2_priceKeyTyped(evt);
            }
        });
        p2_label.add(p2_price, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 70, 120, -1));

        p2_placeholder1.setFont(new java.awt.Font("Roboto Black", 0, 12)); // NOI18N
        p2_placeholder1.setForeground(new java.awt.Color(0, 102, 102));
        p2_placeholder1.setText("Dinero:");
        p2_label.add(p2_placeholder1, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 30, -1, 30));

        p2_placeholder2.setFont(new java.awt.Font("Roboto Black", 0, 12)); // NOI18N
        p2_placeholder2.setForeground(new java.awt.Color(255, 255, 255));
        p2_placeholder2.setText("Apostar:");
        p2_label.add(p2_placeholder2, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 70, -1, 20));

        p2_placeholder3.setFont(new java.awt.Font("Roboto Black", 0, 12)); // NOI18N
        p2_placeholder3.setForeground(new java.awt.Color(255, 255, 255));
        p2_placeholder3.setText("Caballo:");
        p2_label.add(p2_placeholder3, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 100, -1, 30));

        BG_game.add(p2_label, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 50, 190, 150));

        p3_label.setBackground(new java.awt.Color(0, 204, 204));
        p3_label.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        p3_moneytxt.setFont(new java.awt.Font("Roboto", 0, 12)); // NOI18N
        p3_moneytxt.setForeground(new java.awt.Color(51, 51, 51));
        p3_moneytxt.setText("money");
        p3_label.add(p3_moneytxt, new org.netbeans.lib.awtextra.AbsoluteConstraints(70, 30, 81, 30));

        p3_txt.setFont(new java.awt.Font("Roboto", 1, 18)); // NOI18N
        p3_txt.setForeground(new java.awt.Color(255, 255, 255));
        p3_txt.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        p3_txt.setText("User3");
        p3_label.add(p3_txt, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 190, 40));

        p3_select.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Mostufa", "Omicron", "Paracron", "Trueno" }));
        p3_label.add(p3_select, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 100, 120, 30));

        p3_price.setText("Cantidad a Apostar");
        p3_price.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mousePressed(java.awt.event.MouseEvent evt) {
                p3_priceMousePressed(evt);
            }
        });
        p3_price.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                p3_priceKeyTyped(evt);
            }
        });
        p3_label.add(p3_price, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 70, 120, -1));

        p3_placeholder1.setFont(new java.awt.Font("Roboto Black", 0, 12)); // NOI18N
        p3_placeholder1.setForeground(new java.awt.Color(0, 102, 102));
        p3_placeholder1.setText("Dinero:");
        p3_label.add(p3_placeholder1, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 30, -1, 30));

        p3_placeholder2.setFont(new java.awt.Font("Roboto Black", 0, 12)); // NOI18N
        p3_placeholder2.setForeground(new java.awt.Color(255, 255, 255));
        p3_placeholder2.setText("Apostar:");
        p3_label.add(p3_placeholder2, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 70, -1, 20));

        p3_placeholder3.setFont(new java.awt.Font("Roboto Black", 0, 12)); // NOI18N
        p3_placeholder3.setForeground(new java.awt.Color(255, 255, 255));
        p3_placeholder3.setText("Caballo:");
        p3_label.add(p3_placeholder3, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 100, -1, 30));

        BG_game.add(p3_label, new org.netbeans.lib.awtextra.AbsoluteConstraints(40, 200, 190, 150));

        p4_label.setBackground(new java.awt.Color(0, 153, 153));
        p4_label.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        p4_moneytxt.setFont(new java.awt.Font("Roboto", 0, 12)); // NOI18N
        p4_moneytxt.setForeground(new java.awt.Color(255, 255, 255));
        p4_moneytxt.setText("money");
        p4_label.add(p4_moneytxt, new org.netbeans.lib.awtextra.AbsoluteConstraints(70, 30, 81, 30));

        p4_txt.setFont(new java.awt.Font("Roboto", 1, 18)); // NOI18N
        p4_txt.setForeground(new java.awt.Color(255, 255, 255));
        p4_txt.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        p4_txt.setText("User4");
        p4_label.add(p4_txt, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 0, 190, 40));

        p4_select.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Mostufa", "Omicron", "Paracron", "Trueno" }));
        p4_label.add(p4_select, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 100, 120, 30));

        p4_price.setText("Cantidad a Apostar");
        p4_price.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mousePressed(java.awt.event.MouseEvent evt) {
                p4_priceMousePressed(evt);
            }
        });
        p4_price.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                p4_priceKeyTyped(evt);
            }
        });
        p4_label.add(p4_price, new org.netbeans.lib.awtextra.AbsoluteConstraints(60, 70, 120, -1));

        p4_placeholder1.setFont(new java.awt.Font("Roboto Black", 0, 12)); // NOI18N
        p4_placeholder1.setForeground(new java.awt.Color(0, 255, 255));
        p4_placeholder1.setText("Dinero:");
        p4_label.add(p4_placeholder1, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 30, -1, 30));

        p4_placeholder2.setFont(new java.awt.Font("Roboto Black", 0, 12)); // NOI18N
        p4_placeholder2.setForeground(new java.awt.Color(255, 255, 255));
        p4_placeholder2.setText("Apostar:");
        p4_label.add(p4_placeholder2, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 70, -1, 20));

        p4_placeholder3.setFont(new java.awt.Font("Roboto Black", 0, 12)); // NOI18N
        p4_placeholder3.setForeground(new java.awt.Color(255, 255, 255));
        p4_placeholder3.setText("Caballo:");
        p4_label.add(p4_placeholder3, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 100, -1, 30));

        BG_game.add(p4_label, new org.netbeans.lib.awtextra.AbsoluteConstraints(230, 200, -1, 150));

        ready_btn.setBackground(new java.awt.Color(0, 0, 0));
        ready_btn.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        ready_btn.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                ready_btnMouseClicked(evt);
            }
            public void mouseEntered(java.awt.event.MouseEvent evt) {
                ready_btnMouseEntered(evt);
            }
            public void mouseExited(java.awt.event.MouseEvent evt) {
                ready_btnMouseExited(evt);
            }
        });

        jLabel2.setFont(new java.awt.Font("Roboto", 0, 18)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(255, 255, 255));
        jLabel2.setText("LISTOS!");

        javax.swing.GroupLayout ready_btnLayout = new javax.swing.GroupLayout(ready_btn);
        ready_btn.setLayout(ready_btnLayout);
        ready_btnLayout.setHorizontalGroup(
            ready_btnLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, ready_btnLayout.createSequentialGroup()
                .addContainerGap(75, Short.MAX_VALUE)
                .addComponent(jLabel2)
                .addGap(70, 70, 70))
        );
        ready_btnLayout.setVerticalGroup(
            ready_btnLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, ready_btnLayout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(jLabel2)
                .addContainerGap())
        );

        BG_game.add(ready_btn, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 360, 210, 40));

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(BG_game, javax.swing.GroupLayout.DEFAULT_SIZE, 458, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(BG_game, javax.swing.GroupLayout.PREFERRED_SIZE, 411, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 2, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void ready_btnMouseEntered(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_ready_btnMouseEntered
        ready_btn.setBackground(new Color(25,25,25));
    }//GEN-LAST:event_ready_btnMouseEntered

    private void ready_btnMouseExited(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_ready_btnMouseExited
        ready_btn.setBackground(new Color(0,0,0));
    }//GEN-LAST:event_ready_btnMouseExited

    private void ready_btnMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_ready_btnMouseClicked
        String regexValid = "[+-]?\\d*(\\.\\d+)?";

        if(!p1_price.getText().matches(regexValid) || p1_price.getText().equals("") || Integer.parseInt(p1_price.getText()) > p1.getMoney() ){
            javax.swing.JOptionPane.showMessageDialog(this, "UPSS, "+p1.getName()+" no ingreso un valor valido", "Horse Rase | Carrera de Caballos", javax.swing.JOptionPane.ERROR_MESSAGE);
            return;
        }

        if(!p2_price.getText().matches(regexValid) || p2_price.getText().equals("") || Integer.parseInt(p2_price.getText()) > p2.getMoney() ){
            javax.swing.JOptionPane.showMessageDialog(this, "UPSS, "+p2.getName()+" no ingreso un valor valido", "Horse Rase | Carrera de Caballos", javax.swing.JOptionPane.ERROR_MESSAGE);
            return;
        }
        
        if(!p3_price.getText().matches(regexValid) || p3_price.getText().equals("") || Integer.parseInt(p3_price.getText()) > p3.getMoney() ){
            javax.swing.JOptionPane.showMessageDialog(this, "UPSS, "+p3.getName()+" no ingreso un valor valido", "Horse Rase | Carrera de Caballos", javax.swing.JOptionPane.ERROR_MESSAGE);
            return;
        }
        
        if(!p4_price.getText().matches(regexValid) || p4_price.getText().equals("") || Integer.parseInt(p4_price.getText()) > p4.getMoney() ){
            javax.swing.JOptionPane.showMessageDialog(this, "UPSS, "+p4.getName()+" no ingreso un valor valido", "Horse Rase | Carrera de Caballos", javax.swing.JOptionPane.ERROR_MESSAGE);
            return;
        }

        startGame();
    }//GEN-LAST:event_ready_btnMouseClicked

    private void p1_priceKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_p1_priceKeyTyped
        char c = evt.getKeyChar();
        if(!(Character.isDigit(c)) || c==KeyEvent.VK_BACK_SPACE || c==KeyEvent.VK_DELETE){
            evt.consume();
        }
    }//GEN-LAST:event_p1_priceKeyTyped

    private void p2_priceKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_p2_priceKeyTyped
        char c = evt.getKeyChar();
        if(!(Character.isDigit(c)) || c==KeyEvent.VK_BACK_SPACE || c==KeyEvent.VK_DELETE){
            evt.consume();
        }
    }//GEN-LAST:event_p2_priceKeyTyped

    private void p3_priceKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_p3_priceKeyTyped
        char c = evt.getKeyChar();
        if(!(Character.isDigit(c)) || c==KeyEvent.VK_BACK_SPACE || c==KeyEvent.VK_DELETE){
            evt.consume();
        }
    }//GEN-LAST:event_p3_priceKeyTyped

    private void p4_priceKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_p4_priceKeyTyped
        char c = evt.getKeyChar();
        if(!(Character.isDigit(c)) || c==KeyEvent.VK_BACK_SPACE || c==KeyEvent.VK_DELETE){
            evt.consume();
        }
    }//GEN-LAST:event_p4_priceKeyTyped

    private void p1_priceMousePressed(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_p1_priceMousePressed
        if(p1_price.getText().equals("Cantidad a Apostar")){
            p1_price.setText("");
        }
    }//GEN-LAST:event_p1_priceMousePressed

    private void p2_priceMousePressed(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_p2_priceMousePressed
        if(p2_price.getText().equals("Cantidad a Apostar")){
            p2_price.setText("");
        }
    }//GEN-LAST:event_p2_priceMousePressed

    private void p3_priceMousePressed(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_p3_priceMousePressed
        if(p3_price.getText().equals("Cantidad a Apostar")){
            p3_price.setText("");
        }
    }//GEN-LAST:event_p3_priceMousePressed

    private void p4_priceMousePressed(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_p4_priceMousePressed
        if(p4_price.getText().equals("Cantidad a Apostar")){
            p4_price.setText("");
        }
    }//GEN-LAST:event_p4_priceMousePressed

    private void p1_priceFocusGained(java.awt.event.FocusEvent evt) {//GEN-FIRST:event_p1_priceFocusGained
        if(p1_price.getText().equals("Cantidad a Apostar")){
            p1_price.setText("");
        }
    }//GEN-LAST:event_p1_priceFocusGained

    /**
     * @param args the command line arguments
     */
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JPanel BG_game;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JPanel p1_label;
    private javax.swing.JLabel p1_moneytxt;
    private javax.swing.JLabel p1_placeholder1;
    private javax.swing.JLabel p1_placeholder2;
    private javax.swing.JLabel p1_placeholder3;
    private javax.swing.JTextField p1_price;
    private javax.swing.JComboBox<String> p1_select;
    private javax.swing.JLabel p1_txt;
    private javax.swing.JPanel p2_label;
    private javax.swing.JLabel p2_moneytxt;
    private javax.swing.JLabel p2_placeholder1;
    private javax.swing.JLabel p2_placeholder2;
    private javax.swing.JLabel p2_placeholder3;
    private javax.swing.JTextField p2_price;
    private javax.swing.JComboBox<String> p2_select;
    private javax.swing.JLabel p2_txt;
    private javax.swing.JPanel p3_label;
    private javax.swing.JLabel p3_moneytxt;
    private javax.swing.JLabel p3_placeholder1;
    private javax.swing.JLabel p3_placeholder2;
    private javax.swing.JLabel p3_placeholder3;
    private javax.swing.JTextField p3_price;
    private javax.swing.JComboBox<String> p3_select;
    private javax.swing.JLabel p3_txt;
    private javax.swing.JPanel p4_label;
    private javax.swing.JLabel p4_moneytxt;
    private javax.swing.JLabel p4_placeholder1;
    private javax.swing.JLabel p4_placeholder2;
    private javax.swing.JLabel p4_placeholder3;
    private javax.swing.JTextField p4_price;
    private javax.swing.JComboBox<String> p4_select;
    private javax.swing.JLabel p4_txt;
    private javax.swing.JPanel ready_btn;
    // End of variables declaration//GEN-END:variables
}
