import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  openFaq() {
    window.open('https://pablonft.notion.site/pablonft/Babylon-DAO-FAQs-faf9057c68b24eea90d35ec8d57a181b','_newtab');
  }

  openMap() {
    window.open('https://babyloniansmap.com','_newtab2');
  }

  openMetaverse() {
    window.open('https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.cryptovoxels.com%2Fspaces%2F1cb72d9c-4a7f-49fb-8277-77166653c5b2%3Ffbclid%3DIwAR2BL08wvkBHZhabMwW19oE6CkpnEVmAzAEyk7g_fviQIrUi_hf_-eTxGRs&h=AT2elqW_2fYyJcEYRzu9TP1dAqJabx2s7V89O7RSzAJuS555mIQ88CeQTRazijI0pdD32nTtuQ8bLxeFwwh70JmLGolb0ikZlKFqbQjdeelTuw3OuartNYFWVKQGt8TEHRluT-vkbNBwlx0ueLurHg','_newtab3');
  }

}
