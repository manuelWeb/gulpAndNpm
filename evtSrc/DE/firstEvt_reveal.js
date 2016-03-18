(function () {
  // IEF protege variables  // raccourci getElemntById : _id(monId)
  function _id (id) {
    return document.getElementById(id);
  }
  // masque dia1-3
  $('#id_diapo1,#id_diapo2,#id_diapo3,#id_diapo4,#id_diapo5,#id_diapo6').css({'display':'none','opacity':'0'})

  function fade_show(divId,lapsToShow) {
    $(divId)
    .css({'display':'block'})
    .animate({
      opacity: 1
    },lapsToShow)
  }
  // fct jQ masquer(elmnts.id)
  function fade_hide(divId,lapsToHide) {
      $(divId).animate({
        opacity:0
      },lapsToHide,function (){
        $(this).css({'display':'none'})
      });
  };
  // affiche elmnt(ID_elt1, ID_elt2, ID_elt3 etc...)
  function showDiv(name){
    var argL = parseFloat(arguments.length),
        tab = [];
    for (var i = 0; i < argL; i++) {
      tab.push(arguments[i]);
    };// recup ID -> tab[]

    var indexDiapo = 0,
        lapsToShow = 600;

    var show = setInterval(function () {
      if(indexDiapo <= (argL/2)-1){
        var idArg = tab[indexDiapo],
            diiv = _id(idArg);
        // console.log(diiv)
        indexDiapo++;
        fade_show(diiv,lapsToShow);
      }else{
        clearInterval(show);
        setTimeout(next_show,2000);
      }
    },lapsToShow); // END show

    function next_show () {
      var indexNext = 3,
          tabl = tab.length,
          indexHide = (tabl-tabl)/2;
      var timerNext = setInterval(function () {
        // masque eltOld (dia1,dia2,dia3)
        // console.info(indexHide);
        if(indexNext>indexHide-1 && tab[indexHide] != 'id_diapo4'){
          // console.info(tab[indexHide]);
          var eltOld = _id(tab[indexHide]);
          fade_hide(eltOld,600)
          indexHide++;
        }
        if(indexNext<tabl){
          var diiv = _id(tab[indexNext]);
          // console.log( diiv );
          fade_show(diiv,lapsToShow);
          indexNext++;
        }else{
          var sto = setTimeout(function () {
            hideAll(tab,tabl,sto);
          } ,2000);
          clearInterval(timerNext);
          // console.log(tab);
        }
      },lapsToShow);    
    };
    
    function hideAll (tab,tabl,sto) {
      clearTimeout(sto);
      // console.log(tab)
      for (var i = 0; i < tabl; i++) {
        var elmntsTohide = _id(tab[i])
        fade_hide(elmntsTohide);
      };
      var sto2 = setTimeout(function () {
        showDiv('id_diapo1','id_diapo2','id_diapo3','id_diapo4','id_diapo5','id_diapo6');/**/
        clearTime(sto2)
      } ,2000);
      function clearTime (idvalue) {
        clearTimeout(sto2);
      };
    }
  };// END showDiv
  showDiv('id_diapo1','id_diapo2','id_diapo3','id_diapo4','id_diapo5','id_diapo6');/**/

})();// END IEF