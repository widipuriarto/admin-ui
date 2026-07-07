describe('E2E Dashboard & Menu Verification', () => {
  it('Memastikan user berhasil login dan seluruh komponen dashboard dirender sempurna', () => {
    
    // LANGKAH 1 & 2: Kunjungi halaman web dan lakukan proses Autentikasi (Login)
    cy.visit('https://admin-ui-theta-azure.vercel.app/');
    cy.get('input#email').should('be.visible').type('111202314962@mhs.dinus.ac.id'); // Sesuaikan dengan email akun Anda
    cy.get('input#password').should('be.visible').type('123456'); // Sesuaikan dengan password
    cy.get('button').contains('Login').click();

    // LANGKAH 3: Verifikasi Identitas & Header Dashboard
    cy.url().should('eq', 'https://admin-ui-theta-azure.vercel.app/'); // Pastikan terarah ke URL root dasbor
    cy.get('header').within(() => {
      cy.get('input').should('exist'); // Memastikan ada kolom Search
      cy.get('svg').should('exist'); // Memastikan ada ikon Lonceng (Notifikasi)
    });

    // LANGKAH 4: Verifikasi Ketersediaan Seluruh Menu Navigasi (Sidebar)
    cy.get('nav').within(() => {
      cy.contains('Overview').should('be.visible');
      cy.contains('Balances').should('be.visible');
      cy.contains('Transaction').should('be.visible');
      cy.contains('Bills').should('be.visible');
      cy.contains('Expenses').should('be.visible');
      cy.contains('Goals').should('be.visible');
      cy.contains('Settings').should('be.visible');
    });

    // LANGKAH 5: Verifikasi Konten Informasi Dashboard (Widget Cards)
    cy.contains('Total Balance').should('be.visible');
    cy.contains('Goals').should('be.visible');
    cy.contains('Upcoming Bill').should('be.visible');
    cy.contains('Recent Transaction').should('be.visible');
    cy.contains('Statistics').should('be.visible');
    cy.contains('Expenses Breakdown').should('be.visible');

    // LANGKAH 6: Verifikasi Aksi Tambahan (Logout)
    cy.contains('Logout').should('be.visible');
  });
});
