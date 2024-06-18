
    const displayWeapon = document.getElementById("weapon");
    const generate = document.getElementById("generate");

    generate.addEventListener("click", function () {
        displayWeapon.innerHTML = "Generated Weapon: " + generateWeapon().valueOf();
    });

    function randomNumber() {
       return Math.floor(Math.random() * 132)
    }
    const pickedWeapon = [];
    function generateWeapon(){
        const weapons = ["Sploosh-o-matic","Neo Sploosh-o-matic","Splattershot Jr.","Custom Splattershot Jr.","Splash-o-matic","Neo Splash-o-matic","Aerospray MG","Aerospray RG","Splattershot","Tentatek Splattershot","Hero Shot Replica","Octo Shot Replica",".52 Gal",".52 Gal Deco","N-ZAP '85","N-ZAP '89","Splattershot Pro","Forge Splattershot Pro",".96 Gal",".96 Gal Deco","Jet Squelcher","Custom Jet Squelcher","Splattershot Nova","Annaki Splattershot Nova","Luna Blaster","Luna Blaster Neo","Blaster","Custom Blaster","Range Blaster","Custom Range Blaster","Clash Blaster","Clash Blaster Neo","Rapid Blaster","Rapid Blaster Deco","Rapid Blaster Pro","Rapid Blaster Pro Deco","S-BLAST '92","S-BLAST '91","L-3 Nozzlenose","L-3 Nozzlenose D","H-3 Nozzlenose","H-3 Nozzlenose D","Squeezer","Foil Squeezer","Carbon Roller","Carbon Roller Deco","Splat Roller","Krak-On Splat Roller","Dynamo Roller","Gold Dynamo Roller","Flingza Roller","Foil Flingza Roller","Big Swig Roller","Big Swig Roller Express","Inkbrush","Inkbrush Nouveau","Octobrush","Octobrush Nouveau","Painbrush","Painbrush Nouveau","Classic Squiffer","New Squiffer","Splat Charger","Z+F Splat Charger","Splatterscope","Z+F Splatterscope","E-liter 4K","Custom E-liter 4K","E-liter 4K Scope","Custom E-liter 4K Scope","Bamboozler 14 Mk I","Bamboozler 14 Mk II","Goo Tuber","Custom Goo Tuber","Snipewriter 5H","Snipewriter 5B","Slosher","Slosher Deco","Tri-Slosher","Tri-Slosher Nouveau","Sloshing Machine","Sloshing Machine Neo","Bloblobber","Bloblobber Deco","Explosher","Custom Explosher","Dread Wringer","Dread Wringer D","Mini Splatling","Zink Mini Splatling","Heavy Splatling","Heavy Splatling Deco","Hydra Splatling","Custom Hydra Splatling","Ballpoint Splatling","Ballpoint Splatling Nouveau","Nautilus 47","Nautilus 79","Heavy Edit Splatling","Heavy Edit Splatling Nouveau","Dapple Dualies","Dapple Dualies Nouveau","Splat Dualies","Enperry Splat Dualies","Glooga Dualies","Glooga Dualies Deco","Dualie Squelchers","Custom Dualie Squelchers","Dark Tetra Dualies","Light Tetra Dualies","Douser Dualies FF","Custom Douser Dualies FF","Splat Brella","Sorella Brella","Tenta Brella","Tenta Sorella Brella","Undercover Brella","Undercover Sorella Brella","Recycled Brella 24 Mk I","Recycled Brella 24 Mk II","Tri-Stringer","Inkline Tri-Stringer","REEF-LUX 450","REEF-LUX 450 Deco","Wellstring V","Custom Wellstring V","Splatana Stamper","Splatana Stamper Nouveau","Splatana Wiper","Splatana Wiper Deco","Mint Decavitator","Charcoal Decavitator"];

        let num = randomNumber();
        while(pickedWeapon.includes(weapons.at(num).toString())){
            num = randomNumber();
        }
       pickedWeapon.push(weapons.at(num).toString());
        return weapons.at(num).toString();
    }



