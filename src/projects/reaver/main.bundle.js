! function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 29)
}([function (e, t, r) {
    e.exports = r.p + "sprites/cave_openingdoor.png"
}, function (e, t, r) {
    e.exports = r.p + "sprites/cliffgrass_front.png"
}, function (e, t, r) {
    e.exports = r.p + "sprites/cave_wall.png"
}, function (e, t, r) {
    e.exports = r.p + "sprites/cave_ceiling.png"
}, function (e, t) {
    var r;
    r = function () {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function (e, t) {
    var r = [
            ["Aacute", [193]],
            ["aacute", [225]],
            ["Abreve", [258]],
            ["abreve", [259]],
            ["ac", [8766]],
            ["acd", [8767]],
            ["acE", [8766, 819]],
            ["Acirc", [194]],
            ["acirc", [226]],
            ["acute", [180]],
            ["Acy", [1040]],
            ["acy", [1072]],
            ["AElig", [198]],
            ["aelig", [230]],
            ["af", [8289]],
            ["Afr", [120068]],
            ["afr", [120094]],
            ["Agrave", [192]],
            ["agrave", [224]],
            ["alefsym", [8501]],
            ["aleph", [8501]],
            ["Alpha", [913]],
            ["alpha", [945]],
            ["Amacr", [256]],
            ["amacr", [257]],
            ["amalg", [10815]],
            ["amp", [38]],
            ["AMP", [38]],
            ["andand", [10837]],
            ["And", [10835]],
            ["and", [8743]],
            ["andd", [10844]],
            ["andslope", [10840]],
            ["andv", [10842]],
            ["ang", [8736]],
            ["ange", [10660]],
            ["angle", [8736]],
            ["angmsdaa", [10664]],
            ["angmsdab", [10665]],
            ["angmsdac", [10666]],
            ["angmsdad", [10667]],
            ["angmsdae", [10668]],
            ["angmsdaf", [10669]],
            ["angmsdag", [10670]],
            ["angmsdah", [10671]],
            ["angmsd", [8737]],
            ["angrt", [8735]],
            ["angrtvb", [8894]],
            ["angrtvbd", [10653]],
            ["angsph", [8738]],
            ["angst", [197]],
            ["angzarr", [9084]],
            ["Aogon", [260]],
            ["aogon", [261]],
            ["Aopf", [120120]],
            ["aopf", [120146]],
            ["apacir", [10863]],
            ["ap", [8776]],
            ["apE", [10864]],
            ["ape", [8778]],
            ["apid", [8779]],
            ["apos", [39]],
            ["ApplyFunction", [8289]],
            ["approx", [8776]],
            ["approxeq", [8778]],
            ["Aring", [197]],
            ["aring", [229]],
            ["Ascr", [119964]],
            ["ascr", [119990]],
            ["Assign", [8788]],
            ["ast", [42]],
            ["asymp", [8776]],
            ["asympeq", [8781]],
            ["Atilde", [195]],
            ["atilde", [227]],
            ["Auml", [196]],
            ["auml", [228]],
            ["awconint", [8755]],
            ["awint", [10769]],
            ["backcong", [8780]],
            ["backepsilon", [1014]],
            ["backprime", [8245]],
            ["backsim", [8765]],
            ["backsimeq", [8909]],
            ["Backslash", [8726]],
            ["Barv", [10983]],
            ["barvee", [8893]],
            ["barwed", [8965]],
            ["Barwed", [8966]],
            ["barwedge", [8965]],
            ["bbrk", [9141]],
            ["bbrktbrk", [9142]],
            ["bcong", [8780]],
            ["Bcy", [1041]],
            ["bcy", [1073]],
            ["bdquo", [8222]],
            ["becaus", [8757]],
            ["because", [8757]],
            ["Because", [8757]],
            ["bemptyv", [10672]],
            ["bepsi", [1014]],
            ["bernou", [8492]],
            ["Bernoullis", [8492]],
            ["Beta", [914]],
            ["beta", [946]],
            ["beth", [8502]],
            ["between", [8812]],
            ["Bfr", [120069]],
            ["bfr", [120095]],
            ["bigcap", [8898]],
            ["bigcirc", [9711]],
            ["bigcup", [8899]],
            ["bigodot", [10752]],
            ["bigoplus", [10753]],
            ["bigotimes", [10754]],
            ["bigsqcup", [10758]],
            ["bigstar", [9733]],
            ["bigtriangledown", [9661]],
            ["bigtriangleup", [9651]],
            ["biguplus", [10756]],
            ["bigvee", [8897]],
            ["bigwedge", [8896]],
            ["bkarow", [10509]],
            ["blacklozenge", [10731]],
            ["blacksquare", [9642]],
            ["blacktriangle", [9652]],
            ["blacktriangledown", [9662]],
            ["blacktriangleleft", [9666]],
            ["blacktriangleright", [9656]],
            ["blank", [9251]],
            ["blk12", [9618]],
            ["blk14", [9617]],
            ["blk34", [9619]],
            ["block", [9608]],
            ["bne", [61, 8421]],
            ["bnequiv", [8801, 8421]],
            ["bNot", [10989]],
            ["bnot", [8976]],
            ["Bopf", [120121]],
            ["bopf", [120147]],
            ["bot", [8869]],
            ["bottom", [8869]],
            ["bowtie", [8904]],
            ["boxbox", [10697]],
            ["boxdl", [9488]],
            ["boxdL", [9557]],
            ["boxDl", [9558]],
            ["boxDL", [9559]],
            ["boxdr", [9484]],
            ["boxdR", [9554]],
            ["boxDr", [9555]],
            ["boxDR", [9556]],
            ["boxh", [9472]],
            ["boxH", [9552]],
            ["boxhd", [9516]],
            ["boxHd", [9572]],
            ["boxhD", [9573]],
            ["boxHD", [9574]],
            ["boxhu", [9524]],
            ["boxHu", [9575]],
            ["boxhU", [9576]],
            ["boxHU", [9577]],
            ["boxminus", [8863]],
            ["boxplus", [8862]],
            ["boxtimes", [8864]],
            ["boxul", [9496]],
            ["boxuL", [9563]],
            ["boxUl", [9564]],
            ["boxUL", [9565]],
            ["boxur", [9492]],
            ["boxuR", [9560]],
            ["boxUr", [9561]],
            ["boxUR", [9562]],
            ["boxv", [9474]],
            ["boxV", [9553]],
            ["boxvh", [9532]],
            ["boxvH", [9578]],
            ["boxVh", [9579]],
            ["boxVH", [9580]],
            ["boxvl", [9508]],
            ["boxvL", [9569]],
            ["boxVl", [9570]],
            ["boxVL", [9571]],
            ["boxvr", [9500]],
            ["boxvR", [9566]],
            ["boxVr", [9567]],
            ["boxVR", [9568]],
            ["bprime", [8245]],
            ["breve", [728]],
            ["Breve", [728]],
            ["brvbar", [166]],
            ["bscr", [119991]],
            ["Bscr", [8492]],
            ["bsemi", [8271]],
            ["bsim", [8765]],
            ["bsime", [8909]],
            ["bsolb", [10693]],
            ["bsol", [92]],
            ["bsolhsub", [10184]],
            ["bull", [8226]],
            ["bullet", [8226]],
            ["bump", [8782]],
            ["bumpE", [10926]],
            ["bumpe", [8783]],
            ["Bumpeq", [8782]],
            ["bumpeq", [8783]],
            ["Cacute", [262]],
            ["cacute", [263]],
            ["capand", [10820]],
            ["capbrcup", [10825]],
            ["capcap", [10827]],
            ["cap", [8745]],
            ["Cap", [8914]],
            ["capcup", [10823]],
            ["capdot", [10816]],
            ["CapitalDifferentialD", [8517]],
            ["caps", [8745, 65024]],
            ["caret", [8257]],
            ["caron", [711]],
            ["Cayleys", [8493]],
            ["ccaps", [10829]],
            ["Ccaron", [268]],
            ["ccaron", [269]],
            ["Ccedil", [199]],
            ["ccedil", [231]],
            ["Ccirc", [264]],
            ["ccirc", [265]],
            ["Cconint", [8752]],
            ["ccups", [10828]],
            ["ccupssm", [10832]],
            ["Cdot", [266]],
            ["cdot", [267]],
            ["cedil", [184]],
            ["Cedilla", [184]],
            ["cemptyv", [10674]],
            ["cent", [162]],
            ["centerdot", [183]],
            ["CenterDot", [183]],
            ["cfr", [120096]],
            ["Cfr", [8493]],
            ["CHcy", [1063]],
            ["chcy", [1095]],
            ["check", [10003]],
            ["checkmark", [10003]],
            ["Chi", [935]],
            ["chi", [967]],
            ["circ", [710]],
            ["circeq", [8791]],
            ["circlearrowleft", [8634]],
            ["circlearrowright", [8635]],
            ["circledast", [8859]],
            ["circledcirc", [8858]],
            ["circleddash", [8861]],
            ["CircleDot", [8857]],
            ["circledR", [174]],
            ["circledS", [9416]],
            ["CircleMinus", [8854]],
            ["CirclePlus", [8853]],
            ["CircleTimes", [8855]],
            ["cir", [9675]],
            ["cirE", [10691]],
            ["cire", [8791]],
            ["cirfnint", [10768]],
            ["cirmid", [10991]],
            ["cirscir", [10690]],
            ["ClockwiseContourIntegral", [8754]],
            ["clubs", [9827]],
            ["clubsuit", [9827]],
            ["colon", [58]],
            ["Colon", [8759]],
            ["Colone", [10868]],
            ["colone", [8788]],
            ["coloneq", [8788]],
            ["comma", [44]],
            ["commat", [64]],
            ["comp", [8705]],
            ["compfn", [8728]],
            ["complement", [8705]],
            ["complexes", [8450]],
            ["cong", [8773]],
            ["congdot", [10861]],
            ["Congruent", [8801]],
            ["conint", [8750]],
            ["Conint", [8751]],
            ["ContourIntegral", [8750]],
            ["copf", [120148]],
            ["Copf", [8450]],
            ["coprod", [8720]],
            ["Coproduct", [8720]],
            ["copy", [169]],
            ["COPY", [169]],
            ["copysr", [8471]],
            ["CounterClockwiseContourIntegral", [8755]],
            ["crarr", [8629]],
            ["cross", [10007]],
            ["Cross", [10799]],
            ["Cscr", [119966]],
            ["cscr", [119992]],
            ["csub", [10959]],
            ["csube", [10961]],
            ["csup", [10960]],
            ["csupe", [10962]],
            ["ctdot", [8943]],
            ["cudarrl", [10552]],
            ["cudarrr", [10549]],
            ["cuepr", [8926]],
            ["cuesc", [8927]],
            ["cularr", [8630]],
            ["cularrp", [10557]],
            ["cupbrcap", [10824]],
            ["cupcap", [10822]],
            ["CupCap", [8781]],
            ["cup", [8746]],
            ["Cup", [8915]],
            ["cupcup", [10826]],
            ["cupdot", [8845]],
            ["cupor", [10821]],
            ["cups", [8746, 65024]],
            ["curarr", [8631]],
            ["curarrm", [10556]],
            ["curlyeqprec", [8926]],
            ["curlyeqsucc", [8927]],
            ["curlyvee", [8910]],
            ["curlywedge", [8911]],
            ["curren", [164]],
            ["curvearrowleft", [8630]],
            ["curvearrowright", [8631]],
            ["cuvee", [8910]],
            ["cuwed", [8911]],
            ["cwconint", [8754]],
            ["cwint", [8753]],
            ["cylcty", [9005]],
            ["dagger", [8224]],
            ["Dagger", [8225]],
            ["daleth", [8504]],
            ["darr", [8595]],
            ["Darr", [8609]],
            ["dArr", [8659]],
            ["dash", [8208]],
            ["Dashv", [10980]],
            ["dashv", [8867]],
            ["dbkarow", [10511]],
            ["dblac", [733]],
            ["Dcaron", [270]],
            ["dcaron", [271]],
            ["Dcy", [1044]],
            ["dcy", [1076]],
            ["ddagger", [8225]],
            ["ddarr", [8650]],
            ["DD", [8517]],
            ["dd", [8518]],
            ["DDotrahd", [10513]],
            ["ddotseq", [10871]],
            ["deg", [176]],
            ["Del", [8711]],
            ["Delta", [916]],
            ["delta", [948]],
            ["demptyv", [10673]],
            ["dfisht", [10623]],
            ["Dfr", [120071]],
            ["dfr", [120097]],
            ["dHar", [10597]],
            ["dharl", [8643]],
            ["dharr", [8642]],
            ["DiacriticalAcute", [180]],
            ["DiacriticalDot", [729]],
            ["DiacriticalDoubleAcute", [733]],
            ["DiacriticalGrave", [96]],
            ["DiacriticalTilde", [732]],
            ["diam", [8900]],
            ["diamond", [8900]],
            ["Diamond", [8900]],
            ["diamondsuit", [9830]],
            ["diams", [9830]],
            ["die", [168]],
            ["DifferentialD", [8518]],
            ["digamma", [989]],
            ["disin", [8946]],
            ["div", [247]],
            ["divide", [247]],
            ["divideontimes", [8903]],
            ["divonx", [8903]],
            ["DJcy", [1026]],
            ["djcy", [1106]],
            ["dlcorn", [8990]],
            ["dlcrop", [8973]],
            ["dollar", [36]],
            ["Dopf", [120123]],
            ["dopf", [120149]],
            ["Dot", [168]],
            ["dot", [729]],
            ["DotDot", [8412]],
            ["doteq", [8784]],
            ["doteqdot", [8785]],
            ["DotEqual", [8784]],
            ["dotminus", [8760]],
            ["dotplus", [8724]],
            ["dotsquare", [8865]],
            ["doublebarwedge", [8966]],
            ["DoubleContourIntegral", [8751]],
            ["DoubleDot", [168]],
            ["DoubleDownArrow", [8659]],
            ["DoubleLeftArrow", [8656]],
            ["DoubleLeftRightArrow", [8660]],
            ["DoubleLeftTee", [10980]],
            ["DoubleLongLeftArrow", [10232]],
            ["DoubleLongLeftRightArrow", [10234]],
            ["DoubleLongRightArrow", [10233]],
            ["DoubleRightArrow", [8658]],
            ["DoubleRightTee", [8872]],
            ["DoubleUpArrow", [8657]],
            ["DoubleUpDownArrow", [8661]],
            ["DoubleVerticalBar", [8741]],
            ["DownArrowBar", [10515]],
            ["downarrow", [8595]],
            ["DownArrow", [8595]],
            ["Downarrow", [8659]],
            ["DownArrowUpArrow", [8693]],
            ["DownBreve", [785]],
            ["downdownarrows", [8650]],
            ["downharpoonleft", [8643]],
            ["downharpoonright", [8642]],
            ["DownLeftRightVector", [10576]],
            ["DownLeftTeeVector", [10590]],
            ["DownLeftVectorBar", [10582]],
            ["DownLeftVector", [8637]],
            ["DownRightTeeVector", [10591]],
            ["DownRightVectorBar", [10583]],
            ["DownRightVector", [8641]],
            ["DownTeeArrow", [8615]],
            ["DownTee", [8868]],
            ["drbkarow", [10512]],
            ["drcorn", [8991]],
            ["drcrop", [8972]],
            ["Dscr", [119967]],
            ["dscr", [119993]],
            ["DScy", [1029]],
            ["dscy", [1109]],
            ["dsol", [10742]],
            ["Dstrok", [272]],
            ["dstrok", [273]],
            ["dtdot", [8945]],
            ["dtri", [9663]],
            ["dtrif", [9662]],
            ["duarr", [8693]],
            ["duhar", [10607]],
            ["dwangle", [10662]],
            ["DZcy", [1039]],
            ["dzcy", [1119]],
            ["dzigrarr", [10239]],
            ["Eacute", [201]],
            ["eacute", [233]],
            ["easter", [10862]],
            ["Ecaron", [282]],
            ["ecaron", [283]],
            ["Ecirc", [202]],
            ["ecirc", [234]],
            ["ecir", [8790]],
            ["ecolon", [8789]],
            ["Ecy", [1069]],
            ["ecy", [1101]],
            ["eDDot", [10871]],
            ["Edot", [278]],
            ["edot", [279]],
            ["eDot", [8785]],
            ["ee", [8519]],
            ["efDot", [8786]],
            ["Efr", [120072]],
            ["efr", [120098]],
            ["eg", [10906]],
            ["Egrave", [200]],
            ["egrave", [232]],
            ["egs", [10902]],
            ["egsdot", [10904]],
            ["el", [10905]],
            ["Element", [8712]],
            ["elinters", [9191]],
            ["ell", [8467]],
            ["els", [10901]],
            ["elsdot", [10903]],
            ["Emacr", [274]],
            ["emacr", [275]],
            ["empty", [8709]],
            ["emptyset", [8709]],
            ["EmptySmallSquare", [9723]],
            ["emptyv", [8709]],
            ["EmptyVerySmallSquare", [9643]],
            ["emsp13", [8196]],
            ["emsp14", [8197]],
            ["emsp", [8195]],
            ["ENG", [330]],
            ["eng", [331]],
            ["ensp", [8194]],
            ["Eogon", [280]],
            ["eogon", [281]],
            ["Eopf", [120124]],
            ["eopf", [120150]],
            ["epar", [8917]],
            ["eparsl", [10723]],
            ["eplus", [10865]],
            ["epsi", [949]],
            ["Epsilon", [917]],
            ["epsilon", [949]],
            ["epsiv", [1013]],
            ["eqcirc", [8790]],
            ["eqcolon", [8789]],
            ["eqsim", [8770]],
            ["eqslantgtr", [10902]],
            ["eqslantless", [10901]],
            ["Equal", [10869]],
            ["equals", [61]],
            ["EqualTilde", [8770]],
            ["equest", [8799]],
            ["Equilibrium", [8652]],
            ["equiv", [8801]],
            ["equivDD", [10872]],
            ["eqvparsl", [10725]],
            ["erarr", [10609]],
            ["erDot", [8787]],
            ["escr", [8495]],
            ["Escr", [8496]],
            ["esdot", [8784]],
            ["Esim", [10867]],
            ["esim", [8770]],
            ["Eta", [919]],
            ["eta", [951]],
            ["ETH", [208]],
            ["eth", [240]],
            ["Euml", [203]],
            ["euml", [235]],
            ["euro", [8364]],
            ["excl", [33]],
            ["exist", [8707]],
            ["Exists", [8707]],
            ["expectation", [8496]],
            ["exponentiale", [8519]],
            ["ExponentialE", [8519]],
            ["fallingdotseq", [8786]],
            ["Fcy", [1060]],
            ["fcy", [1092]],
            ["female", [9792]],
            ["ffilig", [64259]],
            ["fflig", [64256]],
            ["ffllig", [64260]],
            ["Ffr", [120073]],
            ["ffr", [120099]],
            ["filig", [64257]],
            ["FilledSmallSquare", [9724]],
            ["FilledVerySmallSquare", [9642]],
            ["fjlig", [102, 106]],
            ["flat", [9837]],
            ["fllig", [64258]],
            ["fltns", [9649]],
            ["fnof", [402]],
            ["Fopf", [120125]],
            ["fopf", [120151]],
            ["forall", [8704]],
            ["ForAll", [8704]],
            ["fork", [8916]],
            ["forkv", [10969]],
            ["Fouriertrf", [8497]],
            ["fpartint", [10765]],
            ["frac12", [189]],
            ["frac13", [8531]],
            ["frac14", [188]],
            ["frac15", [8533]],
            ["frac16", [8537]],
            ["frac18", [8539]],
            ["frac23", [8532]],
            ["frac25", [8534]],
            ["frac34", [190]],
            ["frac35", [8535]],
            ["frac38", [8540]],
            ["frac45", [8536]],
            ["frac56", [8538]],
            ["frac58", [8541]],
            ["frac78", [8542]],
            ["frasl", [8260]],
            ["frown", [8994]],
            ["fscr", [119995]],
            ["Fscr", [8497]],
            ["gacute", [501]],
            ["Gamma", [915]],
            ["gamma", [947]],
            ["Gammad", [988]],
            ["gammad", [989]],
            ["gap", [10886]],
            ["Gbreve", [286]],
            ["gbreve", [287]],
            ["Gcedil", [290]],
            ["Gcirc", [284]],
            ["gcirc", [285]],
            ["Gcy", [1043]],
            ["gcy", [1075]],
            ["Gdot", [288]],
            ["gdot", [289]],
            ["ge", [8805]],
            ["gE", [8807]],
            ["gEl", [10892]],
            ["gel", [8923]],
            ["geq", [8805]],
            ["geqq", [8807]],
            ["geqslant", [10878]],
            ["gescc", [10921]],
            ["ges", [10878]],
            ["gesdot", [10880]],
            ["gesdoto", [10882]],
            ["gesdotol", [10884]],
            ["gesl", [8923, 65024]],
            ["gesles", [10900]],
            ["Gfr", [120074]],
            ["gfr", [120100]],
            ["gg", [8811]],
            ["Gg", [8921]],
            ["ggg", [8921]],
            ["gimel", [8503]],
            ["GJcy", [1027]],
            ["gjcy", [1107]],
            ["gla", [10917]],
            ["gl", [8823]],
            ["glE", [10898]],
            ["glj", [10916]],
            ["gnap", [10890]],
            ["gnapprox", [10890]],
            ["gne", [10888]],
            ["gnE", [8809]],
            ["gneq", [10888]],
            ["gneqq", [8809]],
            ["gnsim", [8935]],
            ["Gopf", [120126]],
            ["gopf", [120152]],
            ["grave", [96]],
            ["GreaterEqual", [8805]],
            ["GreaterEqualLess", [8923]],
            ["GreaterFullEqual", [8807]],
            ["GreaterGreater", [10914]],
            ["GreaterLess", [8823]],
            ["GreaterSlantEqual", [10878]],
            ["GreaterTilde", [8819]],
            ["Gscr", [119970]],
            ["gscr", [8458]],
            ["gsim", [8819]],
            ["gsime", [10894]],
            ["gsiml", [10896]],
            ["gtcc", [10919]],
            ["gtcir", [10874]],
            ["gt", [62]],
            ["GT", [62]],
            ["Gt", [8811]],
            ["gtdot", [8919]],
            ["gtlPar", [10645]],
            ["gtquest", [10876]],
            ["gtrapprox", [10886]],
            ["gtrarr", [10616]],
            ["gtrdot", [8919]],
            ["gtreqless", [8923]],
            ["gtreqqless", [10892]],
            ["gtrless", [8823]],
            ["gtrsim", [8819]],
            ["gvertneqq", [8809, 65024]],
            ["gvnE", [8809, 65024]],
            ["Hacek", [711]],
            ["hairsp", [8202]],
            ["half", [189]],
            ["hamilt", [8459]],
            ["HARDcy", [1066]],
            ["hardcy", [1098]],
            ["harrcir", [10568]],
            ["harr", [8596]],
            ["hArr", [8660]],
            ["harrw", [8621]],
            ["Hat", [94]],
            ["hbar", [8463]],
            ["Hcirc", [292]],
            ["hcirc", [293]],
            ["hearts", [9829]],
            ["heartsuit", [9829]],
            ["hellip", [8230]],
            ["hercon", [8889]],
            ["hfr", [120101]],
            ["Hfr", [8460]],
            ["HilbertSpace", [8459]],
            ["hksearow", [10533]],
            ["hkswarow", [10534]],
            ["hoarr", [8703]],
            ["homtht", [8763]],
            ["hookleftarrow", [8617]],
            ["hookrightarrow", [8618]],
            ["hopf", [120153]],
            ["Hopf", [8461]],
            ["horbar", [8213]],
            ["HorizontalLine", [9472]],
            ["hscr", [119997]],
            ["Hscr", [8459]],
            ["hslash", [8463]],
            ["Hstrok", [294]],
            ["hstrok", [295]],
            ["HumpDownHump", [8782]],
            ["HumpEqual", [8783]],
            ["hybull", [8259]],
            ["hyphen", [8208]],
            ["Iacute", [205]],
            ["iacute", [237]],
            ["ic", [8291]],
            ["Icirc", [206]],
            ["icirc", [238]],
            ["Icy", [1048]],
            ["icy", [1080]],
            ["Idot", [304]],
            ["IEcy", [1045]],
            ["iecy", [1077]],
            ["iexcl", [161]],
            ["iff", [8660]],
            ["ifr", [120102]],
            ["Ifr", [8465]],
            ["Igrave", [204]],
            ["igrave", [236]],
            ["ii", [8520]],
            ["iiiint", [10764]],
            ["iiint", [8749]],
            ["iinfin", [10716]],
            ["iiota", [8489]],
            ["IJlig", [306]],
            ["ijlig", [307]],
            ["Imacr", [298]],
            ["imacr", [299]],
            ["image", [8465]],
            ["ImaginaryI", [8520]],
            ["imagline", [8464]],
            ["imagpart", [8465]],
            ["imath", [305]],
            ["Im", [8465]],
            ["imof", [8887]],
            ["imped", [437]],
            ["Implies", [8658]],
            ["incare", [8453]],
            ["in", [8712]],
            ["infin", [8734]],
            ["infintie", [10717]],
            ["inodot", [305]],
            ["intcal", [8890]],
            ["int", [8747]],
            ["Int", [8748]],
            ["integers", [8484]],
            ["Integral", [8747]],
            ["intercal", [8890]],
            ["Intersection", [8898]],
            ["intlarhk", [10775]],
            ["intprod", [10812]],
            ["InvisibleComma", [8291]],
            ["InvisibleTimes", [8290]],
            ["IOcy", [1025]],
            ["iocy", [1105]],
            ["Iogon", [302]],
            ["iogon", [303]],
            ["Iopf", [120128]],
            ["iopf", [120154]],
            ["Iota", [921]],
            ["iota", [953]],
            ["iprod", [10812]],
            ["iquest", [191]],
            ["iscr", [119998]],
            ["Iscr", [8464]],
            ["isin", [8712]],
            ["isindot", [8949]],
            ["isinE", [8953]],
            ["isins", [8948]],
            ["isinsv", [8947]],
            ["isinv", [8712]],
            ["it", [8290]],
            ["Itilde", [296]],
            ["itilde", [297]],
            ["Iukcy", [1030]],
            ["iukcy", [1110]],
            ["Iuml", [207]],
            ["iuml", [239]],
            ["Jcirc", [308]],
            ["jcirc", [309]],
            ["Jcy", [1049]],
            ["jcy", [1081]],
            ["Jfr", [120077]],
            ["jfr", [120103]],
            ["jmath", [567]],
            ["Jopf", [120129]],
            ["jopf", [120155]],
            ["Jscr", [119973]],
            ["jscr", [119999]],
            ["Jsercy", [1032]],
            ["jsercy", [1112]],
            ["Jukcy", [1028]],
            ["jukcy", [1108]],
            ["Kappa", [922]],
            ["kappa", [954]],
            ["kappav", [1008]],
            ["Kcedil", [310]],
            ["kcedil", [311]],
            ["Kcy", [1050]],
            ["kcy", [1082]],
            ["Kfr", [120078]],
            ["kfr", [120104]],
            ["kgreen", [312]],
            ["KHcy", [1061]],
            ["khcy", [1093]],
            ["KJcy", [1036]],
            ["kjcy", [1116]],
            ["Kopf", [120130]],
            ["kopf", [120156]],
            ["Kscr", [119974]],
            ["kscr", [12e4]],
            ["lAarr", [8666]],
            ["Lacute", [313]],
            ["lacute", [314]],
            ["laemptyv", [10676]],
            ["lagran", [8466]],
            ["Lambda", [923]],
            ["lambda", [955]],
            ["lang", [10216]],
            ["Lang", [10218]],
            ["langd", [10641]],
            ["langle", [10216]],
            ["lap", [10885]],
            ["Laplacetrf", [8466]],
            ["laquo", [171]],
            ["larrb", [8676]],
            ["larrbfs", [10527]],
            ["larr", [8592]],
            ["Larr", [8606]],
            ["lArr", [8656]],
            ["larrfs", [10525]],
            ["larrhk", [8617]],
            ["larrlp", [8619]],
            ["larrpl", [10553]],
            ["larrsim", [10611]],
            ["larrtl", [8610]],
            ["latail", [10521]],
            ["lAtail", [10523]],
            ["lat", [10923]],
            ["late", [10925]],
            ["lates", [10925, 65024]],
            ["lbarr", [10508]],
            ["lBarr", [10510]],
            ["lbbrk", [10098]],
            ["lbrace", [123]],
            ["lbrack", [91]],
            ["lbrke", [10635]],
            ["lbrksld", [10639]],
            ["lbrkslu", [10637]],
            ["Lcaron", [317]],
            ["lcaron", [318]],
            ["Lcedil", [315]],
            ["lcedil", [316]],
            ["lceil", [8968]],
            ["lcub", [123]],
            ["Lcy", [1051]],
            ["lcy", [1083]],
            ["ldca", [10550]],
            ["ldquo", [8220]],
            ["ldquor", [8222]],
            ["ldrdhar", [10599]],
            ["ldrushar", [10571]],
            ["ldsh", [8626]],
            ["le", [8804]],
            ["lE", [8806]],
            ["LeftAngleBracket", [10216]],
            ["LeftArrowBar", [8676]],
            ["leftarrow", [8592]],
            ["LeftArrow", [8592]],
            ["Leftarrow", [8656]],
            ["LeftArrowRightArrow", [8646]],
            ["leftarrowtail", [8610]],
            ["LeftCeiling", [8968]],
            ["LeftDoubleBracket", [10214]],
            ["LeftDownTeeVector", [10593]],
            ["LeftDownVectorBar", [10585]],
            ["LeftDownVector", [8643]],
            ["LeftFloor", [8970]],
            ["leftharpoondown", [8637]],
            ["leftharpoonup", [8636]],
            ["leftleftarrows", [8647]],
            ["leftrightarrow", [8596]],
            ["LeftRightArrow", [8596]],
            ["Leftrightarrow", [8660]],
            ["leftrightarrows", [8646]],
            ["leftrightharpoons", [8651]],
            ["leftrightsquigarrow", [8621]],
            ["LeftRightVector", [10574]],
            ["LeftTeeArrow", [8612]],
            ["LeftTee", [8867]],
            ["LeftTeeVector", [10586]],
            ["leftthreetimes", [8907]],
            ["LeftTriangleBar", [10703]],
            ["LeftTriangle", [8882]],
            ["LeftTriangleEqual", [8884]],
            ["LeftUpDownVector", [10577]],
            ["LeftUpTeeVector", [10592]],
            ["LeftUpVectorBar", [10584]],
            ["LeftUpVector", [8639]],
            ["LeftVectorBar", [10578]],
            ["LeftVector", [8636]],
            ["lEg", [10891]],
            ["leg", [8922]],
            ["leq", [8804]],
            ["leqq", [8806]],
            ["leqslant", [10877]],
            ["lescc", [10920]],
            ["les", [10877]],
            ["lesdot", [10879]],
            ["lesdoto", [10881]],
            ["lesdotor", [10883]],
            ["lesg", [8922, 65024]],
            ["lesges", [10899]],
            ["lessapprox", [10885]],
            ["lessdot", [8918]],
            ["lesseqgtr", [8922]],
            ["lesseqqgtr", [10891]],
            ["LessEqualGreater", [8922]],
            ["LessFullEqual", [8806]],
            ["LessGreater", [8822]],
            ["lessgtr", [8822]],
            ["LessLess", [10913]],
            ["lesssim", [8818]],
            ["LessSlantEqual", [10877]],
            ["LessTilde", [8818]],
            ["lfisht", [10620]],
            ["lfloor", [8970]],
            ["Lfr", [120079]],
            ["lfr", [120105]],
            ["lg", [8822]],
            ["lgE", [10897]],
            ["lHar", [10594]],
            ["lhard", [8637]],
            ["lharu", [8636]],
            ["lharul", [10602]],
            ["lhblk", [9604]],
            ["LJcy", [1033]],
            ["ljcy", [1113]],
            ["llarr", [8647]],
            ["ll", [8810]],
            ["Ll", [8920]],
            ["llcorner", [8990]],
            ["Lleftarrow", [8666]],
            ["llhard", [10603]],
            ["lltri", [9722]],
            ["Lmidot", [319]],
            ["lmidot", [320]],
            ["lmoustache", [9136]],
            ["lmoust", [9136]],
            ["lnap", [10889]],
            ["lnapprox", [10889]],
            ["lne", [10887]],
            ["lnE", [8808]],
            ["lneq", [10887]],
            ["lneqq", [8808]],
            ["lnsim", [8934]],
            ["loang", [10220]],
            ["loarr", [8701]],
            ["lobrk", [10214]],
            ["longleftarrow", [10229]],
            ["LongLeftArrow", [10229]],
            ["Longleftarrow", [10232]],
            ["longleftrightarrow", [10231]],
            ["LongLeftRightArrow", [10231]],
            ["Longleftrightarrow", [10234]],
            ["longmapsto", [10236]],
            ["longrightarrow", [10230]],
            ["LongRightArrow", [10230]],
            ["Longrightarrow", [10233]],
            ["looparrowleft", [8619]],
            ["looparrowright", [8620]],
            ["lopar", [10629]],
            ["Lopf", [120131]],
            ["lopf", [120157]],
            ["loplus", [10797]],
            ["lotimes", [10804]],
            ["lowast", [8727]],
            ["lowbar", [95]],
            ["LowerLeftArrow", [8601]],
            ["LowerRightArrow", [8600]],
            ["loz", [9674]],
            ["lozenge", [9674]],
            ["lozf", [10731]],
            ["lpar", [40]],
            ["lparlt", [10643]],
            ["lrarr", [8646]],
            ["lrcorner", [8991]],
            ["lrhar", [8651]],
            ["lrhard", [10605]],
            ["lrm", [8206]],
            ["lrtri", [8895]],
            ["lsaquo", [8249]],
            ["lscr", [120001]],
            ["Lscr", [8466]],
            ["lsh", [8624]],
            ["Lsh", [8624]],
            ["lsim", [8818]],
            ["lsime", [10893]],
            ["lsimg", [10895]],
            ["lsqb", [91]],
            ["lsquo", [8216]],
            ["lsquor", [8218]],
            ["Lstrok", [321]],
            ["lstrok", [322]],
            ["ltcc", [10918]],
            ["ltcir", [10873]],
            ["lt", [60]],
            ["LT", [60]],
            ["Lt", [8810]],
            ["ltdot", [8918]],
            ["lthree", [8907]],
            ["ltimes", [8905]],
            ["ltlarr", [10614]],
            ["ltquest", [10875]],
            ["ltri", [9667]],
            ["ltrie", [8884]],
            ["ltrif", [9666]],
            ["ltrPar", [10646]],
            ["lurdshar", [10570]],
            ["luruhar", [10598]],
            ["lvertneqq", [8808, 65024]],
            ["lvnE", [8808, 65024]],
            ["macr", [175]],
            ["male", [9794]],
            ["malt", [10016]],
            ["maltese", [10016]],
            ["Map", [10501]],
            ["map", [8614]],
            ["mapsto", [8614]],
            ["mapstodown", [8615]],
            ["mapstoleft", [8612]],
            ["mapstoup", [8613]],
            ["marker", [9646]],
            ["mcomma", [10793]],
            ["Mcy", [1052]],
            ["mcy", [1084]],
            ["mdash", [8212]],
            ["mDDot", [8762]],
            ["measuredangle", [8737]],
            ["MediumSpace", [8287]],
            ["Mellintrf", [8499]],
            ["Mfr", [120080]],
            ["mfr", [120106]],
            ["mho", [8487]],
            ["micro", [181]],
            ["midast", [42]],
            ["midcir", [10992]],
            ["mid", [8739]],
            ["middot", [183]],
            ["minusb", [8863]],
            ["minus", [8722]],
            ["minusd", [8760]],
            ["minusdu", [10794]],
            ["MinusPlus", [8723]],
            ["mlcp", [10971]],
            ["mldr", [8230]],
            ["mnplus", [8723]],
            ["models", [8871]],
            ["Mopf", [120132]],
            ["mopf", [120158]],
            ["mp", [8723]],
            ["mscr", [120002]],
            ["Mscr", [8499]],
            ["mstpos", [8766]],
            ["Mu", [924]],
            ["mu", [956]],
            ["multimap", [8888]],
            ["mumap", [8888]],
            ["nabla", [8711]],
            ["Nacute", [323]],
            ["nacute", [324]],
            ["nang", [8736, 8402]],
            ["nap", [8777]],
            ["napE", [10864, 824]],
            ["napid", [8779, 824]],
            ["napos", [329]],
            ["napprox", [8777]],
            ["natural", [9838]],
            ["naturals", [8469]],
            ["natur", [9838]],
            ["nbsp", [160]],
            ["nbump", [8782, 824]],
            ["nbumpe", [8783, 824]],
            ["ncap", [10819]],
            ["Ncaron", [327]],
            ["ncaron", [328]],
            ["Ncedil", [325]],
            ["ncedil", [326]],
            ["ncong", [8775]],
            ["ncongdot", [10861, 824]],
            ["ncup", [10818]],
            ["Ncy", [1053]],
            ["ncy", [1085]],
            ["ndash", [8211]],
            ["nearhk", [10532]],
            ["nearr", [8599]],
            ["neArr", [8663]],
            ["nearrow", [8599]],
            ["ne", [8800]],
            ["nedot", [8784, 824]],
            ["NegativeMediumSpace", [8203]],
            ["NegativeThickSpace", [8203]],
            ["NegativeThinSpace", [8203]],
            ["NegativeVeryThinSpace", [8203]],
            ["nequiv", [8802]],
            ["nesear", [10536]],
            ["nesim", [8770, 824]],
            ["NestedGreaterGreater", [8811]],
            ["NestedLessLess", [8810]],
            ["nexist", [8708]],
            ["nexists", [8708]],
            ["Nfr", [120081]],
            ["nfr", [120107]],
            ["ngE", [8807, 824]],
            ["nge", [8817]],
            ["ngeq", [8817]],
            ["ngeqq", [8807, 824]],
            ["ngeqslant", [10878, 824]],
            ["nges", [10878, 824]],
            ["nGg", [8921, 824]],
            ["ngsim", [8821]],
            ["nGt", [8811, 8402]],
            ["ngt", [8815]],
            ["ngtr", [8815]],
            ["nGtv", [8811, 824]],
            ["nharr", [8622]],
            ["nhArr", [8654]],
            ["nhpar", [10994]],
            ["ni", [8715]],
            ["nis", [8956]],
            ["nisd", [8954]],
            ["niv", [8715]],
            ["NJcy", [1034]],
            ["njcy", [1114]],
            ["nlarr", [8602]],
            ["nlArr", [8653]],
            ["nldr", [8229]],
            ["nlE", [8806, 824]],
            ["nle", [8816]],
            ["nleftarrow", [8602]],
            ["nLeftarrow", [8653]],
            ["nleftrightarrow", [8622]],
            ["nLeftrightarrow", [8654]],
            ["nleq", [8816]],
            ["nleqq", [8806, 824]],
            ["nleqslant", [10877, 824]],
            ["nles", [10877, 824]],
            ["nless", [8814]],
            ["nLl", [8920, 824]],
            ["nlsim", [8820]],
            ["nLt", [8810, 8402]],
            ["nlt", [8814]],
            ["nltri", [8938]],
            ["nltrie", [8940]],
            ["nLtv", [8810, 824]],
            ["nmid", [8740]],
            ["NoBreak", [8288]],
            ["NonBreakingSpace", [160]],
            ["nopf", [120159]],
            ["Nopf", [8469]],
            ["Not", [10988]],
            ["not", [172]],
            ["NotCongruent", [8802]],
            ["NotCupCap", [8813]],
            ["NotDoubleVerticalBar", [8742]],
            ["NotElement", [8713]],
            ["NotEqual", [8800]],
            ["NotEqualTilde", [8770, 824]],
            ["NotExists", [8708]],
            ["NotGreater", [8815]],
            ["NotGreaterEqual", [8817]],
            ["NotGreaterFullEqual", [8807, 824]],
            ["NotGreaterGreater", [8811, 824]],
            ["NotGreaterLess", [8825]],
            ["NotGreaterSlantEqual", [10878, 824]],
            ["NotGreaterTilde", [8821]],
            ["NotHumpDownHump", [8782, 824]],
            ["NotHumpEqual", [8783, 824]],
            ["notin", [8713]],
            ["notindot", [8949, 824]],
            ["notinE", [8953, 824]],
            ["notinva", [8713]],
            ["notinvb", [8951]],
            ["notinvc", [8950]],
            ["NotLeftTriangleBar", [10703, 824]],
            ["NotLeftTriangle", [8938]],
            ["NotLeftTriangleEqual", [8940]],
            ["NotLess", [8814]],
            ["NotLessEqual", [8816]],
            ["NotLessGreater", [8824]],
            ["NotLessLess", [8810, 824]],
            ["NotLessSlantEqual", [10877, 824]],
            ["NotLessTilde", [8820]],
            ["NotNestedGreaterGreater", [10914, 824]],
            ["NotNestedLessLess", [10913, 824]],
            ["notni", [8716]],
            ["notniva", [8716]],
            ["notnivb", [8958]],
            ["notnivc", [8957]],
            ["NotPrecedes", [8832]],
            ["NotPrecedesEqual", [10927, 824]],
            ["NotPrecedesSlantEqual", [8928]],
            ["NotReverseElement", [8716]],
            ["NotRightTriangleBar", [10704, 824]],
            ["NotRightTriangle", [8939]],
            ["NotRightTriangleEqual", [8941]],
            ["NotSquareSubset", [8847, 824]],
            ["NotSquareSubsetEqual", [8930]],
            ["NotSquareSuperset", [8848, 824]],
            ["NotSquareSupersetEqual", [8931]],
            ["NotSubset", [8834, 8402]],
            ["NotSubsetEqual", [8840]],
            ["NotSucceeds", [8833]],
            ["NotSucceedsEqual", [10928, 824]],
            ["NotSucceedsSlantEqual", [8929]],
            ["NotSucceedsTilde", [8831, 824]],
            ["NotSuperset", [8835, 8402]],
            ["NotSupersetEqual", [8841]],
            ["NotTilde", [8769]],
            ["NotTildeEqual", [8772]],
            ["NotTildeFullEqual", [8775]],
            ["NotTildeTilde", [8777]],
            ["NotVerticalBar", [8740]],
            ["nparallel", [8742]],
            ["npar", [8742]],
            ["nparsl", [11005, 8421]],
            ["npart", [8706, 824]],
            ["npolint", [10772]],
            ["npr", [8832]],
            ["nprcue", [8928]],
            ["nprec", [8832]],
            ["npreceq", [10927, 824]],
            ["npre", [10927, 824]],
            ["nrarrc", [10547, 824]],
            ["nrarr", [8603]],
            ["nrArr", [8655]],
            ["nrarrw", [8605, 824]],
            ["nrightarrow", [8603]],
            ["nRightarrow", [8655]],
            ["nrtri", [8939]],
            ["nrtrie", [8941]],
            ["nsc", [8833]],
            ["nsccue", [8929]],
            ["nsce", [10928, 824]],
            ["Nscr", [119977]],
            ["nscr", [120003]],
            ["nshortmid", [8740]],
            ["nshortparallel", [8742]],
            ["nsim", [8769]],
            ["nsime", [8772]],
            ["nsimeq", [8772]],
            ["nsmid", [8740]],
            ["nspar", [8742]],
            ["nsqsube", [8930]],
            ["nsqsupe", [8931]],
            ["nsub", [8836]],
            ["nsubE", [10949, 824]],
            ["nsube", [8840]],
            ["nsubset", [8834, 8402]],
            ["nsubseteq", [8840]],
            ["nsubseteqq", [10949, 824]],
            ["nsucc", [8833]],
            ["nsucceq", [10928, 824]],
            ["nsup", [8837]],
            ["nsupE", [10950, 824]],
            ["nsupe", [8841]],
            ["nsupset", [8835, 8402]],
            ["nsupseteq", [8841]],
            ["nsupseteqq", [10950, 824]],
            ["ntgl", [8825]],
            ["Ntilde", [209]],
            ["ntilde", [241]],
            ["ntlg", [8824]],
            ["ntriangleleft", [8938]],
            ["ntrianglelefteq", [8940]],
            ["ntriangleright", [8939]],
            ["ntrianglerighteq", [8941]],
            ["Nu", [925]],
            ["nu", [957]],
            ["num", [35]],
            ["numero", [8470]],
            ["numsp", [8199]],
            ["nvap", [8781, 8402]],
            ["nvdash", [8876]],
            ["nvDash", [8877]],
            ["nVdash", [8878]],
            ["nVDash", [8879]],
            ["nvge", [8805, 8402]],
            ["nvgt", [62, 8402]],
            ["nvHarr", [10500]],
            ["nvinfin", [10718]],
            ["nvlArr", [10498]],
            ["nvle", [8804, 8402]],
            ["nvlt", [60, 8402]],
            ["nvltrie", [8884, 8402]],
            ["nvrArr", [10499]],
            ["nvrtrie", [8885, 8402]],
            ["nvsim", [8764, 8402]],
            ["nwarhk", [10531]],
            ["nwarr", [8598]],
            ["nwArr", [8662]],
            ["nwarrow", [8598]],
            ["nwnear", [10535]],
            ["Oacute", [211]],
            ["oacute", [243]],
            ["oast", [8859]],
            ["Ocirc", [212]],
            ["ocirc", [244]],
            ["ocir", [8858]],
            ["Ocy", [1054]],
            ["ocy", [1086]],
            ["odash", [8861]],
            ["Odblac", [336]],
            ["odblac", [337]],
            ["odiv", [10808]],
            ["odot", [8857]],
            ["odsold", [10684]],
            ["OElig", [338]],
            ["oelig", [339]],
            ["ofcir", [10687]],
            ["Ofr", [120082]],
            ["ofr", [120108]],
            ["ogon", [731]],
            ["Ograve", [210]],
            ["ograve", [242]],
            ["ogt", [10689]],
            ["ohbar", [10677]],
            ["ohm", [937]],
            ["oint", [8750]],
            ["olarr", [8634]],
            ["olcir", [10686]],
            ["olcross", [10683]],
            ["oline", [8254]],
            ["olt", [10688]],
            ["Omacr", [332]],
            ["omacr", [333]],
            ["Omega", [937]],
            ["omega", [969]],
            ["Omicron", [927]],
            ["omicron", [959]],
            ["omid", [10678]],
            ["ominus", [8854]],
            ["Oopf", [120134]],
            ["oopf", [120160]],
            ["opar", [10679]],
            ["OpenCurlyDoubleQuote", [8220]],
            ["OpenCurlyQuote", [8216]],
            ["operp", [10681]],
            ["oplus", [8853]],
            ["orarr", [8635]],
            ["Or", [10836]],
            ["or", [8744]],
            ["ord", [10845]],
            ["order", [8500]],
            ["orderof", [8500]],
            ["ordf", [170]],
            ["ordm", [186]],
            ["origof", [8886]],
            ["oror", [10838]],
            ["orslope", [10839]],
            ["orv", [10843]],
            ["oS", [9416]],
            ["Oscr", [119978]],
            ["oscr", [8500]],
            ["Oslash", [216]],
            ["oslash", [248]],
            ["osol", [8856]],
            ["Otilde", [213]],
            ["otilde", [245]],
            ["otimesas", [10806]],
            ["Otimes", [10807]],
            ["otimes", [8855]],
            ["Ouml", [214]],
            ["ouml", [246]],
            ["ovbar", [9021]],
            ["OverBar", [8254]],
            ["OverBrace", [9182]],
            ["OverBracket", [9140]],
            ["OverParenthesis", [9180]],
            ["para", [182]],
            ["parallel", [8741]],
            ["par", [8741]],
            ["parsim", [10995]],
            ["parsl", [11005]],
            ["part", [8706]],
            ["PartialD", [8706]],
            ["Pcy", [1055]],
            ["pcy", [1087]],
            ["percnt", [37]],
            ["period", [46]],
            ["permil", [8240]],
            ["perp", [8869]],
            ["pertenk", [8241]],
            ["Pfr", [120083]],
            ["pfr", [120109]],
            ["Phi", [934]],
            ["phi", [966]],
            ["phiv", [981]],
            ["phmmat", [8499]],
            ["phone", [9742]],
            ["Pi", [928]],
            ["pi", [960]],
            ["pitchfork", [8916]],
            ["piv", [982]],
            ["planck", [8463]],
            ["planckh", [8462]],
            ["plankv", [8463]],
            ["plusacir", [10787]],
            ["plusb", [8862]],
            ["pluscir", [10786]],
            ["plus", [43]],
            ["plusdo", [8724]],
            ["plusdu", [10789]],
            ["pluse", [10866]],
            ["PlusMinus", [177]],
            ["plusmn", [177]],
            ["plussim", [10790]],
            ["plustwo", [10791]],
            ["pm", [177]],
            ["Poincareplane", [8460]],
            ["pointint", [10773]],
            ["popf", [120161]],
            ["Popf", [8473]],
            ["pound", [163]],
            ["prap", [10935]],
            ["Pr", [10939]],
            ["pr", [8826]],
            ["prcue", [8828]],
            ["precapprox", [10935]],
            ["prec", [8826]],
            ["preccurlyeq", [8828]],
            ["Precedes", [8826]],
            ["PrecedesEqual", [10927]],
            ["PrecedesSlantEqual", [8828]],
            ["PrecedesTilde", [8830]],
            ["preceq", [10927]],
            ["precnapprox", [10937]],
            ["precneqq", [10933]],
            ["precnsim", [8936]],
            ["pre", [10927]],
            ["prE", [10931]],
            ["precsim", [8830]],
            ["prime", [8242]],
            ["Prime", [8243]],
            ["primes", [8473]],
            ["prnap", [10937]],
            ["prnE", [10933]],
            ["prnsim", [8936]],
            ["prod", [8719]],
            ["Product", [8719]],
            ["profalar", [9006]],
            ["profline", [8978]],
            ["profsurf", [8979]],
            ["prop", [8733]],
            ["Proportional", [8733]],
            ["Proportion", [8759]],
            ["propto", [8733]],
            ["prsim", [8830]],
            ["prurel", [8880]],
            ["Pscr", [119979]],
            ["pscr", [120005]],
            ["Psi", [936]],
            ["psi", [968]],
            ["puncsp", [8200]],
            ["Qfr", [120084]],
            ["qfr", [120110]],
            ["qint", [10764]],
            ["qopf", [120162]],
            ["Qopf", [8474]],
            ["qprime", [8279]],
            ["Qscr", [119980]],
            ["qscr", [120006]],
            ["quaternions", [8461]],
            ["quatint", [10774]],
            ["quest", [63]],
            ["questeq", [8799]],
            ["quot", [34]],
            ["QUOT", [34]],
            ["rAarr", [8667]],
            ["race", [8765, 817]],
            ["Racute", [340]],
            ["racute", [341]],
            ["radic", [8730]],
            ["raemptyv", [10675]],
            ["rang", [10217]],
            ["Rang", [10219]],
            ["rangd", [10642]],
            ["range", [10661]],
            ["rangle", [10217]],
            ["raquo", [187]],
            ["rarrap", [10613]],
            ["rarrb", [8677]],
            ["rarrbfs", [10528]],
            ["rarrc", [10547]],
            ["rarr", [8594]],
            ["Rarr", [8608]],
            ["rArr", [8658]],
            ["rarrfs", [10526]],
            ["rarrhk", [8618]],
            ["rarrlp", [8620]],
            ["rarrpl", [10565]],
            ["rarrsim", [10612]],
            ["Rarrtl", [10518]],
            ["rarrtl", [8611]],
            ["rarrw", [8605]],
            ["ratail", [10522]],
            ["rAtail", [10524]],
            ["ratio", [8758]],
            ["rationals", [8474]],
            ["rbarr", [10509]],
            ["rBarr", [10511]],
            ["RBarr", [10512]],
            ["rbbrk", [10099]],
            ["rbrace", [125]],
            ["rbrack", [93]],
            ["rbrke", [10636]],
            ["rbrksld", [10638]],
            ["rbrkslu", [10640]],
            ["Rcaron", [344]],
            ["rcaron", [345]],
            ["Rcedil", [342]],
            ["rcedil", [343]],
            ["rceil", [8969]],
            ["rcub", [125]],
            ["Rcy", [1056]],
            ["rcy", [1088]],
            ["rdca", [10551]],
            ["rdldhar", [10601]],
            ["rdquo", [8221]],
            ["rdquor", [8221]],
            ["CloseCurlyDoubleQuote", [8221]],
            ["rdsh", [8627]],
            ["real", [8476]],
            ["realine", [8475]],
            ["realpart", [8476]],
            ["reals", [8477]],
            ["Re", [8476]],
            ["rect", [9645]],
            ["reg", [174]],
            ["REG", [174]],
            ["ReverseElement", [8715]],
            ["ReverseEquilibrium", [8651]],
            ["ReverseUpEquilibrium", [10607]],
            ["rfisht", [10621]],
            ["rfloor", [8971]],
            ["rfr", [120111]],
            ["Rfr", [8476]],
            ["rHar", [10596]],
            ["rhard", [8641]],
            ["rharu", [8640]],
            ["rharul", [10604]],
            ["Rho", [929]],
            ["rho", [961]],
            ["rhov", [1009]],
            ["RightAngleBracket", [10217]],
            ["RightArrowBar", [8677]],
            ["rightarrow", [8594]],
            ["RightArrow", [8594]],
            ["Rightarrow", [8658]],
            ["RightArrowLeftArrow", [8644]],
            ["rightarrowtail", [8611]],
            ["RightCeiling", [8969]],
            ["RightDoubleBracket", [10215]],
            ["RightDownTeeVector", [10589]],
            ["RightDownVectorBar", [10581]],
            ["RightDownVector", [8642]],
            ["RightFloor", [8971]],
            ["rightharpoondown", [8641]],
            ["rightharpoonup", [8640]],
            ["rightleftarrows", [8644]],
            ["rightleftharpoons", [8652]],
            ["rightrightarrows", [8649]],
            ["rightsquigarrow", [8605]],
            ["RightTeeArrow", [8614]],
            ["RightTee", [8866]],
            ["RightTeeVector", [10587]],
            ["rightthreetimes", [8908]],
            ["RightTriangleBar", [10704]],
            ["RightTriangle", [8883]],
            ["RightTriangleEqual", [8885]],
            ["RightUpDownVector", [10575]],
            ["RightUpTeeVector", [10588]],
            ["RightUpVectorBar", [10580]],
            ["RightUpVector", [8638]],
            ["RightVectorBar", [10579]],
            ["RightVector", [8640]],
            ["ring", [730]],
            ["risingdotseq", [8787]],
            ["rlarr", [8644]],
            ["rlhar", [8652]],
            ["rlm", [8207]],
            ["rmoustache", [9137]],
            ["rmoust", [9137]],
            ["rnmid", [10990]],
            ["roang", [10221]],
            ["roarr", [8702]],
            ["robrk", [10215]],
            ["ropar", [10630]],
            ["ropf", [120163]],
            ["Ropf", [8477]],
            ["roplus", [10798]],
            ["rotimes", [10805]],
            ["RoundImplies", [10608]],
            ["rpar", [41]],
            ["rpargt", [10644]],
            ["rppolint", [10770]],
            ["rrarr", [8649]],
            ["Rrightarrow", [8667]],
            ["rsaquo", [8250]],
            ["rscr", [120007]],
            ["Rscr", [8475]],
            ["rsh", [8625]],
            ["Rsh", [8625]],
            ["rsqb", [93]],
            ["rsquo", [8217]],
            ["rsquor", [8217]],
            ["CloseCurlyQuote", [8217]],
            ["rthree", [8908]],
            ["rtimes", [8906]],
            ["rtri", [9657]],
            ["rtrie", [8885]],
            ["rtrif", [9656]],
            ["rtriltri", [10702]],
            ["RuleDelayed", [10740]],
            ["ruluhar", [10600]],
            ["rx", [8478]],
            ["Sacute", [346]],
            ["sacute", [347]],
            ["sbquo", [8218]],
            ["scap", [10936]],
            ["Scaron", [352]],
            ["scaron", [353]],
            ["Sc", [10940]],
            ["sc", [8827]],
            ["sccue", [8829]],
            ["sce", [10928]],
            ["scE", [10932]],
            ["Scedil", [350]],
            ["scedil", [351]],
            ["Scirc", [348]],
            ["scirc", [349]],
            ["scnap", [10938]],
            ["scnE", [10934]],
            ["scnsim", [8937]],
            ["scpolint", [10771]],
            ["scsim", [8831]],
            ["Scy", [1057]],
            ["scy", [1089]],
            ["sdotb", [8865]],
            ["sdot", [8901]],
            ["sdote", [10854]],
            ["searhk", [10533]],
            ["searr", [8600]],
            ["seArr", [8664]],
            ["searrow", [8600]],
            ["sect", [167]],
            ["semi", [59]],
            ["seswar", [10537]],
            ["setminus", [8726]],
            ["setmn", [8726]],
            ["sext", [10038]],
            ["Sfr", [120086]],
            ["sfr", [120112]],
            ["sfrown", [8994]],
            ["sharp", [9839]],
            ["SHCHcy", [1065]],
            ["shchcy", [1097]],
            ["SHcy", [1064]],
            ["shcy", [1096]],
            ["ShortDownArrow", [8595]],
            ["ShortLeftArrow", [8592]],
            ["shortmid", [8739]],
            ["shortparallel", [8741]],
            ["ShortRightArrow", [8594]],
            ["ShortUpArrow", [8593]],
            ["shy", [173]],
            ["Sigma", [931]],
            ["sigma", [963]],
            ["sigmaf", [962]],
            ["sigmav", [962]],
            ["sim", [8764]],
            ["simdot", [10858]],
            ["sime", [8771]],
            ["simeq", [8771]],
            ["simg", [10910]],
            ["simgE", [10912]],
            ["siml", [10909]],
            ["simlE", [10911]],
            ["simne", [8774]],
            ["simplus", [10788]],
            ["simrarr", [10610]],
            ["slarr", [8592]],
            ["SmallCircle", [8728]],
            ["smallsetminus", [8726]],
            ["smashp", [10803]],
            ["smeparsl", [10724]],
            ["smid", [8739]],
            ["smile", [8995]],
            ["smt", [10922]],
            ["smte", [10924]],
            ["smtes", [10924, 65024]],
            ["SOFTcy", [1068]],
            ["softcy", [1100]],
            ["solbar", [9023]],
            ["solb", [10692]],
            ["sol", [47]],
            ["Sopf", [120138]],
            ["sopf", [120164]],
            ["spades", [9824]],
            ["spadesuit", [9824]],
            ["spar", [8741]],
            ["sqcap", [8851]],
            ["sqcaps", [8851, 65024]],
            ["sqcup", [8852]],
            ["sqcups", [8852, 65024]],
            ["Sqrt", [8730]],
            ["sqsub", [8847]],
            ["sqsube", [8849]],
            ["sqsubset", [8847]],
            ["sqsubseteq", [8849]],
            ["sqsup", [8848]],
            ["sqsupe", [8850]],
            ["sqsupset", [8848]],
            ["sqsupseteq", [8850]],
            ["square", [9633]],
            ["Square", [9633]],
            ["SquareIntersection", [8851]],
            ["SquareSubset", [8847]],
            ["SquareSubsetEqual", [8849]],
            ["SquareSuperset", [8848]],
            ["SquareSupersetEqual", [8850]],
            ["SquareUnion", [8852]],
            ["squarf", [9642]],
            ["squ", [9633]],
            ["squf", [9642]],
            ["srarr", [8594]],
            ["Sscr", [119982]],
            ["sscr", [120008]],
            ["ssetmn", [8726]],
            ["ssmile", [8995]],
            ["sstarf", [8902]],
            ["Star", [8902]],
            ["star", [9734]],
            ["starf", [9733]],
            ["straightepsilon", [1013]],
            ["straightphi", [981]],
            ["strns", [175]],
            ["sub", [8834]],
            ["Sub", [8912]],
            ["subdot", [10941]],
            ["subE", [10949]],
            ["sube", [8838]],
            ["subedot", [10947]],
            ["submult", [10945]],
            ["subnE", [10955]],
            ["subne", [8842]],
            ["subplus", [10943]],
            ["subrarr", [10617]],
            ["subset", [8834]],
            ["Subset", [8912]],
            ["subseteq", [8838]],
            ["subseteqq", [10949]],
            ["SubsetEqual", [8838]],
            ["subsetneq", [8842]],
            ["subsetneqq", [10955]],
            ["subsim", [10951]],
            ["subsub", [10965]],
            ["subsup", [10963]],
            ["succapprox", [10936]],
            ["succ", [8827]],
            ["succcurlyeq", [8829]],
            ["Succeeds", [8827]],
            ["SucceedsEqual", [10928]],
            ["SucceedsSlantEqual", [8829]],
            ["SucceedsTilde", [8831]],
            ["succeq", [10928]],
            ["succnapprox", [10938]],
            ["succneqq", [10934]],
            ["succnsim", [8937]],
            ["succsim", [8831]],
            ["SuchThat", [8715]],
            ["sum", [8721]],
            ["Sum", [8721]],
            ["sung", [9834]],
            ["sup1", [185]],
            ["sup2", [178]],
            ["sup3", [179]],
            ["sup", [8835]],
            ["Sup", [8913]],
            ["supdot", [10942]],
            ["supdsub", [10968]],
            ["supE", [10950]],
            ["supe", [8839]],
            ["supedot", [10948]],
            ["Superset", [8835]],
            ["SupersetEqual", [8839]],
            ["suphsol", [10185]],
            ["suphsub", [10967]],
            ["suplarr", [10619]],
            ["supmult", [10946]],
            ["supnE", [10956]],
            ["supne", [8843]],
            ["supplus", [10944]],
            ["supset", [8835]],
            ["Supset", [8913]],
            ["supseteq", [8839]],
            ["supseteqq", [10950]],
            ["supsetneq", [8843]],
            ["supsetneqq", [10956]],
            ["supsim", [10952]],
            ["supsub", [10964]],
            ["supsup", [10966]],
            ["swarhk", [10534]],
            ["swarr", [8601]],
            ["swArr", [8665]],
            ["swarrow", [8601]],
            ["swnwar", [10538]],
            ["szlig", [223]],
            ["Tab", [9]],
            ["target", [8982]],
            ["Tau", [932]],
            ["tau", [964]],
            ["tbrk", [9140]],
            ["Tcaron", [356]],
            ["tcaron", [357]],
            ["Tcedil", [354]],
            ["tcedil", [355]],
            ["Tcy", [1058]],
            ["tcy", [1090]],
            ["tdot", [8411]],
            ["telrec", [8981]],
            ["Tfr", [120087]],
            ["tfr", [120113]],
            ["there4", [8756]],
            ["therefore", [8756]],
            ["Therefore", [8756]],
            ["Theta", [920]],
            ["theta", [952]],
            ["thetasym", [977]],
            ["thetav", [977]],
            ["thickapprox", [8776]],
            ["thicksim", [8764]],
            ["ThickSpace", [8287, 8202]],
            ["ThinSpace", [8201]],
            ["thinsp", [8201]],
            ["thkap", [8776]],
            ["thksim", [8764]],
            ["THORN", [222]],
            ["thorn", [254]],
            ["tilde", [732]],
            ["Tilde", [8764]],
            ["TildeEqual", [8771]],
            ["TildeFullEqual", [8773]],
            ["TildeTilde", [8776]],
            ["timesbar", [10801]],
            ["timesb", [8864]],
            ["times", [215]],
            ["timesd", [10800]],
            ["tint", [8749]],
            ["toea", [10536]],
            ["topbot", [9014]],
            ["topcir", [10993]],
            ["top", [8868]],
            ["Topf", [120139]],
            ["topf", [120165]],
            ["topfork", [10970]],
            ["tosa", [10537]],
            ["tprime", [8244]],
            ["trade", [8482]],
            ["TRADE", [8482]],
            ["triangle", [9653]],
            ["triangledown", [9663]],
            ["triangleleft", [9667]],
            ["trianglelefteq", [8884]],
            ["triangleq", [8796]],
            ["triangleright", [9657]],
            ["trianglerighteq", [8885]],
            ["tridot", [9708]],
            ["trie", [8796]],
            ["triminus", [10810]],
            ["TripleDot", [8411]],
            ["triplus", [10809]],
            ["trisb", [10701]],
            ["tritime", [10811]],
            ["trpezium", [9186]],
            ["Tscr", [119983]],
            ["tscr", [120009]],
            ["TScy", [1062]],
            ["tscy", [1094]],
            ["TSHcy", [1035]],
            ["tshcy", [1115]],
            ["Tstrok", [358]],
            ["tstrok", [359]],
            ["twixt", [8812]],
            ["twoheadleftarrow", [8606]],
            ["twoheadrightarrow", [8608]],
            ["Uacute", [218]],
            ["uacute", [250]],
            ["uarr", [8593]],
            ["Uarr", [8607]],
            ["uArr", [8657]],
            ["Uarrocir", [10569]],
            ["Ubrcy", [1038]],
            ["ubrcy", [1118]],
            ["Ubreve", [364]],
            ["ubreve", [365]],
            ["Ucirc", [219]],
            ["ucirc", [251]],
            ["Ucy", [1059]],
            ["ucy", [1091]],
            ["udarr", [8645]],
            ["Udblac", [368]],
            ["udblac", [369]],
            ["udhar", [10606]],
            ["ufisht", [10622]],
            ["Ufr", [120088]],
            ["ufr", [120114]],
            ["Ugrave", [217]],
            ["ugrave", [249]],
            ["uHar", [10595]],
            ["uharl", [8639]],
            ["uharr", [8638]],
            ["uhblk", [9600]],
            ["ulcorn", [8988]],
            ["ulcorner", [8988]],
            ["ulcrop", [8975]],
            ["ultri", [9720]],
            ["Umacr", [362]],
            ["umacr", [363]],
            ["uml", [168]],
            ["UnderBar", [95]],
            ["UnderBrace", [9183]],
            ["UnderBracket", [9141]],
            ["UnderParenthesis", [9181]],
            ["Union", [8899]],
            ["UnionPlus", [8846]],
            ["Uogon", [370]],
            ["uogon", [371]],
            ["Uopf", [120140]],
            ["uopf", [120166]],
            ["UpArrowBar", [10514]],
            ["uparrow", [8593]],
            ["UpArrow", [8593]],
            ["Uparrow", [8657]],
            ["UpArrowDownArrow", [8645]],
            ["updownarrow", [8597]],
            ["UpDownArrow", [8597]],
            ["Updownarrow", [8661]],
            ["UpEquilibrium", [10606]],
            ["upharpoonleft", [8639]],
            ["upharpoonright", [8638]],
            ["uplus", [8846]],
            ["UpperLeftArrow", [8598]],
            ["UpperRightArrow", [8599]],
            ["upsi", [965]],
            ["Upsi", [978]],
            ["upsih", [978]],
            ["Upsilon", [933]],
            ["upsilon", [965]],
            ["UpTeeArrow", [8613]],
            ["UpTee", [8869]],
            ["upuparrows", [8648]],
            ["urcorn", [8989]],
            ["urcorner", [8989]],
            ["urcrop", [8974]],
            ["Uring", [366]],
            ["uring", [367]],
            ["urtri", [9721]],
            ["Uscr", [119984]],
            ["uscr", [120010]],
            ["utdot", [8944]],
            ["Utilde", [360]],
            ["utilde", [361]],
            ["utri", [9653]],
            ["utrif", [9652]],
            ["uuarr", [8648]],
            ["Uuml", [220]],
            ["uuml", [252]],
            ["uwangle", [10663]],
            ["vangrt", [10652]],
            ["varepsilon", [1013]],
            ["varkappa", [1008]],
            ["varnothing", [8709]],
            ["varphi", [981]],
            ["varpi", [982]],
            ["varpropto", [8733]],
            ["varr", [8597]],
            ["vArr", [8661]],
            ["varrho", [1009]],
            ["varsigma", [962]],
            ["varsubsetneq", [8842, 65024]],
            ["varsubsetneqq", [10955, 65024]],
            ["varsupsetneq", [8843, 65024]],
            ["varsupsetneqq", [10956, 65024]],
            ["vartheta", [977]],
            ["vartriangleleft", [8882]],
            ["vartriangleright", [8883]],
            ["vBar", [10984]],
            ["Vbar", [10987]],
            ["vBarv", [10985]],
            ["Vcy", [1042]],
            ["vcy", [1074]],
            ["vdash", [8866]],
            ["vDash", [8872]],
            ["Vdash", [8873]],
            ["VDash", [8875]],
            ["Vdashl", [10982]],
            ["veebar", [8891]],
            ["vee", [8744]],
            ["Vee", [8897]],
            ["veeeq", [8794]],
            ["vellip", [8942]],
            ["verbar", [124]],
            ["Verbar", [8214]],
            ["vert", [124]],
            ["Vert", [8214]],
            ["VerticalBar", [8739]],
            ["VerticalLine", [124]],
            ["VerticalSeparator", [10072]],
            ["VerticalTilde", [8768]],
            ["VeryThinSpace", [8202]],
            ["Vfr", [120089]],
            ["vfr", [120115]],
            ["vltri", [8882]],
            ["vnsub", [8834, 8402]],
            ["vnsup", [8835, 8402]],
            ["Vopf", [120141]],
            ["vopf", [120167]],
            ["vprop", [8733]],
            ["vrtri", [8883]],
            ["Vscr", [119985]],
            ["vscr", [120011]],
            ["vsubnE", [10955, 65024]],
            ["vsubne", [8842, 65024]],
            ["vsupnE", [10956, 65024]],
            ["vsupne", [8843, 65024]],
            ["Vvdash", [8874]],
            ["vzigzag", [10650]],
            ["Wcirc", [372]],
            ["wcirc", [373]],
            ["wedbar", [10847]],
            ["wedge", [8743]],
            ["Wedge", [8896]],
            ["wedgeq", [8793]],
            ["weierp", [8472]],
            ["Wfr", [120090]],
            ["wfr", [120116]],
            ["Wopf", [120142]],
            ["wopf", [120168]],
            ["wp", [8472]],
            ["wr", [8768]],
            ["wreath", [8768]],
            ["Wscr", [119986]],
            ["wscr", [120012]],
            ["xcap", [8898]],
            ["xcirc", [9711]],
            ["xcup", [8899]],
            ["xdtri", [9661]],
            ["Xfr", [120091]],
            ["xfr", [120117]],
            ["xharr", [10231]],
            ["xhArr", [10234]],
            ["Xi", [926]],
            ["xi", [958]],
            ["xlarr", [10229]],
            ["xlArr", [10232]],
            ["xmap", [10236]],
            ["xnis", [8955]],
            ["xodot", [10752]],
            ["Xopf", [120143]],
            ["xopf", [120169]],
            ["xoplus", [10753]],
            ["xotime", [10754]],
            ["xrarr", [10230]],
            ["xrArr", [10233]],
            ["Xscr", [119987]],
            ["xscr", [120013]],
            ["xsqcup", [10758]],
            ["xuplus", [10756]],
            ["xutri", [9651]],
            ["xvee", [8897]],
            ["xwedge", [8896]],
            ["Yacute", [221]],
            ["yacute", [253]],
            ["YAcy", [1071]],
            ["yacy", [1103]],
            ["Ycirc", [374]],
            ["ycirc", [375]],
            ["Ycy", [1067]],
            ["ycy", [1099]],
            ["yen", [165]],
            ["Yfr", [120092]],
            ["yfr", [120118]],
            ["YIcy", [1031]],
            ["yicy", [1111]],
            ["Yopf", [120144]],
            ["yopf", [120170]],
            ["Yscr", [119988]],
            ["yscr", [120014]],
            ["YUcy", [1070]],
            ["yucy", [1102]],
            ["yuml", [255]],
            ["Yuml", [376]],
            ["Zacute", [377]],
            ["zacute", [378]],
            ["Zcaron", [381]],
            ["zcaron", [382]],
            ["Zcy", [1047]],
            ["zcy", [1079]],
            ["Zdot", [379]],
            ["zdot", [380]],
            ["zeetrf", [8488]],
            ["ZeroWidthSpace", [8203]],
            ["Zeta", [918]],
            ["zeta", [950]],
            ["zfr", [120119]],
            ["Zfr", [8488]],
            ["ZHcy", [1046]],
            ["zhcy", [1078]],
            ["zigrarr", [8669]],
            ["zopf", [120171]],
            ["Zopf", [8484]],
            ["Zscr", [119989]],
            ["zscr", [120015]],
            ["zwj", [8205]],
            ["zwnj", [8204]]
        ],
        n = {},
        o = {};

    function i() {}! function (e, t) {
        var n = r.length,
            o = [];
        for (; n--;) {
            var i, s = r[n],
                a = s[0],
                l = s[1],
                c = l[0],
                u = c < 32 || c > 126 || 62 === c || 60 === c || 38 === c || 34 === c || 39 === c;
            if (u && (i = t[c] = t[c] || {}), l[1]) {
                var f = l[1];
                e[a] = String.fromCharCode(c) + String.fromCharCode(f), o.push(u && (i[f] = a))
            } else e[a] = String.fromCharCode(c), o.push(u && (i[""] = a))
        }
    }(n, o), i.prototype.decode = function (e) {
        return e && e.length ? e.replace(/&(#?[\w\d]+);?/g, function (e, t) {
            var r;
            if ("#" === t.charAt(0)) {
                var o = "x" === t.charAt(1) ? parseInt(t.substr(2).toLowerCase(), 16) : parseInt(t.substr(1));
                isNaN(o) || o < -32768 || o > 65535 || (r = String.fromCharCode(o))
            } else r = n[t];
            return r || e
        }) : ""
    }, i.decode = function (e) {
        return (new i).decode(e)
    }, i.prototype.encode = function (e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var i = o[e.charCodeAt(n)];
            if (i) {
                var s = i[e.charCodeAt(n + 1)];
                if (s ? n++ : s = i[""], s) {
                    r += "&" + s + ";", n++;
                    continue
                }
            }
            r += e.charAt(n), n++
        }
        return r
    }, i.encode = function (e) {
        return (new i).encode(e)
    }, i.prototype.encodeNonUTF = function (e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var i = e.charCodeAt(n),
                s = o[i];
            if (s) {
                var a = s[e.charCodeAt(n + 1)];
                if (a ? n++ : a = s[""], a) {
                    r += "&" + a + ";", n++;
                    continue
                }
            }
            r += i < 32 || i > 126 ? "&#" + i + ";" : e.charAt(n), n++
        }
        return r
    }, i.encodeNonUTF = function (e) {
        return (new i).encodeNonUTF(e)
    }, i.prototype.encodeNonASCII = function (e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var o = e.charCodeAt(n);
            o <= 255 ? r += e[n++] : (r += "&#" + o + ";", n++)
        }
        return r
    }, i.encodeNonASCII = function (e) {
        return (new i).encodeNonASCII(e)
    }, e.exports = i
}, function (e, t, r) {
    e.exports = r.p + "./sprites/cliffgrass_back.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/cliffgrass_leftside.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/cliff_front.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/cliffgrass_topright.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/cliffgrass_all.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/cliffgrass_bottomright.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/cliffgrass_bottomleft.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/cliffgrass_topleft.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/cliffgrass_uprightbottom.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/cliffgrass_topbottom.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/caveentrance_open.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/black_block.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/bushV1.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/slime_spritesheet.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/slimeSuper_spritesheet.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/shadewalker_Spritesheet.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/shadeKeeper_Spritesheet.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/playerAttack_Spritesheet.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/character_spritesheet.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/cliffgrass_side.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/dirt_terrian.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/cave_terrain.png"
}, function (e, t, r) {
    e.exports = r.p + "./sprites/grass1.png"
}, function (e, t, r) {
    r(30), e.exports = r(52)
}, function (e, t, r) {
    "use strict";
    (function (e) {
        var t = r(31),
            n = r(38),
            o = r(40).getLogger("webpack-dev-server"),
            i = r(41),
            s = r(43);
        var a = void 0,
            l = !0;
        if ("undefined" != typeof window) {
            var c = window.location.search.toLowerCase();
            l = -1 === c.indexOf("hotreload=false")
        }(a = t.parse(e.substr(1))).port && "0" !== a.port || (a.port = self.location.port);
        var u = !1,
            f = !0,
            p = "",
            h = !1,
            d = !1,
            g = !1;

        function m(e, t) {
            "undefined" == typeof self || "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope || self.postMessage({
                type: "webpack" + e,
                data: t
            }, "*")
        }
        o.setDefaultLevel("info");
        var v = {
                hot: function () {
                    u = !0, o.info("[WDS] Hot Module Replacement enabled.")
                },
                invalid: function () {
                    o.info("[WDS] App updated. Recompiling..."), (h || d) && s.clear(), m("Invalid")
                },
                hash: function (e) {
                    p = e
                },
                "still-ok": function () {
                    o.info("[WDS] Nothing changed."), (h || d) && s.clear(), m("StillOk")
                },
                "log-level": function (e) {
                    var t = r(48);
                    switch (-1 !== t.keys().indexOf("./log") && t("./log").setLogLevel(e), e) {
                        case "info":
                        case "error":
                            o.setLevel(e);
                            break;
                        case "warning":
                            o.setLevel("warn");
                            break;
                        case "none":
                            o.disableAll();
                            break;
                        default:
                            o.error("[WDS] Unknown clientLogLevel '" + e + "'")
                    }
                },
                overlay: function (e) {
                    "undefined" != typeof document && ("boolean" == typeof e ? (h = !1, d = e) : e && (h = e.warnings, d = e.errors))
                },
                progress: function (e) {
                    "undefined" != typeof document && (g = e)
                },
                "progress-update": function (e) {
                    g && o.info("[WDS] " + e.percent + "% - " + e.msg + "."), m("Progress", e)
                },
                ok: function () {
                    if (m("Ok"), (h || d) && s.clear(), f) return f = !1;
                    x()
                },
                "content-changed": function () {
                    o.info("[WDS] Content base changed. Reloading..."), self.location.reload()
                },
                warnings: function (e) {
                    o.warn("[WDS] Warnings while compiling.");
                    var t = e.map(function (e) {
                        return n(e)
                    });
                    m("Warnings", t);
                    for (var r = 0; r < t.length; r++) o.warn(t[r]);
                    if (h && s.showMessage(e), f) return f = !1;
                    x()
                },
                errors: function (e) {
                    o.error("[WDS] Errors while compiling. Reload prevented.");
                    var t = e.map(function (e) {
                        return n(e)
                    });
                    m("Errors", t);
                    for (var r = 0; r < t.length; r++) o.error(t[r]);
                    d && s.showMessage(e), f = !1
                },
                error: function (e) {
                    o.error(e)
                },
                close: function () {
                    o.error("[WDS] Disconnected!"), m("Close")
                }
            },
            y = a.hostname,
            b = a.protocol;
        "0.0.0.0" !== y && "::" !== y || self.location.hostname && ~self.location.protocol.indexOf("http") && (y = self.location.hostname), !y || "https:" !== self.location.protocol && "0.0.0.0" !== a.hostname || (b = self.location.protocol), i(t.format({
            protocol: b,
            auth: a.auth,
            hostname: y,
            port: a.port,
            pathname: null == a.path || "/" === a.path ? "/sockjs-node" : a.path
        }), v);
        var w = !1;

        function x() {
            if (!w && l)
                if (u) o.info("[WDS] App hot update..."), r(50).emit("webpackHotUpdate", p), "undefined" != typeof self && self.window && self.postMessage("webpackHotUpdate" + p, "*");
                else var e = self,
                    t = self.setInterval(function () {
                        "about:" !== e.location.protocol ? n(e, t) : (e = e.parent).parent === e && n(e, t)
                    });

            function n(e, t) {
                clearInterval(t), o.info("[WDS] App updated. Reloading..."), e.location.reload()
            }
        }
        self.addEventListener("beforeunload", function () {
            w = !0
        })
    }).call(this, "?http://localhost:8080")
}, function (e, t, r) {
    "use strict";
    var n = r(32),
        o = r(34);

    function i() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }
    t.parse = b, t.resolve = function (e, t) {
        return b(e, !1, !0).resolve(t)
    }, t.resolveObject = function (e, t) {
        return e ? b(e, !1, !0).resolveObject(t) : t
    }, t.format = function (e) {
        o.isString(e) && (e = b(e));
        return e instanceof i ? e.format() : i.prototype.format.call(e)
    }, t.Url = i;
    var s = /^([a-z0-9.+-]+:)/i,
        a = /:[0-9]*$/,
        l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        u = ["'"].concat(c),
        f = ["%", "/", "?", ";", "#"].concat(u),
        p = ["/", "?", "#"],
        h = /^[+a-z0-9A-Z_-]{0,63}$/,
        d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        g = {
            javascript: !0,
            "javascript:": !0
        },
        m = {
            javascript: !0,
            "javascript:": !0
        },
        v = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        y = r(35);

    function b(e, t, r) {
        if (e && o.isObject(e) && e instanceof i) return e;
        var n = new i;
        return n.parse(e, t, r), n
    }
    i.prototype.parse = function (e, t, r) {
        if (!o.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
        var i = e.indexOf("?"),
            a = -1 !== i && i < e.indexOf("#") ? "?" : "#",
            c = e.split(a);
        c[0] = c[0].replace(/\\/g, "/");
        var b = e = c.join(a);
        if (b = b.trim(), !r && 1 === e.split("#").length) {
            var w = l.exec(b);
            if (w) return this.path = b, this.href = b, this.pathname = w[1], w[2] ? (this.search = w[2], this.query = t ? y.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
        }
        var x = s.exec(b);
        if (x) {
            var C = (x = x[0]).toLowerCase();
            this.protocol = C, b = b.substr(x.length)
        }
        if (r || x || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var E = "//" === b.substr(0, 2);
            !E || x && m[x] || (b = b.substr(2), this.slashes = !0)
        }
        if (!m[x] && (E || x && !v[x])) {
            for (var _, S, k = -1, A = 0; A < p.length; A++) {
                -1 !== (O = b.indexOf(p[A])) && (-1 === k || O < k) && (k = O)
            } - 1 !== (S = -1 === k ? b.lastIndexOf("@") : b.lastIndexOf("@", k)) && (_ = b.slice(0, S), b = b.slice(S + 1), this.auth = decodeURIComponent(_)), k = -1;
            for (A = 0; A < f.length; A++) {
                var O; - 1 !== (O = b.indexOf(f[A])) && (-1 === k || O < k) && (k = O)
            } - 1 === k && (k = b.length), this.host = b.slice(0, k), b = b.slice(k), this.parseHost(), this.hostname = this.hostname || "";
            var j = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!j)
                for (var T = this.hostname.split(/\./), N = (A = 0, T.length); A < N; A++) {
                    var q = T[A];
                    if (q && !q.match(h)) {
                        for (var L = "", D = 0, R = q.length; D < R; D++) q.charCodeAt(D) > 127 ? L += "x" : L += q[D];
                        if (!L.match(h)) {
                            var I = T.slice(0, A),
                                P = T.slice(A + 1),
                                F = q.match(d);
                            F && (I.push(F[1]), P.unshift(F[2])), P.length && (b = "/" + P.join(".") + b), this.hostname = I.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), j || (this.hostname = n.toASCII(this.hostname));
            var M = this.port ? ":" + this.port : "",
                U = this.hostname || "";
            this.host = U + M, this.href += this.host, j && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== b[0] && (b = "/" + b))
        }
        if (!g[C])
            for (A = 0, N = u.length; A < N; A++) {
                var B = u[A];
                if (-1 !== b.indexOf(B)) {
                    var V = encodeURIComponent(B);
                    V === B && (V = escape(B)), b = b.split(B).join(V)
                }
            }
        var H = b.indexOf("#"); - 1 !== H && (this.hash = b.substr(H), b = b.slice(0, H));
        var Y = b.indexOf("?");
        if (-1 !== Y ? (this.search = b.substr(Y), this.query = b.substr(Y + 1), t && (this.query = y.parse(this.query)), b = b.slice(0, Y)) : t && (this.search = "", this.query = {}), b && (this.pathname = b), v[C] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            M = this.pathname || "";
            var G = this.search || "";
            this.path = M + G
        }
        return this.href = this.format(), this
    }, i.prototype.format = function () {
        var e = this.auth || "";
        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
        var t = this.protocol || "",
            r = this.pathname || "",
            n = this.hash || "",
            i = !1,
            s = "";
        this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (s = y.stringify(this.query));
        var a = this.search || s && "?" + s || "";
        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || v[t]) && !1 !== i ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), n && "#" !== n.charAt(0) && (n = "#" + n), a && "?" !== a.charAt(0) && (a = "?" + a), t + i + (r = r.replace(/[?#]/g, function (e) {
            return encodeURIComponent(e)
        })) + (a = a.replace("#", "%23")) + n
    }, i.prototype.resolve = function (e) {
        return this.resolveObject(b(e, !1, !0)).format()
    }, i.prototype.resolveObject = function (e) {
        if (o.isString(e)) {
            var t = new i;
            t.parse(e, !1, !0), e = t
        }
        for (var r = new i, n = Object.keys(this), s = 0; s < n.length; s++) {
            var a = n[s];
            r[a] = this[a]
        }
        if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
        if (e.slashes && !e.protocol) {
            for (var l = Object.keys(e), c = 0; c < l.length; c++) {
                var u = l[c];
                "protocol" !== u && (r[u] = e[u])
            }
            return v[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
        }
        if (e.protocol && e.protocol !== r.protocol) {
            if (!v[e.protocol]) {
                for (var f = Object.keys(e), p = 0; p < f.length; p++) {
                    var h = f[p];
                    r[h] = e[h]
                }
                return r.href = r.format(), r
            }
            if (r.protocol = e.protocol, e.host || m[e.protocol]) r.pathname = e.pathname;
            else {
                for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift()););
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), r.pathname = d.join("/")
            }
            if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                var g = r.pathname || "",
                    y = r.search || "";
                r.path = g + y
            }
            return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
        }
        var b = r.pathname && "/" === r.pathname.charAt(0),
            w = e.host || e.pathname && "/" === e.pathname.charAt(0),
            x = w || b || r.host && e.pathname,
            C = x,
            E = r.pathname && r.pathname.split("/") || [],
            _ = (d = e.pathname && e.pathname.split("/") || [], r.protocol && !v[r.protocol]);
        if (_ && (r.hostname = "", r.port = null, r.host && ("" === E[0] ? E[0] = r.host : E.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === d[0] ? d[0] = e.host : d.unshift(e.host)), e.host = null), x = x && ("" === d[0] || "" === E[0])), w) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, E = d;
        else if (d.length) E || (E = []), E.pop(), E = E.concat(d), r.search = e.search, r.query = e.query;
        else if (!o.isNullOrUndefined(e.search)) {
            if (_) r.hostname = r.host = E.shift(), (j = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = j.shift(), r.host = r.hostname = j.shift());
            return r.search = e.search, r.query = e.query, o.isNull(r.pathname) && o.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
        }
        if (!E.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
        for (var S = E.slice(-1)[0], k = (r.host || e.host || E.length > 1) && ("." === S || ".." === S) || "" === S, A = 0, O = E.length; O >= 0; O--) "." === (S = E[O]) ? E.splice(O, 1) : ".." === S ? (E.splice(O, 1), A++) : A && (E.splice(O, 1), A--);
        if (!x && !C)
            for (; A--; A) E.unshift("..");
        !x || "" === E[0] || E[0] && "/" === E[0].charAt(0) || E.unshift(""), k && "/" !== E.join("/").substr(-1) && E.push("");
        var j, T = "" === E[0] || E[0] && "/" === E[0].charAt(0);
        _ && (r.hostname = r.host = T ? "" : E.length ? E.shift() : "", (j = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = j.shift(), r.host = r.hostname = j.shift()));
        return (x = x || r.host && E.length) && !T && E.unshift(""), E.length ? r.pathname = E.join("/") : (r.pathname = null, r.path = null), o.isNull(r.pathname) && o.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
    }, i.prototype.parseHost = function () {
        var e = this.host,
            t = a.exec(e);
        t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
    }
}, function (e, t, r) {
    (function (e, n) {
        var o; /*! https://mths.be/punycode v1.4.1 by @mathias */
        ! function (i) {
            t && t.nodeType, e && e.nodeType;
            var s = "object" == typeof n && n;
            s.global !== s && s.window !== s && s.self;
            var a, l = 2147483647,
                c = 36,
                u = 1,
                f = 26,
                p = 38,
                h = 700,
                d = 72,
                g = 128,
                m = "-",
                v = /^xn--/,
                y = /[^\x20-\x7E]/,
                b = /[\x2E\u3002\uFF0E\uFF61]/g,
                w = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                x = c - u,
                C = Math.floor,
                E = String.fromCharCode;

            function _(e) {
                throw new RangeError(w[e])
            }

            function S(e, t) {
                for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
                return n
            }

            function k(e, t) {
                var r = e.split("@"),
                    n = "";
                return r.length > 1 && (n = r[0] + "@", e = r[1]), n + S((e = e.replace(b, ".")).split("."), t).join(".")
            }

            function A(e) {
                for (var t, r, n = [], o = 0, i = e.length; o < i;)(t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? 56320 == (64512 & (r = e.charCodeAt(o++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), o--) : n.push(t);
                return n
            }

            function O(e) {
                return S(e, function (e) {
                    var t = "";
                    return e > 65535 && (t += E((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += E(e)
                }).join("")
            }

            function j(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }

            function T(e, t, r) {
                var n = 0;
                for (e = r ? C(e / h) : e >> 1, e += C(e / t); e > x * f >> 1; n += c) e = C(e / x);
                return C(n + (x + 1) * e / (e + p))
            }

            function N(e) {
                var t, r, n, o, i, s, a, p, h, v, y, b = [],
                    w = e.length,
                    x = 0,
                    E = g,
                    S = d;
                for ((r = e.lastIndexOf(m)) < 0 && (r = 0), n = 0; n < r; ++n) e.charCodeAt(n) >= 128 && _("not-basic"), b.push(e.charCodeAt(n));
                for (o = r > 0 ? r + 1 : 0; o < w;) {
                    for (i = x, s = 1, a = c; o >= w && _("invalid-input"), ((p = (y = e.charCodeAt(o++)) - 48 < 10 ? y - 22 : y - 65 < 26 ? y - 65 : y - 97 < 26 ? y - 97 : c) >= c || p > C((l - x) / s)) && _("overflow"), x += p * s, !(p < (h = a <= S ? u : a >= S + f ? f : a - S)); a += c) s > C(l / (v = c - h)) && _("overflow"), s *= v;
                    S = T(x - i, t = b.length + 1, 0 == i), C(x / t) > l - E && _("overflow"), E += C(x / t), x %= t, b.splice(x++, 0, E)
                }
                return O(b)
            }

            function q(e) {
                var t, r, n, o, i, s, a, p, h, v, y, b, w, x, S, k = [];
                for (b = (e = A(e)).length, t = g, r = 0, i = d, s = 0; s < b; ++s)(y = e[s]) < 128 && k.push(E(y));
                for (n = o = k.length, o && k.push(m); n < b;) {
                    for (a = l, s = 0; s < b; ++s)(y = e[s]) >= t && y < a && (a = y);
                    for (a - t > C((l - r) / (w = n + 1)) && _("overflow"), r += (a - t) * w, t = a, s = 0; s < b; ++s)
                        if ((y = e[s]) < t && ++r > l && _("overflow"), y == t) {
                            for (p = r, h = c; !(p < (v = h <= i ? u : h >= i + f ? f : h - i)); h += c) S = p - v, x = c - v, k.push(E(j(v + S % x, 0))), p = C(S / x);
                            k.push(E(j(p, 0))), i = T(r, w, n == o), r = 0, ++n
                        }++ r, ++t
                }
                return k.join("")
            }
            a = {
                version: "1.4.1",
                ucs2: {
                    decode: A,
                    encode: O
                },
                decode: N,
                encode: q,
                toASCII: function (e) {
                    return k(e, function (e) {
                        return y.test(e) ? "xn--" + q(e) : e
                    })
                },
                toUnicode: function (e) {
                    return k(e, function (e) {
                        return v.test(e) ? N(e.slice(4).toLowerCase()) : e
                    })
                }
            }, void 0 === (o = function () {
                return a
            }.call(t, r, t, e)) || (e.exports = o)
        }()
    }).call(this, r(33)(e), r(4))
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t, r) {
    "use strict";
    e.exports = {
        isString: function (e) {
            return "string" == typeof e
        },
        isObject: function (e) {
            return "object" == typeof e && null !== e
        },
        isNull: function (e) {
            return null === e
        },
        isNullOrUndefined: function (e) {
            return null == e
        }
    }
}, function (e, t, r) {
    "use strict";
    t.decode = t.parse = r(36), t.encode = t.stringify = r(37)
}, function (e, t, r) {
    "use strict";

    function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function (e, t, r, i) {
        t = t || "&", r = r || "=";
        var s = {};
        if ("string" != typeof e || 0 === e.length) return s;
        var a = /\+/g;
        e = e.split(t);
        var l = 1e3;
        i && "number" == typeof i.maxKeys && (l = i.maxKeys);
        var c = e.length;
        l > 0 && c > l && (c = l);
        for (var u = 0; u < c; ++u) {
            var f, p, h, d, g = e[u].replace(a, "%20"),
                m = g.indexOf(r);
            m >= 0 ? (f = g.substr(0, m), p = g.substr(m + 1)) : (f = g, p = ""), h = decodeURIComponent(f), d = decodeURIComponent(p), n(s, h) ? o(s[h]) ? s[h].push(d) : s[h] = [s[h], d] : s[h] = d
        }
        return s
    };
    var o = Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}, function (e, t, r) {
    "use strict";
    var n = function (e) {
        switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    };
    e.exports = function (e, t, r, a) {
        return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? i(s(e), function (s) {
            var a = encodeURIComponent(n(s)) + r;
            return o(e[s]) ? i(e[s], function (e) {
                return a + encodeURIComponent(n(e))
            }).join(t) : a + encodeURIComponent(n(e[s]))
        }).join(t) : a ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(e)) : ""
    };
    var o = Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    };

    function i(e, t) {
        if (e.map) return e.map(t);
        for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
        return r
    }
    var s = Object.keys || function (e) {
        var t = [];
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
        return t
    }
}, function (e, t, r) {
    "use strict";
    var n = r(39)();
    e.exports = function (e) {
        return "string" == typeof e ? e.replace(n, "") : e
    }
}, function (e, t, r) {
    "use strict";
    e.exports = function () {
        return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g
    }
}, function (e, t, r) {
    var n, o;
    ! function (i, s) {
        "use strict";
        void 0 === (o = "function" == typeof (n = function () {
            var e = function () {},
                t = "undefined",
                r = ["trace", "debug", "info", "warn", "error"];

            function n(e, t) {
                var r = e[t];
                if ("function" == typeof r.bind) return r.bind(e);
                try {
                    return Function.prototype.bind.call(r, e)
                } catch (t) {
                    return function () {
                        return Function.prototype.apply.apply(r, [e, arguments])
                    }
                }
            }

            function o(t, n) {
                for (var o = 0; o < r.length; o++) {
                    var i = r[o];
                    this[i] = o < t ? e : this.methodFactory(i, t, n)
                }
                this.log = this.debug
            }

            function i(r, i, s) {
                return function (r) {
                    "debug" === r && (r = "log");
                    return typeof console !== t && (void 0 !== console[r] ? n(console, r) : void 0 !== console.log ? n(console, "log") : e)
                }(r) || function (e, r, n) {
                    return function () {
                        typeof console !== t && (o.call(this, r, n), this[e].apply(this, arguments))
                    }
                }.apply(this, arguments)
            }

            function s(e, n, s) {
                var a, l = this,
                    c = "loglevel";

                function u() {
                    var e;
                    if (typeof window !== t) {
                        try {
                            e = window.localStorage[c]
                        } catch (e) {}
                        if (typeof e === t) try {
                            var r = window.document.cookie,
                                n = r.indexOf(encodeURIComponent(c) + "="); - 1 !== n && (e = /^([^;]+)/.exec(r.slice(n))[1])
                        } catch (e) {}
                        return void 0 === l.levels[e] && (e = void 0), e
                    }
                }
                e && (c += ":" + e), l.name = e, l.levels = {
                    TRACE: 0,
                    DEBUG: 1,
                    INFO: 2,
                    WARN: 3,
                    ERROR: 4,
                    SILENT: 5
                }, l.methodFactory = s || i, l.getLevel = function () {
                    return a
                }, l.setLevel = function (n, i) {
                    if ("string" == typeof n && void 0 !== l.levels[n.toUpperCase()] && (n = l.levels[n.toUpperCase()]), !("number" == typeof n && n >= 0 && n <= l.levels.SILENT)) throw "log.setLevel() called with invalid level: " + n;
                    if (a = n, !1 !== i && function (e) {
                            var n = (r[e] || "silent").toUpperCase();
                            if (typeof window === t) return;
                            try {
                                return void(window.localStorage[c] = n)
                            } catch (e) {}
                            try {
                                window.document.cookie = encodeURIComponent(c) + "=" + n + ";"
                            } catch (e) {}
                        }(n), o.call(l, n, e), typeof console === t && n < l.levels.SILENT) return "No console available for logging"
                }, l.setDefaultLevel = function (e) {
                    u() || l.setLevel(e, !1)
                }, l.enableAll = function (e) {
                    l.setLevel(l.levels.TRACE, e)
                }, l.disableAll = function (e) {
                    l.setLevel(l.levels.SILENT, e)
                };
                var f = u();
                null == f && (f = null == n ? "WARN" : n), l.setLevel(f, !1)
            }
            var a = new s,
                l = {};
            a.getLogger = function (e) {
                if ("string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
                var t = l[e];
                return t || (t = l[e] = new s(e, a.getLevel(), a.methodFactory)), t
            };
            var c = typeof window !== t ? window.log : void 0;
            return a.noConflict = function () {
                return typeof window !== t && window.log === a && (window.log = c), a
            }, a.getLoggers = function () {
                return l
            }, a
        }) ? n.call(t, r, t, e) : n) || (e.exports = o)
    }()
}, function (e, t, r) {
    "use strict";
    var n = r(42),
        o = 0,
        i = null,
        s = function (e, t) {
            (i = new n(e)).onopen = function () {
                o = 0
            }, i.onclose = function () {
                if (0 === o && t.close(), i = null, o <= 10) {
                    var r = 1e3 * Math.pow(2, o) + 100 * Math.random();
                    o += 1, setTimeout(function () {
                        s(e, t)
                    }, r)
                }
            }, i.onmessage = function (e) {
                var r = JSON.parse(e.data);
                t[r.type] && t[r.type](r.data)
            }
        };
    e.exports = s
}, function (e, t, r) {
    (function (t) {
        var r;
        e.exports = function e(t, n, o) {
            function i(a, l) {
                if (!n[a]) {
                    if (!t[a]) {
                        var c = "function" == typeof r && r;
                        if (!l && c) return r(a, !0);
                        if (s) return s(a, !0);
                        var u = new Error("Cannot find module '" + a + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var f = n[a] = {
                        exports: {}
                    };
                    t[a][0].call(f.exports, function (e) {
                        var r = t[a][1][e];
                        return i(r || e)
                    }, f, f.exports, e, t, n, o)
                }
                return n[a].exports
            }
            for (var s = "function" == typeof r && r, a = 0; a < o.length; a++) i(o[a]);
            return i
        }({
            1: [function (e, r, n) {
                (function (t) {
                    "use strict";
                    var n = e("./transport-list");
                    r.exports = e("./main")(n), "_sockjs_onload" in t && setTimeout(t._sockjs_onload, 1)
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./main": 14,
                "./transport-list": 16
            }],
            2: [function (e, t, r) {
                "use strict";
                var n = e("inherits"),
                    o = e("./event");

                function i() {
                    o.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = ""
                }
                n(i, o), t.exports = i
            }, {
                "./event": 4,
                inherits: 57
            }],
            3: [function (e, t, r) {
                "use strict";
                var n = e("inherits"),
                    o = e("./eventtarget");

                function i() {
                    o.call(this)
                }
                n(i, o), i.prototype.removeAllListeners = function (e) {
                    e ? delete this._listeners[e] : this._listeners = {}
                }, i.prototype.once = function (e, t) {
                    var r = this,
                        n = !1;
                    this.on(e, function o() {
                        r.removeListener(e, o), n || (n = !0, t.apply(this, arguments))
                    })
                }, i.prototype.emit = function () {
                    var e = arguments[0],
                        t = this._listeners[e];
                    if (t) {
                        for (var r = arguments.length, n = new Array(r - 1), o = 1; o < r; o++) n[o - 1] = arguments[o];
                        for (var i = 0; i < t.length; i++) t[i].apply(this, n)
                    }
                }, i.prototype.on = i.prototype.addListener = o.prototype.addEventListener, i.prototype.removeListener = o.prototype.removeEventListener, t.exports.EventEmitter = i
            }, {
                "./eventtarget": 5,
                inherits: 57
            }],
            4: [function (e, t, r) {
                "use strict";

                function n(e) {
                    this.type = e
                }
                n.prototype.initEvent = function (e, t, r) {
                    return this.type = e, this.bubbles = t, this.cancelable = r, this.timeStamp = +new Date, this
                }, n.prototype.stopPropagation = function () {}, n.prototype.preventDefault = function () {}, n.CAPTURING_PHASE = 1, n.AT_TARGET = 2, n.BUBBLING_PHASE = 3, t.exports = n
            }, {}],
            5: [function (e, t, r) {
                "use strict";

                function n() {
                    this._listeners = {}
                }
                n.prototype.addEventListener = function (e, t) {
                    e in this._listeners || (this._listeners[e] = []);
                    var r = this._listeners[e]; - 1 === r.indexOf(t) && (r = r.concat([t])), this._listeners[e] = r
                }, n.prototype.removeEventListener = function (e, t) {
                    var r = this._listeners[e];
                    if (r) {
                        var n = r.indexOf(t); - 1 === n || (r.length > 1 ? this._listeners[e] = r.slice(0, n).concat(r.slice(n + 1)) : delete this._listeners[e])
                    }
                }, n.prototype.dispatchEvent = function () {
                    var e = arguments[0],
                        t = e.type,
                        r = 1 === arguments.length ? [e] : Array.apply(null, arguments);
                    if (this["on" + t] && this["on" + t].apply(this, r), t in this._listeners)
                        for (var n = this._listeners[t], o = 0; o < n.length; o++) n[o].apply(this, r)
                }, t.exports = n
            }, {}],
            6: [function (e, t, r) {
                "use strict";
                var n = e("inherits"),
                    o = e("./event");

                function i(e) {
                    o.call(this), this.initEvent("message", !1, !1), this.data = e
                }
                n(i, o), t.exports = i
            }, {
                "./event": 4,
                inherits: 57
            }],
            7: [function (e, t, r) {
                "use strict";
                var n = e("json3"),
                    o = e("./utils/iframe");

                function i(e) {
                    this._transport = e, e.on("message", this._transportMessage.bind(this)), e.on("close", this._transportClose.bind(this))
                }
                i.prototype._transportClose = function (e, t) {
                    o.postMessage("c", n.stringify([e, t]))
                }, i.prototype._transportMessage = function (e) {
                    o.postMessage("t", e)
                }, i.prototype._send = function (e) {
                    this._transport.send(e)
                }, i.prototype._close = function () {
                    this._transport.close(), this._transport.removeAllListeners()
                }, t.exports = i
            }, {
                "./utils/iframe": 47,
                json3: 58
            }],
            8: [function (e, t, r) {
                (function (r) {
                    "use strict";
                    var n = e("./utils/url"),
                        o = e("./utils/event"),
                        i = e("json3"),
                        s = e("./facade"),
                        a = e("./info-iframe-receiver"),
                        l = e("./utils/iframe"),
                        c = e("./location"),
                        u = function () {};
                    "production" !== r.env.NODE_ENV && (u = e("debug")("sockjs-client:iframe-bootstrap")), t.exports = function (e, t) {
                        var r, f = {};
                        t.forEach(function (e) {
                            e.facadeTransport && (f[e.facadeTransport.transportName] = e.facadeTransport)
                        }), f[a.transportName] = a, e.bootstrap_iframe = function () {
                            var t;
                            l.currentWindowId = c.hash.slice(1), o.attachEvent("message", function (o) {
                                if (o.source === parent && (void 0 === r && (r = o.origin), o.origin === r)) {
                                    var a;
                                    try {
                                        a = i.parse(o.data)
                                    } catch (e) {
                                        return void u("bad json", o.data)
                                    }
                                    if (a.windowId === l.currentWindowId) switch (a.type) {
                                        case "s":
                                            var p;
                                            try {
                                                p = i.parse(a.data)
                                            } catch (e) {
                                                u("bad json", a.data);
                                                break
                                            }
                                            var h = p[0],
                                                d = p[1],
                                                g = p[2],
                                                m = p[3];
                                            if (u(h, d, g, m), h !== e.version) throw new Error('Incompatible SockJS! Main site uses: "' + h + '", the iframe: "' + e.version + '".');
                                            if (!n.isOriginEqual(g, c.href) || !n.isOriginEqual(m, c.href)) throw new Error("Can't connect to different domain from within an iframe. (" + c.href + ", " + g + ", " + m + ")");
                                            t = new s(new f[d](g, m));
                                            break;
                                        case "m":
                                            t._send(a.data);
                                            break;
                                        case "c":
                                            t && t._close(), t = null
                                    }
                                }
                            }), l.postMessage("s")
                        }
                    }
                }).call(this, {
                    env: {}
                })
            }, {
                "./facade": 7,
                "./info-iframe-receiver": 10,
                "./location": 13,
                "./utils/event": 46,
                "./utils/iframe": 47,
                "./utils/url": 52,
                debug: 55,
                json3: 58
            }],
            9: [function (e, t, r) {
                (function (r) {
                    "use strict";
                    var n = e("events").EventEmitter,
                        o = e("inherits"),
                        i = e("json3"),
                        s = e("./utils/object"),
                        a = function () {};

                    function l(e, t) {
                        n.call(this);
                        var r = this,
                            o = +new Date;
                        this.xo = new t("GET", e), this.xo.once("finish", function (e, t) {
                            var n, l;
                            if (200 === e) {
                                if (l = +new Date - o, t) try {
                                    n = i.parse(t)
                                } catch (e) {
                                    a("bad json", t)
                                }
                                s.isObject(n) || (n = {})
                            }
                            r.emit("finish", n, l), r.removeAllListeners()
                        })
                    }
                    "production" !== r.env.NODE_ENV && (a = e("debug")("sockjs-client:info-ajax")), o(l, n), l.prototype.close = function () {
                        this.removeAllListeners(), this.xo.close()
                    }, t.exports = l
                }).call(this, {
                    env: {}
                })
            }, {
                "./utils/object": 49,
                debug: 55,
                events: 3,
                inherits: 57,
                json3: 58
            }],
            10: [function (e, t, r) {
                "use strict";
                var n = e("inherits"),
                    o = e("events").EventEmitter,
                    i = e("json3"),
                    s = e("./transport/sender/xhr-local"),
                    a = e("./info-ajax");

                function l(e) {
                    var t = this;
                    o.call(this), this.ir = new a(e, s), this.ir.once("finish", function (e, r) {
                        t.ir = null, t.emit("message", i.stringify([e, r]))
                    })
                }
                n(l, o), l.transportName = "iframe-info-receiver", l.prototype.close = function () {
                    this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners()
                }, t.exports = l
            }, {
                "./info-ajax": 9,
                "./transport/sender/xhr-local": 37,
                events: 3,
                inherits: 57,
                json3: 58
            }],
            11: [function (e, r, n) {
                (function (t, n) {
                    "use strict";
                    var o = e("events").EventEmitter,
                        i = e("inherits"),
                        s = e("json3"),
                        a = e("./utils/event"),
                        l = e("./transport/iframe"),
                        c = e("./info-iframe-receiver"),
                        u = function () {};

                    function f(e, t) {
                        var r = this;
                        o.call(this);
                        var i = function () {
                            var n = r.ifr = new l(c.transportName, t, e);
                            n.once("message", function (e) {
                                if (e) {
                                    var t;
                                    try {
                                        t = s.parse(e)
                                    } catch (t) {
                                        return u("bad json", e), r.emit("finish"), void r.close()
                                    }
                                    var n = t[0],
                                        o = t[1];
                                    r.emit("finish", n, o)
                                }
                                r.close()
                            }), n.once("close", function () {
                                r.emit("finish"), r.close()
                            })
                        };
                        n.document.body ? i() : a.attachEvent("load", i)
                    }
                    "production" !== t.env.NODE_ENV && (u = e("debug")("sockjs-client:info-iframe")), i(f, o), f.enabled = function () {
                        return l.enabled()
                    }, f.prototype.close = function () {
                        this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null
                    }, r.exports = f
                }).call(this, {
                    env: {}
                }, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./info-iframe-receiver": 10,
                "./transport/iframe": 22,
                "./utils/event": 46,
                debug: 55,
                events: 3,
                inherits: 57,
                json3: 58
            }],
            12: [function (e, t, r) {
                (function (r) {
                    "use strict";
                    var n = e("events").EventEmitter,
                        o = e("inherits"),
                        i = e("./utils/url"),
                        s = e("./transport/sender/xdr"),
                        a = e("./transport/sender/xhr-cors"),
                        l = e("./transport/sender/xhr-local"),
                        c = e("./transport/sender/xhr-fake"),
                        u = e("./info-iframe"),
                        f = e("./info-ajax"),
                        p = function () {};

                    function h(e, t) {
                        p(e);
                        var r = this;
                        n.call(this), setTimeout(function () {
                            r.doXhr(e, t)
                        }, 0)
                    }
                    "production" !== r.env.NODE_ENV && (p = e("debug")("sockjs-client:info-receiver")), o(h, n), h._getReceiver = function (e, t, r) {
                        return r.sameOrigin ? new f(t, l) : a.enabled ? new f(t, a) : s.enabled && r.sameScheme ? new f(t, s) : u.enabled() ? new u(e, t) : new f(t, c)
                    }, h.prototype.doXhr = function (e, t) {
                        var r = this,
                            n = i.addPath(e, "/info");
                        p("doXhr", n), this.xo = h._getReceiver(e, n, t), this.timeoutRef = setTimeout(function () {
                            p("timeout"), r._cleanup(!1), r.emit("finish")
                        }, h.timeout), this.xo.once("finish", function (e, t) {
                            p("finish", e, t), r._cleanup(!0), r.emit("finish", e, t)
                        })
                    }, h.prototype._cleanup = function (e) {
                        p("_cleanup"), clearTimeout(this.timeoutRef), this.timeoutRef = null, !e && this.xo && this.xo.close(), this.xo = null
                    }, h.prototype.close = function () {
                        p("close"), this.removeAllListeners(), this._cleanup(!1)
                    }, h.timeout = 8e3, t.exports = h
                }).call(this, {
                    env: {}
                })
            }, {
                "./info-ajax": 9,
                "./info-iframe": 11,
                "./transport/sender/xdr": 34,
                "./transport/sender/xhr-cors": 35,
                "./transport/sender/xhr-fake": 36,
                "./transport/sender/xhr-local": 37,
                "./utils/url": 52,
                debug: 55,
                events: 3,
                inherits: 57
            }],
            13: [function (e, r, n) {
                (function (e) {
                    "use strict";
                    r.exports = e.location || {
                        origin: "http://localhost:80",
                        protocol: "http:",
                        host: "localhost",
                        port: 80,
                        href: "http://localhost/",
                        hash: ""
                    }
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            14: [function (e, r, n) {
                (function (t, n) {
                    "use strict";
                    e("./shims");
                    var o, i = e("url-parse"),
                        s = e("inherits"),
                        a = e("json3"),
                        l = e("./utils/random"),
                        c = e("./utils/escape"),
                        u = e("./utils/url"),
                        f = e("./utils/event"),
                        p = e("./utils/transport"),
                        h = e("./utils/object"),
                        d = e("./utils/browser"),
                        g = e("./utils/log"),
                        m = e("./event/event"),
                        v = e("./event/eventtarget"),
                        y = e("./location"),
                        b = e("./event/close"),
                        w = e("./event/trans-message"),
                        x = e("./info-receiver"),
                        C = function () {};

                    function E(e, t, r) {
                        if (!(this instanceof E)) return new E(e, t, r);
                        if (arguments.length < 1) throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
                        v.call(this), this.readyState = E.CONNECTING, this.extensions = "", this.protocol = "", (r = r || {}).protocols_whitelist && g.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = r.transports, this._transportOptions = r.transportOptions || {};
                        var n = r.sessionId || 8;
                        if ("function" == typeof n) this._generateSessionId = n;
                        else {
                            if ("number" != typeof n) throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");
                            this._generateSessionId = function () {
                                return l.string(n)
                            }
                        }
                        this._server = r.server || l.numberString(1e3);
                        var o = new i(e);
                        if (!o.host || !o.protocol) throw new SyntaxError("The URL '" + e + "' is invalid");
                        if (o.hash) throw new SyntaxError("The URL must not contain a fragment");
                        if ("http:" !== o.protocol && "https:" !== o.protocol) throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + o.protocol + "' is not allowed.");
                        var s = "https:" === o.protocol;
                        if ("https:" === y.protocol && !s) throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
                        t ? Array.isArray(t) || (t = [t]) : t = [];
                        var a = t.sort();
                        a.forEach(function (e, t) {
                            if (!e) throw new SyntaxError("The protocols entry '" + e + "' is invalid.");
                            if (t < a.length - 1 && e === a[t + 1]) throw new SyntaxError("The protocols entry '" + e + "' is duplicated.")
                        });
                        var c = u.getOrigin(y.href);
                        this._origin = c ? c.toLowerCase() : null, o.set("pathname", o.pathname.replace(/\/+$/, "")), this.url = o.href, C("using url", this.url), this._urlInfo = {
                            nullOrigin: !d.hasDomain(),
                            sameOrigin: u.isOriginEqual(this.url, y.href),
                            sameScheme: u.isSchemeEqual(this.url, y.href)
                        }, this._ir = new x(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this))
                    }

                    function _(e) {
                        return 1e3 === e || e >= 3e3 && e <= 4999
                    }
                    "production" !== t.env.NODE_ENV && (C = e("debug")("sockjs-client:main")), s(E, v), E.prototype.close = function (e, t) {
                        if (e && !_(e)) throw new Error("InvalidAccessError: Invalid code");
                        if (t && t.length > 123) throw new SyntaxError("reason argument has an invalid length");
                        this.readyState !== E.CLOSING && this.readyState !== E.CLOSED && this._close(e || 1e3, t || "Normal closure", !0)
                    }, E.prototype.send = function (e) {
                        if ("string" != typeof e && (e = "" + e), this.readyState === E.CONNECTING) throw new Error("InvalidStateError: The connection has not been established yet");
                        this.readyState === E.OPEN && this._transport.send(c.quote(e))
                    }, E.version = e("./version"), E.CONNECTING = 0, E.OPEN = 1, E.CLOSING = 2, E.CLOSED = 3, E.prototype._receiveInfo = function (e, t) {
                        if (C("_receiveInfo", t), this._ir = null, e) {
                            this._rto = this.countRTO(t), this._transUrl = e.base_url ? e.base_url : this.url, e = h.extend(e, this._urlInfo), C("info", e);
                            var r = o.filterToEnabled(this._transportsWhitelist, e);
                            this._transports = r.main, C(this._transports.length + " enabled transports"), this._connect()
                        } else this._close(1002, "Cannot connect to server")
                    }, E.prototype._connect = function () {
                        for (var e = this._transports.shift(); e; e = this._transports.shift()) {
                            if (C("attempt", e.transportName), e.needBody && (!n.document.body || void 0 !== n.document.readyState && "complete" !== n.document.readyState && "interactive" !== n.document.readyState)) return C("waiting for body"), this._transports.unshift(e), void f.attachEvent("load", this._connect.bind(this));
                            var t = this._rto * e.roundTrips || 5e3;
                            this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), t), C("using timeout", t);
                            var r = u.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()),
                                o = this._transportOptions[e.transportName];
                            C("transport url", r);
                            var i = new e(r, this._transUrl, o);
                            return i.on("message", this._transportMessage.bind(this)), i.once("close", this._transportClose.bind(this)), i.transportName = e.transportName, void(this._transport = i)
                        }
                        this._close(2e3, "All transports failed", !1)
                    }, E.prototype._transportTimeout = function () {
                        C("_transportTimeout"), this.readyState === E.CONNECTING && (this._transport && this._transport.close(), this._transportClose(2007, "Transport timed out"))
                    }, E.prototype._transportMessage = function (e) {
                        C("_transportMessage", e);
                        var t, r = this,
                            n = e.slice(0, 1),
                            o = e.slice(1);
                        switch (n) {
                            case "o":
                                return void this._open();
                            case "h":
                                return this.dispatchEvent(new m("heartbeat")), void C("heartbeat", this.transport)
                        }
                        if (o) try {
                            t = a.parse(o)
                        } catch (e) {
                            C("bad json", o)
                        }
                        if (void 0 !== t) switch (n) {
                            case "a":
                                Array.isArray(t) && t.forEach(function (e) {
                                    C("message", r.transport, e), r.dispatchEvent(new w(e))
                                });
                                break;
                            case "m":
                                C("message", this.transport, t), this.dispatchEvent(new w(t));
                                break;
                            case "c":
                                Array.isArray(t) && 2 === t.length && this._close(t[0], t[1], !0)
                        } else C("empty payload", o)
                    }, E.prototype._transportClose = function (e, t) {
                        C("_transportClose", this.transport, e, t), this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), _(e) || 2e3 === e || this.readyState !== E.CONNECTING ? this._close(e, t) : this._connect()
                    }, E.prototype._open = function () {
                        C("_open", this._transport.transportName, this.readyState), this.readyState === E.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = E.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new m("open")), C("connected", this.transport)) : this._close(1006, "Server lost session")
                    }, E.prototype._close = function (e, t, r) {
                        C("_close", this.transport, e, t, r, this.readyState);
                        var n = !1;
                        if (this._ir && (n = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === E.CLOSED) throw new Error("InvalidStateError: SockJS has already been closed");
                        this.readyState = E.CLOSING, setTimeout(function () {
                            this.readyState = E.CLOSED, n && this.dispatchEvent(new m("error"));
                            var o = new b("close");
                            o.wasClean = r || !1, o.code = e || 1e3, o.reason = t, this.dispatchEvent(o), this.onmessage = this.onclose = this.onerror = null, C("disconnected")
                        }.bind(this), 0)
                    }, E.prototype.countRTO = function (e) {
                        return e > 100 ? 4 * e : 300 + e
                    }, r.exports = function (t) {
                        return o = p(t), e("./iframe-bootstrap")(E, t), E
                    }
                }).call(this, {
                    env: {}
                }, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./event/close": 2,
                "./event/event": 4,
                "./event/eventtarget": 5,
                "./event/trans-message": 6,
                "./iframe-bootstrap": 8,
                "./info-receiver": 12,
                "./location": 13,
                "./shims": 15,
                "./utils/browser": 44,
                "./utils/escape": 45,
                "./utils/event": 46,
                "./utils/log": 48,
                "./utils/object": 49,
                "./utils/random": 50,
                "./utils/transport": 51,
                "./utils/url": 52,
                "./version": 53,
                debug: 55,
                inherits: 57,
                json3: 58,
                "url-parse": 61
            }],
            15: [function (e, t, r) {
                "use strict";
                var n, o = Array.prototype,
                    i = Object.prototype,
                    s = Function.prototype,
                    a = String.prototype,
                    l = o.slice,
                    c = i.toString,
                    u = function (e) {
                        return "[object Function]" === i.toString.call(e)
                    },
                    f = function (e) {
                        return "[object String]" === c.call(e)
                    },
                    p = Object.defineProperty && function () {
                        try {
                            return Object.defineProperty({}, "x", {}), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                n = p ? function (e, t, r, n) {
                    !n && t in e || Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0,
                        value: r
                    })
                } : function (e, t, r, n) {
                    !n && t in e || (e[t] = r)
                };
                var h = function (e, t, r) {
                        for (var o in t) i.hasOwnProperty.call(t, o) && n(e, o, t[o], r)
                    },
                    d = function (e) {
                        if (null == e) throw new TypeError("can't convert " + e + " to object");
                        return Object(e)
                    };

                function g() {}
                h(s, {
                    bind: function (e) {
                        var t = this;
                        if (!u(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
                        for (var r = l.call(arguments, 1), n = Math.max(0, t.length - r.length), o = [], i = 0; i < n; i++) o.push("$" + i);
                        var s = Function("binder", "return function (" + o.join(",") + "){ return binder.apply(this, arguments); }")(function () {
                            if (this instanceof s) {
                                var n = t.apply(this, r.concat(l.call(arguments)));
                                return Object(n) === n ? n : this
                            }
                            return t.apply(e, r.concat(l.call(arguments)))
                        });
                        return t.prototype && (g.prototype = t.prototype, s.prototype = new g, g.prototype = null), s
                    }
                }), h(Array, {
                    isArray: function (e) {
                        return "[object Array]" === c.call(e)
                    }
                });
                var m, v, y, b = Object("a"),
                    w = "a" !== b[0] || !(0 in b);
                h(o, {
                    forEach: function (e) {
                        var t = d(this),
                            r = w && f(this) ? this.split("") : t,
                            n = arguments[1],
                            o = -1,
                            i = r.length >>> 0;
                        if (!u(e)) throw new TypeError;
                        for (; ++o < i;) o in r && e.call(n, r[o], o, t)
                    }
                }, (m = o.forEach, v = !0, y = !0, m && (m.call("foo", function (e, t, r) {
                    "object" != typeof r && (v = !1)
                }), m.call([1], function () {
                    y = "string" == typeof this
                }, "x")), !(m && v && y)));
                var x = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
                h(o, {
                    indexOf: function (e) {
                        var t = w && f(this) ? this.split("") : d(this),
                            r = t.length >>> 0;
                        if (!r) return -1;
                        var n, o, i = 0;
                        for (arguments.length > 1 && (n = arguments[1], o = void 0, (o = +n) != o ? o = 0 : 0 !== o && o !== 1 / 0 && o !== -1 / 0 && (o = (o > 0 || -1) * Math.floor(Math.abs(o))), i = o), i = i >= 0 ? i : Math.max(0, r + i); i < r; i++)
                            if (i in t && t[i] === e) return i;
                        return -1
                    }
                }, x);
                var C, E = a.split;
                2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? (C = void 0 === /()??/.exec("")[1], a.split = function (e, t) {
                    var r = this;
                    if (void 0 === e && 0 === t) return [];
                    if ("[object RegExp]" !== c.call(e)) return E.call(this, e, t);
                    var n, i, s, a, l = [],
                        u = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : ""),
                        f = 0;
                    for (e = new RegExp(e.source, u + "g"), r += "", C || (n = new RegExp("^" + e.source + "$(?!\\s)", u)), t = void 0 === t ? -1 >>> 0 : t >>> 0;
                        (i = e.exec(r)) && !((s = i.index + i[0].length) > f && (l.push(r.slice(f, i.index)), !C && i.length > 1 && i[0].replace(n, function () {
                            for (var e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (i[e] = void 0)
                        }), i.length > 1 && i.index < r.length && o.push.apply(l, i.slice(1)), a = i[0].length, f = s, l.length >= t));) e.lastIndex === i.index && e.lastIndex++;
                    return f === r.length ? !a && e.test("") || l.push("") : l.push(r.slice(f)), l.length > t ? l.slice(0, t) : l
                }) : "0".split(void 0, 0).length && (a.split = function (e, t) {
                    return void 0 === e && 0 === t ? [] : E.call(this, e, t)
                });
                var _ = a.substr,
                    S = "".substr && "b" !== "0b".substr(-1);
                h(a, {
                    substr: function (e, t) {
                        return _.call(this, e < 0 && (e = this.length + e) < 0 ? 0 : e, t)
                    }
                }, S)
            }, {}],
            16: [function (e, t, r) {
                "use strict";
                t.exports = [e("./transport/websocket"), e("./transport/xhr-streaming"), e("./transport/xdr-streaming"), e("./transport/eventsource"), e("./transport/lib/iframe-wrap")(e("./transport/eventsource")), e("./transport/htmlfile"), e("./transport/lib/iframe-wrap")(e("./transport/htmlfile")), e("./transport/xhr-polling"), e("./transport/xdr-polling"), e("./transport/lib/iframe-wrap")(e("./transport/xhr-polling")), e("./transport/jsonp-polling")]
            }, {
                "./transport/eventsource": 20,
                "./transport/htmlfile": 21,
                "./transport/jsonp-polling": 23,
                "./transport/lib/iframe-wrap": 26,
                "./transport/websocket": 38,
                "./transport/xdr-polling": 39,
                "./transport/xdr-streaming": 40,
                "./transport/xhr-polling": 41,
                "./transport/xhr-streaming": 42
            }],
            17: [function (e, r, n) {
                (function (t, n) {
                    "use strict";
                    var o = e("events").EventEmitter,
                        i = e("inherits"),
                        s = e("../../utils/event"),
                        a = e("../../utils/url"),
                        l = n.XMLHttpRequest,
                        c = function () {};

                    function u(e, t, r, n) {
                        c(e, t);
                        var i = this;
                        o.call(this), setTimeout(function () {
                            i._start(e, t, r, n)
                        }, 0)
                    }
                    "production" !== t.env.NODE_ENV && (c = e("debug")("sockjs-client:browser:xhr")), i(u, o), u.prototype._start = function (e, t, r, n) {
                        var o = this;
                        try {
                            this.xhr = new l
                        } catch (e) {}
                        if (!this.xhr) return c("no xhr"), this.emit("finish", 0, "no xhr support"), void this._cleanup();
                        t = a.addQuery(t, "t=" + +new Date), this.unloadRef = s.unloadAdd(function () {
                            c("unload cleanup"), o._cleanup(!0)
                        });
                        try {
                            this.xhr.open(e, t, !0), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function () {
                                c("xhr timeout"), o.emit("finish", 0, ""), o._cleanup(!1)
                            })
                        } catch (e) {
                            return c("exception", e), this.emit("finish", 0, ""), void this._cleanup(!1)
                        }
                        if (n && n.noCredentials || !u.supportsCORS || (c("withCredentials"), this.xhr.withCredentials = !0), n && n.headers)
                            for (var i in n.headers) this.xhr.setRequestHeader(i, n.headers[i]);
                        this.xhr.onreadystatechange = function () {
                            if (o.xhr) {
                                var e, t, r = o.xhr;
                                switch (c("readyState", r.readyState), r.readyState) {
                                    case 3:
                                        try {
                                            t = r.status, e = r.responseText
                                        } catch (e) {}
                                        c("status", t), 1223 === t && (t = 204), 200 === t && e && e.length > 0 && (c("chunk"), o.emit("chunk", t, e));
                                        break;
                                    case 4:
                                        t = r.status, c("status", t), 1223 === t && (t = 204), 12005 !== t && 12029 !== t || (t = 0), c("finish", t, r.responseText), o.emit("finish", t, r.responseText), o._cleanup(!1)
                                }
                            }
                        };
                        try {
                            o.xhr.send(r)
                        } catch (e) {
                            o.emit("finish", 0, ""), o._cleanup(!1)
                        }
                    }, u.prototype._cleanup = function (e) {
                        if (c("cleanup"), this.xhr) {
                            if (this.removeAllListeners(), s.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function () {}, this.xhr.ontimeout && (this.xhr.ontimeout = null), e) try {
                                this.xhr.abort()
                            } catch (e) {}
                            this.unloadRef = this.xhr = null
                        }
                    }, u.prototype.close = function () {
                        c("close"), this._cleanup(!0)
                    }, u.enabled = !!l;
                    var f = ["Active"].concat("Object").join("X");
                    !u.enabled && f in n && (c("overriding xmlhttprequest"), l = function () {
                        try {
                            return new n[f]("Microsoft.XMLHTTP")
                        } catch (e) {
                            return null
                        }
                    }, u.enabled = !!new l);
                    var p = !1;
                    try {
                        p = "withCredentials" in new l
                    } catch (e) {}
                    u.supportsCORS = p, r.exports = u
                }).call(this, {
                    env: {}
                }, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../../utils/event": 46,
                "../../utils/url": 52,
                debug: 55,
                events: 3,
                inherits: 57
            }],
            18: [function (e, r, n) {
                (function (e) {
                    r.exports = e.EventSource
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            19: [function (e, r, n) {
                (function (e) {
                    "use strict";
                    var t = e.WebSocket || e.MozWebSocket;
                    r.exports = t ? function (e) {
                        return new t(e)
                    } : void 0
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            20: [function (e, t, r) {
                "use strict";
                var n = e("inherits"),
                    o = e("./lib/ajax-based"),
                    i = e("./receiver/eventsource"),
                    s = e("./sender/xhr-cors"),
                    a = e("eventsource");

                function l(e) {
                    if (!l.enabled()) throw new Error("Transport created when disabled");
                    o.call(this, e, "/eventsource", i, s)
                }
                n(l, o), l.enabled = function () {
                    return !!a
                }, l.transportName = "eventsource", l.roundTrips = 2, t.exports = l
            }, {
                "./lib/ajax-based": 24,
                "./receiver/eventsource": 29,
                "./sender/xhr-cors": 35,
                eventsource: 18,
                inherits: 57
            }],
            21: [function (e, t, r) {
                "use strict";
                var n = e("inherits"),
                    o = e("./receiver/htmlfile"),
                    i = e("./sender/xhr-local"),
                    s = e("./lib/ajax-based");

                function a(e) {
                    if (!o.enabled) throw new Error("Transport created when disabled");
                    s.call(this, e, "/htmlfile", o, i)
                }
                n(a, s), a.enabled = function (e) {
                    return o.enabled && e.sameOrigin
                }, a.transportName = "htmlfile", a.roundTrips = 2, t.exports = a
            }, {
                "./lib/ajax-based": 24,
                "./receiver/htmlfile": 30,
                "./sender/xhr-local": 37,
                inherits: 57
            }],
            22: [function (e, t, r) {
                (function (r) {
                    "use strict";
                    var n = e("inherits"),
                        o = e("json3"),
                        i = e("events").EventEmitter,
                        s = e("../version"),
                        a = e("../utils/url"),
                        l = e("../utils/iframe"),
                        c = e("../utils/event"),
                        u = e("../utils/random"),
                        f = function () {};

                    function p(e, t, r) {
                        if (!p.enabled()) throw new Error("Transport created when disabled");
                        i.call(this);
                        var n = this;
                        this.origin = a.getOrigin(r), this.baseUrl = r, this.transUrl = t, this.transport = e, this.windowId = u.string(8);
                        var o = a.addPath(r, "/iframe.html") + "#" + this.windowId;
                        f(e, t, o), this.iframeObj = l.createIframe(o, function (e) {
                            f("err callback"), n.emit("close", 1006, "Unable to load an iframe (" + e + ")"), n.close()
                        }), this.onmessageCallback = this._message.bind(this), c.attachEvent("message", this.onmessageCallback)
                    }
                    "production" !== r.env.NODE_ENV && (f = e("debug")("sockjs-client:transport:iframe")), n(p, i), p.prototype.close = function () {
                        if (f("close"), this.removeAllListeners(), this.iframeObj) {
                            c.detachEvent("message", this.onmessageCallback);
                            try {
                                this.postMessage("c")
                            } catch (e) {}
                            this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null
                        }
                    }, p.prototype._message = function (e) {
                        if (f("message", e.data), a.isOriginEqual(e.origin, this.origin)) {
                            var t;
                            try {
                                t = o.parse(e.data)
                            } catch (t) {
                                return void f("bad json", e.data)
                            }
                            if (t.windowId === this.windowId) switch (t.type) {
                                case "s":
                                    this.iframeObj.loaded(), this.postMessage("s", o.stringify([s, this.transport, this.transUrl, this.baseUrl]));
                                    break;
                                case "t":
                                    this.emit("message", t.data);
                                    break;
                                case "c":
                                    var r;
                                    try {
                                        r = o.parse(t.data)
                                    } catch (e) {
                                        return void f("bad json", t.data)
                                    }
                                    this.emit("close", r[0], r[1]), this.close()
                            } else f("mismatched window id", t.windowId, this.windowId)
                        } else f("not same origin", e.origin, this.origin)
                    }, p.prototype.postMessage = function (e, t) {
                        f("postMessage", e, t), this.iframeObj.post(o.stringify({
                            windowId: this.windowId,
                            type: e,
                            data: t || ""
                        }), this.origin)
                    }, p.prototype.send = function (e) {
                        f("send", e), this.postMessage("m", e)
                    }, p.enabled = function () {
                        return l.iframeEnabled
                    }, p.transportName = "iframe", p.roundTrips = 2, t.exports = p
                }).call(this, {
                    env: {}
                })
            }, {
                "../utils/event": 46,
                "../utils/iframe": 47,
                "../utils/random": 50,
                "../utils/url": 52,
                "../version": 53,
                debug: 55,
                events: 3,
                inherits: 57,
                json3: 58
            }],
            23: [function (e, r, n) {
                (function (t) {
                    "use strict";
                    var n = e("inherits"),
                        o = e("./lib/sender-receiver"),
                        i = e("./receiver/jsonp"),
                        s = e("./sender/jsonp");

                    function a(e) {
                        if (!a.enabled()) throw new Error("Transport created when disabled");
                        o.call(this, e, "/jsonp", s, i)
                    }
                    n(a, o), a.enabled = function () {
                        return !!t.document
                    }, a.transportName = "jsonp-polling", a.roundTrips = 1, a.needBody = !0, r.exports = a
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./lib/sender-receiver": 28,
                "./receiver/jsonp": 31,
                "./sender/jsonp": 33,
                inherits: 57
            }],
            24: [function (e, t, r) {
                (function (r) {
                    "use strict";
                    var n = e("inherits"),
                        o = e("../../utils/url"),
                        i = e("./sender-receiver"),
                        s = function () {};

                    function a(e, t, r, n) {
                        i.call(this, e, t, function (e) {
                            return function (t, r, n) {
                                s("create ajax sender", t, r);
                                var i = {};
                                "string" == typeof r && (i.headers = {
                                    "Content-type": "text/plain"
                                });
                                var a = o.addPath(t, "/xhr_send"),
                                    l = new e("POST", a, r, i);
                                return l.once("finish", function (e) {
                                        if (s("finish", e), l = null, 200 !== e && 204 !== e) return n(new Error("http status " + e));
                                        n()
                                    }),
                                    function () {
                                        s("abort"), l.close(), l = null;
                                        var e = new Error("Aborted");
                                        e.code = 1e3, n(e)
                                    }
                            }
                        }(n), r, n)
                    }
                    "production" !== r.env.NODE_ENV && (s = e("debug")("sockjs-client:ajax-based")), n(a, i), t.exports = a
                }).call(this, {
                    env: {}
                })
            }, {
                "../../utils/url": 52,
                "./sender-receiver": 28,
                debug: 55,
                inherits: 57
            }],
            25: [function (e, t, r) {
                (function (r) {
                    "use strict";
                    var n = e("inherits"),
                        o = e("events").EventEmitter,
                        i = function () {};

                    function s(e, t) {
                        i(e), o.call(this), this.sendBuffer = [], this.sender = t, this.url = e
                    }
                    "production" !== r.env.NODE_ENV && (i = e("debug")("sockjs-client:buffered-sender")), n(s, o), s.prototype.send = function (e) {
                        i("send", e), this.sendBuffer.push(e), this.sendStop || this.sendSchedule()
                    }, s.prototype.sendScheduleWait = function () {
                        i("sendScheduleWait");
                        var e, t = this;
                        this.sendStop = function () {
                            i("sendStop"), t.sendStop = null, clearTimeout(e)
                        }, e = setTimeout(function () {
                            i("timeout"), t.sendStop = null, t.sendSchedule()
                        }, 25)
                    }, s.prototype.sendSchedule = function () {
                        i("sendSchedule", this.sendBuffer.length);
                        var e = this;
                        if (this.sendBuffer.length > 0) {
                            var t = "[" + this.sendBuffer.join(",") + "]";
                            this.sendStop = this.sender(this.url, t, function (t) {
                                e.sendStop = null, t ? (i("error", t), e.emit("close", t.code || 1006, "Sending error: " + t), e.close()) : e.sendScheduleWait()
                            }), this.sendBuffer = []
                        }
                    }, s.prototype._cleanup = function () {
                        i("_cleanup"), this.removeAllListeners()
                    }, s.prototype.close = function () {
                        i("close"), this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null)
                    }, t.exports = s
                }).call(this, {
                    env: {}
                })
            }, {
                debug: 55,
                events: 3,
                inherits: 57
            }],
            26: [function (e, r, n) {
                (function (t) {
                    "use strict";
                    var n = e("inherits"),
                        o = e("../iframe"),
                        i = e("../../utils/object");
                    r.exports = function (e) {
                        function r(t, r) {
                            o.call(this, e.transportName, t, r)
                        }
                        return n(r, o), r.enabled = function (r, n) {
                            if (!t.document) return !1;
                            var s = i.extend({}, n);
                            return s.sameOrigin = !0, e.enabled(s) && o.enabled()
                        }, r.transportName = "iframe-" + e.transportName, r.needBody = !0, r.roundTrips = o.roundTrips + e.roundTrips - 1, r.facadeTransport = e, r
                    }
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../../utils/object": 49,
                "../iframe": 22,
                inherits: 57
            }],
            27: [function (e, t, r) {
                (function (r) {
                    "use strict";
                    var n = e("inherits"),
                        o = e("events").EventEmitter,
                        i = function () {};

                    function s(e, t, r) {
                        i(t), o.call(this), this.Receiver = e, this.receiveUrl = t, this.AjaxObject = r, this._scheduleReceiver()
                    }
                    "production" !== r.env.NODE_ENV && (i = e("debug")("sockjs-client:polling")), n(s, o), s.prototype._scheduleReceiver = function () {
                        i("_scheduleReceiver");
                        var e = this,
                            t = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
                        t.on("message", function (t) {
                            i("message", t), e.emit("message", t)
                        }), t.once("close", function (r, n) {
                            i("close", r, n, e.pollIsClosing), e.poll = t = null, e.pollIsClosing || ("network" === n ? e._scheduleReceiver() : (e.emit("close", r || 1006, n), e.removeAllListeners()))
                        })
                    }, s.prototype.abort = function () {
                        i("abort"), this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort()
                    }, t.exports = s
                }).call(this, {
                    env: {}
                })
            }, {
                debug: 55,
                events: 3,
                inherits: 57
            }],
            28: [function (e, t, r) {
                (function (r) {
                    "use strict";
                    var n = e("inherits"),
                        o = e("../../utils/url"),
                        i = e("./buffered-sender"),
                        s = e("./polling"),
                        a = function () {};

                    function l(e, t, r, n, l) {
                        var c = o.addPath(e, t);
                        a(c);
                        var u = this;
                        i.call(this, e, r), this.poll = new s(n, c, l), this.poll.on("message", function (e) {
                            a("poll message", e), u.emit("message", e)
                        }), this.poll.once("close", function (e, t) {
                            a("poll close", e, t), u.poll = null, u.emit("close", e, t), u.close()
                        })
                    }
                    "production" !== r.env.NODE_ENV && (a = e("debug")("sockjs-client:sender-receiver")), n(l, i), l.prototype.close = function () {
                        i.prototype.close.call(this), a("close"), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null)
                    }, t.exports = l
                }).call(this, {
                    env: {}
                })
            }, {
                "../../utils/url": 52,
                "./buffered-sender": 25,
                "./polling": 27,
                debug: 55,
                inherits: 57
            }],
            29: [function (e, t, r) {
                (function (r) {
                    "use strict";
                    var n = e("inherits"),
                        o = e("events").EventEmitter,
                        i = e("eventsource"),
                        s = function () {};

                    function a(e) {
                        s(e), o.call(this);
                        var t = this,
                            r = this.es = new i(e);
                        r.onmessage = function (e) {
                            s("message", e.data), t.emit("message", decodeURI(e.data))
                        }, r.onerror = function (e) {
                            s("error", r.readyState, e);
                            var n = 2 !== r.readyState ? "network" : "permanent";
                            t._cleanup(), t._close(n)
                        }
                    }
                    "production" !== r.env.NODE_ENV && (s = e("debug")("sockjs-client:receiver:eventsource")), n(a, o), a.prototype.abort = function () {
                        s("abort"), this._cleanup(), this._close("user")
                    }, a.prototype._cleanup = function () {
                        s("cleanup");
                        var e = this.es;
                        e && (e.onmessage = e.onerror = null, e.close(), this.es = null)
                    }, a.prototype._close = function (e) {
                        s("close", e);
                        var t = this;
                        setTimeout(function () {
                            t.emit("close", null, e), t.removeAllListeners()
                        }, 200)
                    }, t.exports = a
                }).call(this, {
                    env: {}
                })
            }, {
                debug: 55,
                events: 3,
                eventsource: 18,
                inherits: 57
            }],
            30: [function (e, r, n) {
                (function (t, n) {
                    "use strict";
                    var o = e("inherits"),
                        i = e("../../utils/iframe"),
                        s = e("../../utils/url"),
                        a = e("events").EventEmitter,
                        l = e("../../utils/random"),
                        c = function () {};

                    function u(e) {
                        c(e), a.call(this);
                        var t = this;
                        i.polluteGlobalNamespace(), this.id = "a" + l.string(6), e = s.addQuery(e, "c=" + decodeURIComponent(i.WPrefix + "." + this.id)), c("using htmlfile", u.htmlfileEnabled);
                        var r = u.htmlfileEnabled ? i.createHtmlfile : i.createIframe;
                        n[i.WPrefix][this.id] = {
                            start: function () {
                                c("start"), t.iframeObj.loaded()
                            },
                            message: function (e) {
                                c("message", e), t.emit("message", e)
                            },
                            stop: function () {
                                c("stop"), t._cleanup(), t._close("network")
                            }
                        }, this.iframeObj = r(e, function () {
                            c("callback"), t._cleanup(), t._close("permanent")
                        })
                    }
                    "production" !== t.env.NODE_ENV && (c = e("debug")("sockjs-client:receiver:htmlfile")), o(u, a), u.prototype.abort = function () {
                        c("abort"), this._cleanup(), this._close("user")
                    }, u.prototype._cleanup = function () {
                        c("_cleanup"), this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete n[i.WPrefix][this.id]
                    }, u.prototype._close = function (e) {
                        c("_close", e), this.emit("close", null, e), this.removeAllListeners()
                    }, u.htmlfileEnabled = !1;
                    var f = ["Active"].concat("Object").join("X");
                    if (f in n) try {
                        u.htmlfileEnabled = !!new n[f]("htmlfile")
                    } catch (e) {}
                    u.enabled = u.htmlfileEnabled || i.iframeEnabled, r.exports = u
                }).call(this, {
                    env: {}
                }, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../../utils/iframe": 47,
                "../../utils/random": 50,
                "../../utils/url": 52,
                debug: 55,
                events: 3,
                inherits: 57
            }],
            31: [function (e, r, n) {
                (function (t, n) {
                    "use strict";
                    var o = e("../../utils/iframe"),
                        i = e("../../utils/random"),
                        s = e("../../utils/browser"),
                        a = e("../../utils/url"),
                        l = e("inherits"),
                        c = e("events").EventEmitter,
                        u = function () {};

                    function f(e) {
                        u(e);
                        var t = this;
                        c.call(this), o.polluteGlobalNamespace(), this.id = "a" + i.string(6);
                        var r = a.addQuery(e, "c=" + encodeURIComponent(o.WPrefix + "." + this.id));
                        n[o.WPrefix][this.id] = this._callback.bind(this), this._createScript(r), this.timeoutId = setTimeout(function () {
                            u("timeout"), t._abort(new Error("JSONP script loaded abnormally (timeout)"))
                        }, f.timeout)
                    }
                    "production" !== t.env.NODE_ENV && (u = e("debug")("sockjs-client:receiver:jsonp")), l(f, c), f.prototype.abort = function () {
                        if (u("abort"), n[o.WPrefix][this.id]) {
                            var e = new Error("JSONP user aborted read");
                            e.code = 1e3, this._abort(e)
                        }
                    }, f.timeout = 35e3, f.scriptErrorTimeout = 1e3, f.prototype._callback = function (e) {
                        u("_callback", e), this._cleanup(), this.aborting || (e && (u("message", e), this.emit("message", e)), this.emit("close", null, "network"), this.removeAllListeners())
                    }, f.prototype._abort = function (e) {
                        u("_abort", e), this._cleanup(), this.aborting = !0, this.emit("close", e.code, e.message), this.removeAllListeners()
                    }, f.prototype._cleanup = function () {
                        if (u("_cleanup"), clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
                            var e = this.script;
                            e.parentNode.removeChild(e), e.onreadystatechange = e.onerror = e.onload = e.onclick = null, this.script = null
                        }
                        delete n[o.WPrefix][this.id]
                    }, f.prototype._scriptError = function () {
                        u("_scriptError");
                        var e = this;
                        this.errorTimer || (this.errorTimer = setTimeout(function () {
                            e.loadedOkay || e._abort(new Error("JSONP script loaded abnormally (onerror)"))
                        }, f.scriptErrorTimeout))
                    }, f.prototype._createScript = function (e) {
                        u("_createScript", e);
                        var t, r = this,
                            o = this.script = n.document.createElement("script");
                        if (o.id = "a" + i.string(8), o.src = e, o.type = "text/javascript", o.charset = "UTF-8", o.onerror = this._scriptError.bind(this), o.onload = function () {
                                u("onload"), r._abort(new Error("JSONP script loaded abnormally (onload)"))
                            }, o.onreadystatechange = function () {
                                if (u("onreadystatechange", o.readyState), /loaded|closed/.test(o.readyState)) {
                                    if (o && o.htmlFor && o.onclick) {
                                        r.loadedOkay = !0;
                                        try {
                                            o.onclick()
                                        } catch (e) {}
                                    }
                                    o && r._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"))
                                }
                            }, void 0 === o.async && n.document.attachEvent)
                            if (s.isOpera())(t = this.script2 = n.document.createElement("script")).text = "try{var a = document.getElementById('" + o.id + "'); if(a)a.onerror();}catch(x){};", o.async = t.async = !1;
                            else {
                                try {
                                    o.htmlFor = o.id, o.event = "onclick"
                                } catch (e) {}
                                o.async = !0
                            } void 0 !== o.async && (o.async = !0);
                        var a = n.document.getElementsByTagName("head")[0];
                        a.insertBefore(o, a.firstChild), t && a.insertBefore(t, a.firstChild)
                    }, r.exports = f
                }).call(this, {
                    env: {}
                }, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../../utils/browser": 44,
                "../../utils/iframe": 47,
                "../../utils/random": 50,
                "../../utils/url": 52,
                debug: 55,
                events: 3,
                inherits: 57
            }],
            32: [function (e, t, r) {
                (function (r) {
                    "use strict";
                    var n = e("inherits"),
                        o = e("events").EventEmitter,
                        i = function () {};

                    function s(e, t) {
                        i(e), o.call(this);
                        var r = this;
                        this.bufferPosition = 0, this.xo = new t("POST", e, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", function (e, t) {
                            i("finish", e, t), r._chunkHandler(e, t), r.xo = null;
                            var n = 200 === e ? "network" : "permanent";
                            i("close", n), r.emit("close", null, n), r._cleanup()
                        })
                    }
                    "production" !== r.env.NODE_ENV && (i = e("debug")("sockjs-client:receiver:xhr")), n(s, o), s.prototype._chunkHandler = function (e, t) {
                        if (i("_chunkHandler", e), 200 === e && t)
                            for (var r = -1;; this.bufferPosition += r + 1) {
                                var n = t.slice(this.bufferPosition);
                                if (-1 === (r = n.indexOf("\n"))) break;
                                var o = n.slice(0, r);
                                o && (i("message", o), this.emit("message", o))
                            }
                    }, s.prototype._cleanup = function () {
                        i("_cleanup"), this.removeAllListeners()
                    }, s.prototype.abort = function () {
                        i("abort"), this.xo && (this.xo.close(), i("close"), this.emit("close", null, "user"), this.xo = null), this._cleanup()
                    }, t.exports = s
                }).call(this, {
                    env: {}
                })
            }, {
                debug: 55,
                events: 3,
                inherits: 57
            }],
            33: [function (e, r, n) {
                (function (t, n) {
                    "use strict";
                    var o, i, s = e("../../utils/random"),
                        a = e("../../utils/url"),
                        l = function () {};
                    "production" !== t.env.NODE_ENV && (l = e("debug")("sockjs-client:sender:jsonp")), r.exports = function (e, t, r) {
                        l(e, t), o || (l("createForm"), (o = n.document.createElement("form")).style.display = "none", o.style.position = "absolute", o.method = "POST", o.enctype = "application/x-www-form-urlencoded", o.acceptCharset = "UTF-8", (i = n.document.createElement("textarea")).name = "d", o.appendChild(i), n.document.body.appendChild(o));
                        var c = "a" + s.string(8);
                        o.target = c, o.action = a.addQuery(a.addPath(e, "/jsonp_send"), "i=" + c);
                        var u = function (e) {
                            l("createIframe", e);
                            try {
                                return n.document.createElement('<iframe name="' + e + '">')
                            } catch (r) {
                                var t = n.document.createElement("iframe");
                                return t.name = e, t
                            }
                        }(c);
                        u.id = c, u.style.display = "none", o.appendChild(u);
                        try {
                            i.value = t
                        } catch (e) {}
                        o.submit();
                        var f = function (e) {
                            l("completed", c, e), u.onerror && (u.onreadystatechange = u.onerror = u.onload = null, setTimeout(function () {
                                l("cleaning up", c), u.parentNode.removeChild(u), u = null
                            }, 500), i.value = "", r(e))
                        };
                        return u.onerror = function () {
                                l("onerror", c), f()
                            }, u.onload = function () {
                                l("onload", c), f()
                            }, u.onreadystatechange = function (e) {
                                l("onreadystatechange", c, u.readyState, e), "complete" === u.readyState && f()
                            },
                            function () {
                                l("aborted", c), f(new Error("Aborted"))
                            }
                    }
                }).call(this, {
                    env: {}
                }, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../../utils/random": 50,
                "../../utils/url": 52,
                debug: 55
            }],
            34: [function (e, r, n) {
                (function (t, n) {
                    "use strict";
                    var o = e("events").EventEmitter,
                        i = e("inherits"),
                        s = e("../../utils/event"),
                        a = e("../../utils/browser"),
                        l = e("../../utils/url"),
                        c = function () {};

                    function u(e, t, r) {
                        c(e, t);
                        var n = this;
                        o.call(this), setTimeout(function () {
                            n._start(e, t, r)
                        }, 0)
                    }
                    "production" !== t.env.NODE_ENV && (c = e("debug")("sockjs-client:sender:xdr")), i(u, o), u.prototype._start = function (e, t, r) {
                        c("_start");
                        var o = this,
                            i = new n.XDomainRequest;
                        t = l.addQuery(t, "t=" + +new Date), i.onerror = function () {
                            c("onerror"), o._error()
                        }, i.ontimeout = function () {
                            c("ontimeout"), o._error()
                        }, i.onprogress = function () {
                            c("progress", i.responseText), o.emit("chunk", 200, i.responseText)
                        }, i.onload = function () {
                            c("load"), o.emit("finish", 200, i.responseText), o._cleanup(!1)
                        }, this.xdr = i, this.unloadRef = s.unloadAdd(function () {
                            o._cleanup(!0)
                        });
                        try {
                            this.xdr.open(e, t), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(r)
                        } catch (e) {
                            this._error()
                        }
                    }, u.prototype._error = function () {
                        this.emit("finish", 0, ""), this._cleanup(!1)
                    }, u.prototype._cleanup = function (e) {
                        if (c("cleanup", e), this.xdr) {
                            if (this.removeAllListeners(), s.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, e) try {
                                this.xdr.abort()
                            } catch (e) {}
                            this.unloadRef = this.xdr = null
                        }
                    }, u.prototype.close = function () {
                        c("close"), this._cleanup(!0)
                    }, u.enabled = !(!n.XDomainRequest || !a.hasDomain()), r.exports = u
                }).call(this, {
                    env: {}
                }, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../../utils/browser": 44,
                "../../utils/event": 46,
                "../../utils/url": 52,
                debug: 55,
                events: 3,
                inherits: 57
            }],
            35: [function (e, t, r) {
                "use strict";
                var n = e("inherits"),
                    o = e("../driver/xhr");

                function i(e, t, r, n) {
                    o.call(this, e, t, r, n)
                }
                n(i, o), i.enabled = o.enabled && o.supportsCORS, t.exports = i
            }, {
                "../driver/xhr": 17,
                inherits: 57
            }],
            36: [function (e, t, r) {
                "use strict";
                var n = e("events").EventEmitter,
                    o = e("inherits");

                function i() {
                    var e = this;
                    n.call(this), this.to = setTimeout(function () {
                        e.emit("finish", 200, "{}")
                    }, i.timeout)
                }
                o(i, n), i.prototype.close = function () {
                    clearTimeout(this.to)
                }, i.timeout = 2e3, t.exports = i
            }, {
                events: 3,
                inherits: 57
            }],
            37: [function (e, t, r) {
                "use strict";
                var n = e("inherits"),
                    o = e("../driver/xhr");

                function i(e, t, r) {
                    o.call(this, e, t, r, {
                        noCredentials: !0
                    })
                }
                n(i, o), i.enabled = o.enabled, t.exports = i
            }, {
                "../driver/xhr": 17,
                inherits: 57
            }],
            38: [function (e, t, r) {
                (function (r) {
                    "use strict";
                    var n = e("../utils/event"),
                        o = e("../utils/url"),
                        i = e("inherits"),
                        s = e("events").EventEmitter,
                        a = e("./driver/websocket"),
                        l = function () {};

                    function c(e, t, r) {
                        if (!c.enabled()) throw new Error("Transport created when disabled");
                        s.call(this), l("constructor", e);
                        var i = this,
                            u = o.addPath(e, "/websocket");
                        u = "https" === u.slice(0, 5) ? "wss" + u.slice(5) : "ws" + u.slice(4), this.url = u, this.ws = new a(this.url, [], r), this.ws.onmessage = function (e) {
                            l("message event", e.data), i.emit("message", e.data)
                        }, this.unloadRef = n.unloadAdd(function () {
                            l("unload"), i.ws.close()
                        }), this.ws.onclose = function (e) {
                            l("close event", e.code, e.reason), i.emit("close", e.code, e.reason), i._cleanup()
                        }, this.ws.onerror = function (e) {
                            l("error event", e), i.emit("close", 1006, "WebSocket connection broken"), i._cleanup()
                        }
                    }
                    "production" !== r.env.NODE_ENV && (l = e("debug")("sockjs-client:websocket")), i(c, s), c.prototype.send = function (e) {
                        var t = "[" + e + "]";
                        l("send", t), this.ws.send(t)
                    }, c.prototype.close = function () {
                        l("close");
                        var e = this.ws;
                        this._cleanup(), e && e.close()
                    }, c.prototype._cleanup = function () {
                        l("_cleanup");
                        var e = this.ws;
                        e && (e.onmessage = e.onclose = e.onerror = null), n.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners()
                    }, c.enabled = function () {
                        return l("enabled"), !!a
                    }, c.transportName = "websocket", c.roundTrips = 2, t.exports = c
                }).call(this, {
                    env: {}
                })
            }, {
                "../utils/event": 46,
                "../utils/url": 52,
                "./driver/websocket": 19,
                debug: 55,
                events: 3,
                inherits: 57
            }],
            39: [function (e, t, r) {
                "use strict";
                var n = e("inherits"),
                    o = e("./lib/ajax-based"),
                    i = e("./xdr-streaming"),
                    s = e("./receiver/xhr"),
                    a = e("./sender/xdr");

                function l(e) {
                    if (!a.enabled) throw new Error("Transport created when disabled");
                    o.call(this, e, "/xhr", s, a)
                }
                n(l, o), l.enabled = i.enabled, l.transportName = "xdr-polling", l.roundTrips = 2, t.exports = l
            }, {
                "./lib/ajax-based": 24,
                "./receiver/xhr": 32,
                "./sender/xdr": 34,
                "./xdr-streaming": 40,
                inherits: 57
            }],
            40: [function (e, t, r) {
                "use strict";
                var n = e("inherits"),
                    o = e("./lib/ajax-based"),
                    i = e("./receiver/xhr"),
                    s = e("./sender/xdr");

                function a(e) {
                    if (!s.enabled) throw new Error("Transport created when disabled");
                    o.call(this, e, "/xhr_streaming", i, s)
                }
                n(a, o), a.enabled = function (e) {
                    return !e.cookie_needed && !e.nullOrigin && s.enabled && e.sameScheme
                }, a.transportName = "xdr-streaming", a.roundTrips = 2, t.exports = a
            }, {
                "./lib/ajax-based": 24,
                "./receiver/xhr": 32,
                "./sender/xdr": 34,
                inherits: 57
            }],
            41: [function (e, t, r) {
                "use strict";
                var n = e("inherits"),
                    o = e("./lib/ajax-based"),
                    i = e("./receiver/xhr"),
                    s = e("./sender/xhr-cors"),
                    a = e("./sender/xhr-local");

                function l(e) {
                    if (!a.enabled && !s.enabled) throw new Error("Transport created when disabled");
                    o.call(this, e, "/xhr", i, s)
                }
                n(l, o), l.enabled = function (e) {
                    return !e.nullOrigin && (!(!a.enabled || !e.sameOrigin) || s.enabled)
                }, l.transportName = "xhr-polling", l.roundTrips = 2, t.exports = l
            }, {
                "./lib/ajax-based": 24,
                "./receiver/xhr": 32,
                "./sender/xhr-cors": 35,
                "./sender/xhr-local": 37,
                inherits: 57
            }],
            42: [function (e, r, n) {
                (function (t) {
                    "use strict";
                    var n = e("inherits"),
                        o = e("./lib/ajax-based"),
                        i = e("./receiver/xhr"),
                        s = e("./sender/xhr-cors"),
                        a = e("./sender/xhr-local"),
                        l = e("../utils/browser");

                    function c(e) {
                        if (!a.enabled && !s.enabled) throw new Error("Transport created when disabled");
                        o.call(this, e, "/xhr_streaming", i, s)
                    }
                    n(c, o), c.enabled = function (e) {
                        return !e.nullOrigin && !l.isOpera() && s.enabled
                    }, c.transportName = "xhr-streaming", c.roundTrips = 2, c.needBody = !!t.document, r.exports = c
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../utils/browser": 44,
                "./lib/ajax-based": 24,
                "./receiver/xhr": 32,
                "./sender/xhr-cors": 35,
                "./sender/xhr-local": 37,
                inherits: 57
            }],
            43: [function (e, r, n) {
                (function (e) {
                    "use strict";
                    e.crypto && e.crypto.getRandomValues ? r.exports.randomBytes = function (t) {
                        var r = new Uint8Array(t);
                        return e.crypto.getRandomValues(r), r
                    } : r.exports.randomBytes = function (e) {
                        for (var t = new Array(e), r = 0; r < e; r++) t[r] = Math.floor(256 * Math.random());
                        return t
                    }
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            44: [function (e, r, n) {
                (function (e) {
                    "use strict";
                    r.exports = {
                        isOpera: function () {
                            return e.navigator && /opera/i.test(e.navigator.userAgent)
                        },
                        isKonqueror: function () {
                            return e.navigator && /konqueror/i.test(e.navigator.userAgent)
                        },
                        hasDomain: function () {
                            if (!e.document) return !0;
                            try {
                                return !!e.document.domain
                            } catch (e) {
                                return !1
                            }
                        }
                    }
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            45: [function (e, t, r) {
                "use strict";
                var n, o = e("json3"),
                    i = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g;
                t.exports = {
                    quote: function (e) {
                        var t = o.stringify(e);
                        return i.lastIndex = 0, i.test(t) ? (n || (n = function (e) {
                            var t, r = {},
                                n = [];
                            for (t = 0; t < 65536; t++) n.push(String.fromCharCode(t));
                            return e.lastIndex = 0, n.join("").replace(e, function (e) {
                                return r[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), ""
                            }), e.lastIndex = 0, r
                        }(i)), t.replace(i, function (e) {
                            return n[e]
                        })) : t
                    }
                }
            }, {
                json3: 58
            }],
            46: [function (e, r, n) {
                (function (t) {
                    "use strict";
                    var n = e("./random"),
                        o = {},
                        i = !1,
                        s = t.chrome && t.chrome.app && t.chrome.app.runtime;
                    r.exports = {
                        attachEvent: function (e, r) {
                            void 0 !== t.addEventListener ? t.addEventListener(e, r, !1) : t.document && t.attachEvent && (t.document.attachEvent("on" + e, r), t.attachEvent("on" + e, r))
                        },
                        detachEvent: function (e, r) {
                            void 0 !== t.addEventListener ? t.removeEventListener(e, r, !1) : t.document && t.detachEvent && (t.document.detachEvent("on" + e, r), t.detachEvent("on" + e, r))
                        },
                        unloadAdd: function (e) {
                            if (s) return null;
                            var t = n.string(8);
                            return o[t] = e, i && setTimeout(this.triggerUnloadCallbacks, 0), t
                        },
                        unloadDel: function (e) {
                            e in o && delete o[e]
                        },
                        triggerUnloadCallbacks: function () {
                            for (var e in o) o[e](), delete o[e]
                        }
                    }, s || r.exports.attachEvent("unload", function () {
                        i || (i = !0, r.exports.triggerUnloadCallbacks())
                    })
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./random": 50
            }],
            47: [function (e, r, n) {
                (function (t, n) {
                    "use strict";
                    var o = e("./event"),
                        i = e("json3"),
                        s = e("./browser"),
                        a = function () {};
                    "production" !== t.env.NODE_ENV && (a = e("debug")("sockjs-client:utils:iframe")), r.exports = {
                        WPrefix: "_jp",
                        currentWindowId: null,
                        polluteGlobalNamespace: function () {
                            r.exports.WPrefix in n || (n[r.exports.WPrefix] = {})
                        },
                        postMessage: function (e, t) {
                            n.parent !== n ? n.parent.postMessage(i.stringify({
                                windowId: r.exports.currentWindowId,
                                type: e,
                                data: t || ""
                            }), "*") : a("Cannot postMessage, no parent window.", e, t)
                        },
                        createIframe: function (e, t) {
                            var r, i, s = n.document.createElement("iframe"),
                                l = function () {
                                    a("unattach"), clearTimeout(r);
                                    try {
                                        s.onload = null
                                    } catch (e) {}
                                    s.onerror = null
                                },
                                c = function () {
                                    a("cleanup"), s && (l(), setTimeout(function () {
                                        s && s.parentNode.removeChild(s), s = null
                                    }, 0), o.unloadDel(i))
                                },
                                u = function (e) {
                                    a("onerror", e), s && (c(), t(e))
                                };
                            return s.src = e, s.style.display = "none", s.style.position = "absolute", s.onerror = function () {
                                u("onerror")
                            }, s.onload = function () {
                                a("onload"), clearTimeout(r), r = setTimeout(function () {
                                    u("onload timeout")
                                }, 2e3)
                            }, n.document.body.appendChild(s), r = setTimeout(function () {
                                u("timeout")
                            }, 15e3), i = o.unloadAdd(c), {
                                post: function (e, t) {
                                    a("post", e, t), setTimeout(function () {
                                        try {
                                            s && s.contentWindow && s.contentWindow.postMessage(e, t)
                                        } catch (e) {}
                                    }, 0)
                                },
                                cleanup: c,
                                loaded: l
                            }
                        },
                        createHtmlfile: function (e, t) {
                            var i, s, l, c = ["Active"].concat("Object").join("X"),
                                u = new n[c]("htmlfile"),
                                f = function () {
                                    clearTimeout(i), l.onerror = null
                                },
                                p = function () {
                                    u && (f(), o.unloadDel(s), l.parentNode.removeChild(l), l = u = null, CollectGarbage())
                                },
                                h = function (e) {
                                    a("onerror", e), u && (p(), t(e))
                                };
                            u.open(), u.write('<html><script>document.domain="' + n.document.domain + '";<\/script></html>'), u.close(), u.parentWindow[r.exports.WPrefix] = n[r.exports.WPrefix];
                            var d = u.createElement("div");
                            return u.body.appendChild(d), l = u.createElement("iframe"), d.appendChild(l), l.src = e, l.onerror = function () {
                                h("onerror")
                            }, i = setTimeout(function () {
                                h("timeout")
                            }, 15e3), s = o.unloadAdd(p), {
                                post: function (e, t) {
                                    try {
                                        setTimeout(function () {
                                            l && l.contentWindow && l.contentWindow.postMessage(e, t)
                                        }, 0)
                                    } catch (e) {}
                                },
                                cleanup: p,
                                loaded: f
                            }
                        }
                    }, r.exports.iframeEnabled = !1, n.document && (r.exports.iframeEnabled = ("function" == typeof n.postMessage || "object" == typeof n.postMessage) && !s.isKonqueror())
                }).call(this, {
                    env: {}
                }, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./browser": 44,
                "./event": 46,
                debug: 55,
                json3: 58
            }],
            48: [function (e, r, n) {
                (function (e) {
                    "use strict";
                    var t = {};
                    ["log", "debug", "warn"].forEach(function (r) {
                        var n;
                        try {
                            n = e.console && e.console[r] && e.console[r].apply
                        } catch (e) {}
                        t[r] = n ? function () {
                            return e.console[r].apply(e.console, arguments)
                        } : "log" === r ? function () {} : t.log
                    }), r.exports = t
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            49: [function (e, t, r) {
                "use strict";
                t.exports = {
                    isObject: function (e) {
                        var t = typeof e;
                        return "function" === t || "object" === t && !!e
                    },
                    extend: function (e) {
                        if (!this.isObject(e)) return e;
                        for (var t, r, n = 1, o = arguments.length; n < o; n++)
                            for (r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }
                }
            }, {}],
            50: [function (e, t, r) {
                "use strict";
                var n = e("crypto");
                t.exports = {
                    string: function (e) {
                        for (var t = "abcdefghijklmnopqrstuvwxyz012345".length, r = n.randomBytes(e), o = [], i = 0; i < e; i++) o.push("abcdefghijklmnopqrstuvwxyz012345".substr(r[i] % t, 1));
                        return o.join("")
                    },
                    number: function (e) {
                        return Math.floor(Math.random() * e)
                    },
                    numberString: function (e) {
                        var t = ("" + (e - 1)).length,
                            r = new Array(t + 1).join("0");
                        return (r + this.number(e)).slice(-t)
                    }
                }
            }, {
                crypto: 43
            }],
            51: [function (e, t, r) {
                (function (r) {
                    "use strict";
                    var n = function () {};
                    "production" !== r.env.NODE_ENV && (n = e("debug")("sockjs-client:utils:transport")), t.exports = function (e) {
                        return {
                            filterToEnabled: function (t, r) {
                                var o = {
                                    main: [],
                                    facade: []
                                };
                                return t ? "string" == typeof t && (t = [t]) : t = [], e.forEach(function (e) {
                                    e && ("websocket" !== e.transportName || !1 !== r.websocket ? t.length && -1 === t.indexOf(e.transportName) ? n("not in whitelist", e.transportName) : e.enabled(r) ? (n("enabled", e.transportName), o.main.push(e), e.facadeTransport && o.facade.push(e.facadeTransport)) : n("disabled", e.transportName) : n("disabled from server", "websocket"))
                                }), o
                            }
                        }
                    }
                }).call(this, {
                    env: {}
                })
            }, {
                debug: 55
            }],
            52: [function (e, t, r) {
                (function (r) {
                    "use strict";
                    var n = e("url-parse"),
                        o = function () {};
                    "production" !== r.env.NODE_ENV && (o = e("debug")("sockjs-client:utils:url")), t.exports = {
                        getOrigin: function (e) {
                            if (!e) return null;
                            var t = new n(e);
                            if ("file:" === t.protocol) return null;
                            var r = t.port;
                            return r || (r = "https:" === t.protocol ? "443" : "80"), t.protocol + "//" + t.hostname + ":" + r
                        },
                        isOriginEqual: function (e, t) {
                            var r = this.getOrigin(e) === this.getOrigin(t);
                            return o("same", e, t, r), r
                        },
                        isSchemeEqual: function (e, t) {
                            return e.split(":")[0] === t.split(":")[0]
                        },
                        addPath: function (e, t) {
                            var r = e.split("?");
                            return r[0] + t + (r[1] ? "?" + r[1] : "")
                        },
                        addQuery: function (e, t) {
                            return e + (-1 === e.indexOf("?") ? "?" + t : "&" + t)
                        }
                    }
                }).call(this, {
                    env: {}
                })
            }, {
                debug: 55,
                "url-parse": 61
            }],
            53: [function (e, t, r) {
                t.exports = "1.3.0"
            }, {}],
            54: [function (e, t, r) {
                var n = 1e3,
                    o = 60 * n,
                    i = 60 * o,
                    s = 24 * i,
                    a = 7 * s,
                    l = 365.25 * s;

                function c(e, t, r, n) {
                    var o = t >= 1.5 * r;
                    return Math.round(e / r) + " " + n + (o ? "s" : "")
                }
                t.exports = function (e, t) {
                    t = t || {};
                    var r, u, f = typeof e;
                    if ("string" === f && e.length > 0) return function (e) {
                        if (!((e = String(e)).length > 100)) {
                            var t = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                            if (t) {
                                var r = parseFloat(t[1]);
                                switch ((t[2] || "ms").toLowerCase()) {
                                    case "years":
                                    case "year":
                                    case "yrs":
                                    case "yr":
                                    case "y":
                                        return r * l;
                                    case "weeks":
                                    case "week":
                                    case "w":
                                        return r * a;
                                    case "days":
                                    case "day":
                                    case "d":
                                        return r * s;
                                    case "hours":
                                    case "hour":
                                    case "hrs":
                                    case "hr":
                                    case "h":
                                        return r * i;
                                    case "minutes":
                                    case "minute":
                                    case "mins":
                                    case "min":
                                    case "m":
                                        return r * o;
                                    case "seconds":
                                    case "second":
                                    case "secs":
                                    case "sec":
                                    case "s":
                                        return r * n;
                                    case "milliseconds":
                                    case "millisecond":
                                    case "msecs":
                                    case "msec":
                                    case "ms":
                                        return r;
                                    default:
                                        return
                                }
                            }
                        }
                    }(e);
                    if ("number" === f && !1 === isNaN(e)) return t.long ? (r = e, (u = Math.abs(r)) >= s ? c(r, u, s, "day") : u >= i ? c(r, u, i, "hour") : u >= o ? c(r, u, o, "minute") : u >= n ? c(r, u, n, "second") : r + " ms") : function (e) {
                        var t = Math.abs(e);
                        return t >= s ? Math.round(e / s) + "d" : t >= i ? Math.round(e / i) + "h" : t >= o ? Math.round(e / o) + "m" : t >= n ? Math.round(e / n) + "s" : e + "ms"
                    }(e);
                    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
                }
            }, {}],
            55: [function (e, t, r) {
                (function (n) {
                    "use strict";

                    function o(e) {
                        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    r.log = function () {
                        var e;
                        return "object" === ("undefined" == typeof console ? "undefined" : o(console)) && console.log && (e = console).log.apply(e, arguments)
                    }, r.formatArgs = function (e) {
                        if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), this.useColors) {
                            var r = "color: " + this.color;
                            e.splice(1, 0, r, "color: inherit");
                            var n = 0,
                                o = 0;
                            e[0].replace(/%[a-zA-Z%]/g, function (e) {
                                "%%" !== e && (n++, "%c" === e && (o = n))
                            }), e.splice(o, 0, r)
                        }
                    }, r.save = function (e) {
                        try {
                            e ? r.storage.setItem("debug", e) : r.storage.removeItem("debug")
                        } catch (e) {}
                    }, r.load = function () {
                        var e;
                        try {
                            e = r.storage.getItem("debug")
                        } catch (e) {}
                        return !e && void 0 !== n && "env" in n && (e = n.env.DEBUG), e
                    }, r.useColors = function () {
                        return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                    }, r.storage = function () {
                        try {
                            return localStorage
                        } catch (e) {}
                    }(), r.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.exports = e("./common")(r);
                    var i = t.exports.formatters;
                    i.j = function (e) {
                        try {
                            return JSON.stringify(e)
                        } catch (e) {
                            return "[UnexpectedJSONParseError]: " + e.message
                        }
                    }
                }).call(this, {
                    env: {}
                })
            }, {
                "./common": 56
            }],
            56: [function (e, t, r) {
                "use strict";
                t.exports = function (t) {
                    function r(e) {
                        for (var t = 0, r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r), t |= 0;
                        return n.colors[Math.abs(t) % n.colors.length]
                    }

                    function n(e) {
                        var t;

                        function s() {
                            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                            if (s.enabled) {
                                var i = s,
                                    a = Number(new Date),
                                    l = a - (t || a);
                                i.diff = l, i.prev = t, i.curr = a, t = a, r[0] = n.coerce(r[0]), "string" != typeof r[0] && r.unshift("%O");
                                var c = 0;
                                r[0] = r[0].replace(/%([a-zA-Z%])/g, function (e, t) {
                                    if ("%%" === e) return e;
                                    c++;
                                    var o = n.formatters[t];
                                    if ("function" == typeof o) {
                                        var s = r[c];
                                        e = o.call(i, s), r.splice(c, 1), c--
                                    }
                                    return e
                                }), n.formatArgs.call(i, r);
                                var u = i.log || n.log;
                                u.apply(i, r)
                            }
                        }
                        return s.namespace = e, s.enabled = n.enabled(e), s.useColors = n.useColors(), s.color = r(e), s.destroy = o, s.extend = i, "function" == typeof n.init && n.init(s), n.instances.push(s), s
                    }

                    function o() {
                        var e = n.instances.indexOf(this);
                        return -1 !== e && (n.instances.splice(e, 1), !0)
                    }

                    function i(e, t) {
                        return n(this.namespace + (void 0 === t ? ":" : t) + e)
                    }
                    return n.debug = n, n.default = n, n.coerce = function (e) {
                        return e instanceof Error ? e.stack || e.message : e
                    }, n.disable = function () {
                        n.enable("")
                    }, n.enable = function (e) {
                        var t;
                        n.save(e), n.names = [], n.skips = [];
                        var r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                            o = r.length;
                        for (t = 0; t < o; t++) r[t] && ("-" === (e = r[t].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$")));
                        for (t = 0; t < n.instances.length; t++) {
                            var i = n.instances[t];
                            i.enabled = n.enabled(i.namespace)
                        }
                    }, n.enabled = function (e) {
                        if ("*" === e[e.length - 1]) return !0;
                        var t, r;
                        for (t = 0, r = n.skips.length; t < r; t++)
                            if (n.skips[t].test(e)) return !1;
                        for (t = 0, r = n.names.length; t < r; t++)
                            if (n.names[t].test(e)) return !0;
                        return !1
                    }, n.humanize = e("ms"), Object.keys(t).forEach(function (e) {
                        n[e] = t[e]
                    }), n.instances = [], n.names = [], n.skips = [], n.formatters = {}, n.selectColor = r, n.enable(n.load()), n
                }
            }, {
                ms: 54
            }],
            57: [function (e, t, r) {
                "function" == typeof Object.create ? t.exports = function (e, t) {
                    e.super_ = t, e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    })
                } : t.exports = function (e, t) {
                    e.super_ = t;
                    var r = function () {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }
            }, {}],
            58: [function (e, r, n) {
                (function (e) {
                    (function () {
                        var t = {
                                function: !0,
                                object: !0
                            },
                            o = t[typeof n] && n && !n.nodeType && n,
                            i = t[typeof window] && window || this,
                            s = o && t[typeof r] && r && !r.nodeType && "object" == typeof e && e;

                        function a(e, r) {
                            e || (e = i.Object()), r || (r = i.Object());
                            var n = e.Number || i.Number,
                                o = e.String || i.String,
                                s = e.Object || i.Object,
                                l = e.Date || i.Date,
                                c = e.SyntaxError || i.SyntaxError,
                                u = e.TypeError || i.TypeError,
                                f = e.Math || i.Math,
                                p = e.JSON || i.JSON;
                            "object" == typeof p && p && (r.stringify = p.stringify, r.parse = p.parse);
                            var h, d, g, m = s.prototype,
                                v = m.toString,
                                y = new l(-0xc782b5b800cec);
                            try {
                                y = -109252 == y.getUTCFullYear() && 0 === y.getUTCMonth() && 1 === y.getUTCDate() && 10 == y.getUTCHours() && 37 == y.getUTCMinutes() && 6 == y.getUTCSeconds() && 708 == y.getUTCMilliseconds()
                            } catch (e) {}

                            function b(e) {
                                if (b[e] !== g) return b[e];
                                var t;
                                if ("bug-string-char-index" == e) t = "a" != "a" [0];
                                else if ("json" == e) t = b("json-stringify") && b("json-parse");
                                else {
                                    var i, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                    if ("json-stringify" == e) {
                                        var a = r.stringify,
                                            c = "function" == typeof a && y;
                                        if (c) {
                                            (i = function () {
                                                return 1
                                            }).toJSON = i;
                                            try {
                                                c = "0" === a(0) && "0" === a(new n) && '""' == a(new o) && a(v) === g && a(g) === g && a() === g && "1" === a(i) && "[1]" == a([i]) && "[null]" == a([g]) && "null" == a(null) && "[null,null,null]" == a([g, v, null]) && a({
                                                    a: [i, !0, !1, null, "\0\b\n\f\r\t"]
                                                }) == s && "1" === a(null, i) && "[\n 1,\n 2\n]" == a([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == a(new l(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == a(new l(864e13)) && '"-000001-01-01T00:00:00.000Z"' == a(new l(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == a(new l(-1))
                                            } catch (e) {
                                                c = !1
                                            }
                                        }
                                        t = c
                                    }
                                    if ("json-parse" == e) {
                                        var u = r.parse;
                                        if ("function" == typeof u) try {
                                            if (0 === u("0") && !u(!1)) {
                                                var f = 5 == (i = u(s)).a.length && 1 === i.a[0];
                                                if (f) {
                                                    try {
                                                        f = !u('"\t"')
                                                    } catch (e) {}
                                                    if (f) try {
                                                        f = 1 !== u("01")
                                                    } catch (e) {}
                                                    if (f) try {
                                                        f = 1 !== u("1.")
                                                    } catch (e) {}
                                                }
                                            }
                                        } catch (e) {
                                            f = !1
                                        }
                                        t = f
                                    }
                                }
                                return b[e] = !!t
                            }
                            if (!b("json")) {
                                var w = b("bug-string-char-index");
                                if (!y) var x = f.floor,
                                    C = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                    E = function (e, t) {
                                        return C[t] + 365 * (e - 1970) + x((e - 1969 + (t = +(t > 1))) / 4) - x((e - 1901 + t) / 100) + x((e - 1601 + t) / 400)
                                    };
                                if ((h = m.hasOwnProperty) || (h = function (e) {
                                        var t, r = {};
                                        return (r.__proto__ = null, r.__proto__ = {
                                            toString: 1
                                        }, r).toString != v ? h = function (e) {
                                            var t = this.__proto__,
                                                r = e in (this.__proto__ = null, this);
                                            return this.__proto__ = t, r
                                        } : (t = r.constructor, h = function (e) {
                                            var r = (this.constructor || t).prototype;
                                            return e in this && !(e in r && this[e] === r[e])
                                        }), r = null, h.call(this, e)
                                    }), d = function (e, r) {
                                        var n, o, i, s = 0;
                                        for (i in (n = function () {
                                                this.valueOf = 0
                                            }).prototype.valueOf = 0, o = new n) h.call(o, i) && s++;
                                        return n = o = null, s ? d = 2 == s ? function (e, t) {
                                            var r, n = {},
                                                o = "[object Function]" == v.call(e);
                                            for (r in e) o && "prototype" == r || h.call(n, r) || !(n[r] = 1) || !h.call(e, r) || t(r)
                                        } : function (e, t) {
                                            var r, n, o = "[object Function]" == v.call(e);
                                            for (r in e) o && "prototype" == r || !h.call(e, r) || (n = "constructor" === r) || t(r);
                                            (n || h.call(e, r = "constructor")) && t(r)
                                        } : (o = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], d = function (e, r) {
                                            var n, i, s = "[object Function]" == v.call(e),
                                                a = !s && "function" != typeof e.constructor && t[typeof e.hasOwnProperty] && e.hasOwnProperty || h;
                                            for (n in e) s && "prototype" == n || !a.call(e, n) || r(n);
                                            for (i = o.length; n = o[--i]; a.call(e, n) && r(n));
                                        }), d(e, r)
                                    }, !b("json-stringify")) {
                                    var _ = {
                                            92: "\\\\",
                                            34: '\\"',
                                            8: "\\b",
                                            12: "\\f",
                                            10: "\\n",
                                            13: "\\r",
                                            9: "\\t"
                                        },
                                        S = function (e, t) {
                                            return ("000000" + (t || 0)).slice(-e)
                                        },
                                        k = function (e) {
                                            for (var t = '"', r = 0, n = e.length, o = !w || n > 10, i = o && (w ? e.split("") : e); r < n; r++) {
                                                var s = e.charCodeAt(r);
                                                switch (s) {
                                                    case 8:
                                                    case 9:
                                                    case 10:
                                                    case 12:
                                                    case 13:
                                                    case 34:
                                                    case 92:
                                                        t += _[s];
                                                        break;
                                                    default:
                                                        if (s < 32) {
                                                            t += "\\u00" + S(2, s.toString(16));
                                                            break
                                                        }
                                                        t += o ? i[r] : e.charAt(r)
                                                }
                                            }
                                            return t + '"'
                                        },
                                        A = function (e, t, r, n, o, i, s) {
                                            var a, l, c, f, p, m, y, b, w, C, _, O, j, T, N, q;
                                            try {
                                                a = t[e]
                                            } catch (e) {}
                                            if ("object" == typeof a && a)
                                                if ("[object Date]" != (l = v.call(a)) || h.call(a, "toJSON")) "function" == typeof a.toJSON && ("[object Number]" != l && "[object String]" != l && "[object Array]" != l || h.call(a, "toJSON")) && (a = a.toJSON(e));
                                                else if (a > -1 / 0 && a < 1 / 0) {
                                                if (E) {
                                                    for (p = x(a / 864e5), c = x(p / 365.2425) + 1970 - 1; E(c + 1, 0) <= p; c++);
                                                    for (f = x((p - E(c, 0)) / 30.42); E(c, f + 1) <= p; f++);
                                                    p = 1 + p - E(c, f), y = x((m = (a % 864e5 + 864e5) % 864e5) / 36e5) % 24, b = x(m / 6e4) % 60, w = x(m / 1e3) % 60, C = m % 1e3
                                                } else c = a.getUTCFullYear(), f = a.getUTCMonth(), p = a.getUTCDate(), y = a.getUTCHours(), b = a.getUTCMinutes(), w = a.getUTCSeconds(), C = a.getUTCMilliseconds();
                                                a = (c <= 0 || c >= 1e4 ? (c < 0 ? "-" : "+") + S(6, c < 0 ? -c : c) : S(4, c)) + "-" + S(2, f + 1) + "-" + S(2, p) + "T" + S(2, y) + ":" + S(2, b) + ":" + S(2, w) + "." + S(3, C) + "Z"
                                            } else a = null;
                                            if (r && (a = r.call(t, e, a)), null === a) return "null";
                                            if ("[object Boolean]" == (l = v.call(a))) return "" + a;
                                            if ("[object Number]" == l) return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                                            if ("[object String]" == l) return k("" + a);
                                            if ("object" == typeof a) {
                                                for (T = s.length; T--;)
                                                    if (s[T] === a) throw u();
                                                if (s.push(a), _ = [], N = i, i += o, "[object Array]" == l) {
                                                    for (j = 0, T = a.length; j < T; j++) O = A(j, a, r, n, o, i, s), _.push(O === g ? "null" : O);
                                                    q = _.length ? o ? "[\n" + i + _.join(",\n" + i) + "\n" + N + "]" : "[" + _.join(",") + "]" : "[]"
                                                } else d(n || a, function (e) {
                                                    var t = A(e, a, r, n, o, i, s);
                                                    t !== g && _.push(k(e) + ":" + (o ? " " : "") + t)
                                                }), q = _.length ? o ? "{\n" + i + _.join(",\n" + i) + "\n" + N + "}" : "{" + _.join(",") + "}" : "{}";
                                                return s.pop(), q
                                            }
                                        };
                                    r.stringify = function (e, r, n) {
                                        var o, i, s, a;
                                        if (t[typeof r] && r)
                                            if ("[object Function]" == (a = v.call(r))) i = r;
                                            else if ("[object Array]" == a) {
                                            s = {};
                                            for (var l, c = 0, u = r.length; c < u; l = r[c++], ("[object String]" == (a = v.call(l)) || "[object Number]" == a) && (s[l] = 1));
                                        }
                                        if (n)
                                            if ("[object Number]" == (a = v.call(n))) {
                                                if ((n -= n % 1) > 0)
                                                    for (o = "", n > 10 && (n = 10); o.length < n; o += " ");
                                            } else "[object String]" == a && (o = n.length <= 10 ? n : n.slice(0, 10));
                                        return A("", ((l = {})[""] = e, l), i, s, o, "", [])
                                    }
                                }
                                if (!b("json-parse")) {
                                    var O, j, T = o.fromCharCode,
                                        N = {
                                            92: "\\",
                                            34: '"',
                                            47: "/",
                                            98: "\b",
                                            116: "\t",
                                            110: "\n",
                                            102: "\f",
                                            114: "\r"
                                        },
                                        q = function () {
                                            throw O = j = null, c()
                                        },
                                        L = function () {
                                            for (var e, t, r, n, o, i = j, s = i.length; O < s;) switch (o = i.charCodeAt(O)) {
                                                case 9:
                                                case 10:
                                                case 13:
                                                case 32:
                                                    O++;
                                                    break;
                                                case 123:
                                                case 125:
                                                case 91:
                                                case 93:
                                                case 58:
                                                case 44:
                                                    return e = w ? i.charAt(O) : i[O], O++, e;
                                                case 34:
                                                    for (e = "@", O++; O < s;)
                                                        if ((o = i.charCodeAt(O)) < 32) q();
                                                        else if (92 == o) switch (o = i.charCodeAt(++O)) {
                                                        case 92:
                                                        case 34:
                                                        case 47:
                                                        case 98:
                                                        case 116:
                                                        case 110:
                                                        case 102:
                                                        case 114:
                                                            e += N[o], O++;
                                                            break;
                                                        case 117:
                                                            for (t = ++O, r = O + 4; O < r; O++)(o = i.charCodeAt(O)) >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || q();
                                                            e += T("0x" + i.slice(t, O));
                                                            break;
                                                        default:
                                                            q()
                                                    } else {
                                                        if (34 == o) break;
                                                        for (o = i.charCodeAt(O), t = O; o >= 32 && 92 != o && 34 != o;) o = i.charCodeAt(++O);
                                                        e += i.slice(t, O)
                                                    }
                                                    if (34 == i.charCodeAt(O)) return O++, e;
                                                    q();
                                                default:
                                                    if (t = O, 45 == o && (n = !0, o = i.charCodeAt(++O)), o >= 48 && o <= 57) {
                                                        for (48 == o && (o = i.charCodeAt(O + 1)) >= 48 && o <= 57 && q(), n = !1; O < s && (o = i.charCodeAt(O)) >= 48 && o <= 57; O++);
                                                        if (46 == i.charCodeAt(O)) {
                                                            for (r = ++O; r < s && (o = i.charCodeAt(r)) >= 48 && o <= 57; r++);
                                                            r == O && q(), O = r
                                                        }
                                                        if (101 == (o = i.charCodeAt(O)) || 69 == o) {
                                                            for (43 != (o = i.charCodeAt(++O)) && 45 != o || O++, r = O; r < s && (o = i.charCodeAt(r)) >= 48 && o <= 57; r++);
                                                            r == O && q(), O = r
                                                        }
                                                        return +i.slice(t, O)
                                                    }
                                                    if (n && q(), "true" == i.slice(O, O + 4)) return O += 4, !0;
                                                    if ("false" == i.slice(O, O + 5)) return O += 5, !1;
                                                    if ("null" == i.slice(O, O + 4)) return O += 4, null;
                                                    q()
                                            }
                                            return "$"
                                        },
                                        D = function (e) {
                                            var t, r;
                                            if ("$" == e && q(), "string" == typeof e) {
                                                if ("@" == (w ? e.charAt(0) : e[0])) return e.slice(1);
                                                if ("[" == e) {
                                                    for (t = [];
                                                        "]" != (e = L()); r || (r = !0)) r && ("," == e ? "]" == (e = L()) && q() : q()), "," == e && q(), t.push(D(e));
                                                    return t
                                                }
                                                if ("{" == e) {
                                                    for (t = {};
                                                        "}" != (e = L()); r || (r = !0)) r && ("," == e ? "}" == (e = L()) && q() : q()), "," != e && "string" == typeof e && "@" == (w ? e.charAt(0) : e[0]) && ":" == L() || q(), t[e.slice(1)] = D(L());
                                                    return t
                                                }
                                                q()
                                            }
                                            return e
                                        },
                                        R = function (e, t, r) {
                                            var n = I(e, t, r);
                                            n === g ? delete e[t] : e[t] = n
                                        },
                                        I = function (e, t, r) {
                                            var n, o = e[t];
                                            if ("object" == typeof o && o)
                                                if ("[object Array]" == v.call(o))
                                                    for (n = o.length; n--;) R(o, n, r);
                                                else d(o, function (e) {
                                                    R(o, e, r)
                                                });
                                            return r.call(e, t, o)
                                        };
                                    r.parse = function (e, t) {
                                        var r, n;
                                        return O = 0, j = "" + e, r = D(L()), "$" != L() && q(), O = j = null, t && "[object Function]" == v.call(t) ? I(((n = {})[""] = r, n), "", t) : r
                                    }
                                }
                            }
                            return r.runInContext = a, r
                        }
                        if (!s || s.global !== s && s.window !== s && s.self !== s || (i = s), o) a(i, o);
                        else {
                            var l = i.JSON,
                                c = i.JSON3,
                                u = !1,
                                f = a(i, i.JSON3 = {
                                    noConflict: function () {
                                        return u || (u = !0, i.JSON = l, i.JSON3 = c, l = c = null), f
                                    }
                                });
                            i.JSON = {
                                parse: f.parse,
                                stringify: f.stringify
                            }
                        }
                    }).call(this)
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            59: [function (e, t, r) {
                "use strict";
                var n = Object.prototype.hasOwnProperty;

                function o(e) {
                    return decodeURIComponent(e.replace(/\+/g, " "))
                }
                r.stringify = function (e, t) {
                    var r = [];
                    for (var o in "string" != typeof (t = t || "") && (t = "?"), e) n.call(e, o) && r.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
                    return r.length ? t + r.join("&") : ""
                }, r.parse = function (e) {
                    for (var t, r = /([^=?&]+)=?([^&]*)/g, n = {}; t = r.exec(e);) {
                        var i = o(t[1]),
                            s = o(t[2]);
                        i in n || (n[i] = s)
                    }
                    return n
                }
            }, {}],
            60: [function (e, t, r) {
                "use strict";
                t.exports = function (e, t) {
                    if (t = t.split(":")[0], !(e = +e)) return !1;
                    switch (t) {
                        case "http":
                        case "ws":
                            return 80 !== e;
                        case "https":
                        case "wss":
                            return 443 !== e;
                        case "ftp":
                            return 21 !== e;
                        case "gopher":
                            return 70 !== e;
                        case "file":
                            return !1
                    }
                    return 0 !== e
                }
            }, {}],
            61: [function (e, r, n) {
                (function (t) {
                    "use strict";
                    var n = e("requires-port"),
                        o = e("querystringify"),
                        i = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
                        s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                        a = [
                            ["#", "hash"],
                            ["?", "query"],
                            function (e) {
                                return e.replace("\\", "/")
                            },
                            ["/", "pathname"],
                            ["@", "auth", 1],
                            [NaN, "host", void 0, 1, 1],
                            [/:(\d+)$/, "port", void 0, 1],
                            [NaN, "hostname", void 0, 1, 1]
                        ],
                        l = {
                            hash: 1,
                            query: 1
                        };

                    function c(e) {
                        var r, n = t && t.location || {},
                            o = {},
                            i = typeof (e = e || n);
                        if ("blob:" === e.protocol) o = new f(unescape(e.pathname), {});
                        else if ("string" === i)
                            for (r in o = new f(e, {}), l) delete o[r];
                        else if ("object" === i) {
                            for (r in e) r in l || (o[r] = e[r]);
                            void 0 === o.slashes && (o.slashes = s.test(e.href))
                        }
                        return o
                    }

                    function u(e) {
                        var t = i.exec(e);
                        return {
                            protocol: t[1] ? t[1].toLowerCase() : "",
                            slashes: !!t[2],
                            rest: t[3]
                        }
                    }

                    function f(e, t, r) {
                        if (!(this instanceof f)) return new f(e, t, r);
                        var i, s, l, p, h, d, g = a.slice(),
                            m = typeof t,
                            v = this,
                            y = 0;
                        for ("object" !== m && "string" !== m && (r = t, t = null), r && "function" != typeof r && (r = o.parse), t = c(t), s = u(e || ""), i = !s.protocol && !s.slashes, v.slashes = s.slashes || i && t.slashes, v.protocol = s.protocol || t.protocol || "", e = s.rest, s.slashes || (g[3] = [/(.*)/, "pathname"]); y < g.length; y++) "function" != typeof (p = g[y]) ? (l = p[0], d = p[1], l != l ? v[d] = e : "string" == typeof l ? ~(h = e.indexOf(l)) && ("number" == typeof p[2] ? (v[d] = e.slice(0, h), e = e.slice(h + p[2])) : (v[d] = e.slice(h), e = e.slice(0, h))) : (h = l.exec(e)) && (v[d] = h[1], e = e.slice(0, h.index)), v[d] = v[d] || i && p[3] && t[d] || "", p[4] && (v[d] = v[d].toLowerCase())) : e = p(e);
                        r && (v.query = r(v.query)), i && t.slashes && "/" !== v.pathname.charAt(0) && ("" !== v.pathname || "" !== t.pathname) && (v.pathname = function (e, t) {
                            for (var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")), n = r.length, o = r[n - 1], i = !1, s = 0; n--;) "." === r[n] ? r.splice(n, 1) : ".." === r[n] ? (r.splice(n, 1), s++) : s && (0 === n && (i = !0), r.splice(n, 1), s--);
                            return i && r.unshift(""), "." !== o && ".." !== o || r.push(""), r.join("/")
                        }(v.pathname, t.pathname)), n(v.port, v.protocol) || (v.host = v.hostname, v.port = ""), v.username = v.password = "", v.auth && (p = v.auth.split(":"), v.username = p[0] || "", v.password = p[1] || ""), v.origin = v.protocol && v.host && "file:" !== v.protocol ? v.protocol + "//" + v.host : "null", v.href = v.toString()
                    }
                    f.prototype = {
                        set: function (e, t, r) {
                            var i = this;
                            switch (e) {
                                case "query":
                                    "string" == typeof t && t.length && (t = (r || o.parse)(t)), i[e] = t;
                                    break;
                                case "port":
                                    i[e] = t, n(t, i.protocol) ? t && (i.host = i.hostname + ":" + t) : (i.host = i.hostname, i[e] = "");
                                    break;
                                case "hostname":
                                    i[e] = t, i.port && (t += ":" + i.port), i.host = t;
                                    break;
                                case "host":
                                    i[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), i.port = t.pop(), i.hostname = t.join(":")) : (i.hostname = t, i.port = "");
                                    break;
                                case "protocol":
                                    i.protocol = t.toLowerCase(), i.slashes = !r;
                                    break;
                                case "pathname":
                                case "hash":
                                    if (t) {
                                        var s = "pathname" === e ? "/" : "#";
                                        i[e] = t.charAt(0) !== s ? s + t : t
                                    } else i[e] = t;
                                    break;
                                default:
                                    i[e] = t
                            }
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                c[4] && (i[c[1]] = i[c[1]].toLowerCase())
                            }
                            return i.origin = i.protocol && i.host && "file:" !== i.protocol ? i.protocol + "//" + i.host : "null", i.href = i.toString(), i
                        },
                        toString: function (e) {
                            e && "function" == typeof e || (e = o.stringify);
                            var t, r = this,
                                n = r.protocol;
                            n && ":" !== n.charAt(n.length - 1) && (n += ":");
                            var i = n + (r.slashes ? "//" : "");
                            return r.username && (i += r.username, r.password && (i += ":" + r.password), i += "@"), i += r.host + r.pathname, (t = "object" == typeof r.query ? e(r.query) : r.query) && (i += "?" !== t.charAt(0) ? "?" + t : t), r.hash && (i += r.hash), i
                        }
                    }, f.extractProtocol = u, f.location = c, f.qs = o, r.exports = f
                }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                querystringify: 59,
                "requires-port": 60
            }]
        }, {}, [1])(1)
    }).call(this, r(4))
}, function (e, t, r) {
    "use strict";
    var n = r(44),
        o = new(0, r(45).AllHtmlEntities),
        i = {
            reset: ["transparent", "transparent"],
            black: "181818",
            red: "E36049",
            green: "B3CB74",
            yellow: "FFD080",
            blue: "7CAFC2",
            magenta: "7FACCA",
            cyan: "C3C2EF",
            lightgrey: "EBE7E3",
            darkgrey: "6D7891"
        };
    n.setColors(i);
    var s = null,
        a = null,
        l = null;

    function c(e) {
        var t, r;
        a ? e(a) : (l = e, s || (t = function () {
            var e, t;
            (t = (e = s).contentDocument.createElement("div")).id = "webpack-dev-server-client-overlay-div", t.style.position = "fixed", t.style.boxSizing = "border-box", t.style.left = 0, t.style.top = 0, t.style.right = 0, t.style.bottom = 0, t.style.width = "100vw", t.style.height = "100vh", t.style.backgroundColor = "rgba(0, 0, 0, 0.85)", t.style.color = "#E8E8E8", t.style.fontFamily = "Menlo, Consolas, monospace", t.style.fontSize = "large", t.style.padding = "2rem", t.style.lineHeight = "1.2", t.style.whiteSpace = "pre-wrap", t.style.overflow = "auto", e.contentDocument.body.appendChild(t), l(a = t)
        }, (r = document.createElement("iframe")).id = "webpack-dev-server-client-overlay", r.src = "about:blank", r.style.position = "fixed", r.style.left = 0, r.style.top = 0, r.style.right = 0, r.style.bottom = 0, r.style.width = "100vw", r.style.height = "100vh", r.style.border = "none", r.style.zIndex = 9999999999, r.onload = t, s = r, document.body.appendChild(s)))
    }
    t.clear = function () {
        a && (document.body.removeChild(s), a = null, s = null, l = null)
    }, t.showMessage = function (e) {
        var t;
        t = e[0], c(function (e) {
            e.innerHTML = '<span style="color: #' + i.red + '">Failed to compile.</span><br><br>' + n(o.encode(t))
        })
    }
}, function (e, t, r) {
    "use strict";
    e.exports = l;
    var n = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/,
        o = {
            reset: ["fff", "000"],
            black: "000",
            red: "ff0000",
            green: "209805",
            yellow: "e8bf03",
            blue: "0000ff",
            magenta: "ff00ff",
            cyan: "00ffee",
            lightgrey: "f0f0f0",
            darkgrey: "888"
        },
        i = {
            30: "black",
            31: "red",
            32: "green",
            33: "yellow",
            34: "blue",
            35: "magenta",
            36: "cyan",
            37: "lightgrey"
        },
        s = {
            1: "font-weight:bold",
            2: "opacity:0.5",
            3: "<i>",
            4: "<u>",
            8: "display:none",
            9: "<del>"
        },
        a = {
            23: "</i>",
            24: "</u>",
            29: "</del>"
        };

    function l(e) {
        if (!n.test(e)) return e;
        var t = [],
            r = e.replace(/\033\[(\d+)*m/g, function (e, r) {
                var n = s[r];
                if (n) return ~t.indexOf(r) ? (t.pop(), "</span>") : (t.push(r), "<" === n[0] ? n : '<span style="' + n + ';">');
                var o = a[r];
                return o ? (t.pop(), o) : ""
            }),
            o = t.length;
        return o > 0 && (r += Array(o + 1).join("</span>")), r
    }

    function c(e) {
        for (var t in s[0] = "font-weight:normal;opacity:1;color:#" + e.reset[0] + ";background:#" + e.reset[1], s[7] = "color:#" + e.reset[1] + ";background:#" + e.reset[0], s[90] = "color:#" + e.darkgrey, i) {
            var r = e[i[t]] || "000";
            s[t] = "color:#" + r, t = parseInt(t), s[(t + 10).toString()] = "background:#" + r
        }
    } [0, 21, 22, 27, 28, 39, 49].forEach(function (e) {
        a[e] = "</span>"
    }), l.setColors = function (e) {
        if ("object" != typeof e) throw new Error("`colors` parameter must be an Object.");
        var t = {};
        for (var r in o) {
            var n = e.hasOwnProperty(r) ? e[r] : null;
            if (n) {
                if ("reset" === r) {
                    if ("string" == typeof n && (n = [n]), !Array.isArray(n) || 0 === n.length || n.some(function (e) {
                            return "string" != typeof e
                        })) throw new Error("The value of `" + r + "` property must be an Array and each item could only be a hex string, e.g.: FF0000");
                    var i = o[r];
                    n[0] || (n[0] = i[0]), 1 !== n.length && n[1] || (n = [n[0]]).push(i[1]), n = n.slice(0, 2)
                } else if ("string" != typeof n) throw new Error("The value of `" + r + "` property must be a hex string, e.g.: FF0000");
                t[r] = n
            } else t[r] = o[r]
        }
        c(t)
    }, l.reset = function () {
        c(o)
    }, l.tags = {}, Object.defineProperty ? (Object.defineProperty(l.tags, "open", {
        get: function () {
            return s
        }
    }), Object.defineProperty(l.tags, "close", {
        get: function () {
            return a
        }
    })) : (l.tags.open = s, l.tags.close = a), l.reset()
}, function (e, t, r) {
    e.exports = {
        XmlEntities: r(46),
        Html4Entities: r(47),
        Html5Entities: r(5),
        AllHtmlEntities: r(5)
    }
}, function (e, t) {
    var r = {
            "&lt": "<",
            "&gt": ">",
            "&quot": '"',
            "&apos": "'",
            "&amp": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&apos;": "'",
            "&amp;": "&"
        },
        n = {
            60: "lt",
            62: "gt",
            34: "quot",
            39: "apos",
            38: "amp"
        },
        o = {
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;",
            "&": "&amp;"
        };

    function i() {}
    i.prototype.encode = function (e) {
        return e && e.length ? e.replace(/<|>|"|'|&/g, function (e) {
            return o[e]
        }) : ""
    }, i.encode = function (e) {
        return (new i).encode(e)
    }, i.prototype.decode = function (e) {
        return e && e.length ? e.replace(/&#?[0-9a-zA-Z]+;?/g, function (e) {
            if ("#" === e.charAt(1)) {
                var t = "x" === e.charAt(2).toLowerCase() ? parseInt(e.substr(3), 16) : parseInt(e.substr(2));
                return isNaN(t) || t < -32768 || t > 65535 ? "" : String.fromCharCode(t)
            }
            return r[e] || e
        }) : ""
    }, i.decode = function (e) {
        return (new i).decode(e)
    }, i.prototype.encodeNonUTF = function (e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", o = 0; o < t;) {
            var i = e.charCodeAt(o),
                s = n[i];
            s ? (r += "&" + s + ";", o++) : (r += i < 32 || i > 126 ? "&#" + i + ";" : e.charAt(o), o++)
        }
        return r
    }, i.encodeNonUTF = function (e) {
        return (new i).encodeNonUTF(e)
    }, i.prototype.encodeNonASCII = function (e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var o = e.charCodeAt(n);
            o <= 255 ? r += e[n++] : (r += "&#" + o + ";", n++)
        }
        return r
    }, i.encodeNonASCII = function (e) {
        return (new i).encodeNonASCII(e)
    }, e.exports = i
}, function (e, t) {
    for (var r = ["apos", "nbsp", "iexcl", "cent", "pound", "curren", "yen", "brvbar", "sect", "uml", "copy", "ordf", "laquo", "not", "shy", "reg", "macr", "deg", "plusmn", "sup2", "sup3", "acute", "micro", "para", "middot", "cedil", "sup1", "ordm", "raquo", "frac14", "frac12", "frac34", "iquest", "Agrave", "Aacute", "Acirc", "Atilde", "Auml", "Aring", "Aelig", "Ccedil", "Egrave", "Eacute", "Ecirc", "Euml", "Igrave", "Iacute", "Icirc", "Iuml", "ETH", "Ntilde", "Ograve", "Oacute", "Ocirc", "Otilde", "Ouml", "times", "Oslash", "Ugrave", "Uacute", "Ucirc", "Uuml", "Yacute", "THORN", "szlig", "agrave", "aacute", "acirc", "atilde", "auml", "aring", "aelig", "ccedil", "egrave", "eacute", "ecirc", "euml", "igrave", "iacute", "icirc", "iuml", "eth", "ntilde", "ograve", "oacute", "ocirc", "otilde", "ouml", "divide", "oslash", "ugrave", "uacute", "ucirc", "uuml", "yacute", "thorn", "yuml", "quot", "amp", "lt", "gt", "OElig", "oelig", "Scaron", "scaron", "Yuml", "circ", "tilde", "ensp", "emsp", "thinsp", "zwnj", "zwj", "lrm", "rlm", "ndash", "mdash", "lsquo", "rsquo", "sbquo", "ldquo", "rdquo", "bdquo", "dagger", "Dagger", "permil", "lsaquo", "rsaquo", "euro", "fnof", "Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lambda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon", "Phi", "Chi", "Psi", "Omega", "alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa", "lambda", "mu", "nu", "xi", "omicron", "pi", "rho", "sigmaf", "sigma", "tau", "upsilon", "phi", "chi", "psi", "omega", "thetasym", "upsih", "piv", "bull", "hellip", "prime", "Prime", "oline", "frasl", "weierp", "image", "real", "trade", "alefsym", "larr", "uarr", "rarr", "darr", "harr", "crarr", "lArr", "uArr", "rArr", "dArr", "hArr", "forall", "part", "exist", "empty", "nabla", "isin", "notin", "ni", "prod", "sum", "minus", "lowast", "radic", "prop", "infin", "ang", "and", "or", "cap", "cup", "int", "there4", "sim", "cong", "asymp", "ne", "equiv", "le", "ge", "sub", "sup", "nsub", "sube", "supe", "oplus", "otimes", "perp", "sdot", "lceil", "rceil", "lfloor", "rfloor", "lang", "rang", "loz", "spades", "clubs", "hearts", "diams"], n = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830], o = {}, i = {}, s = 0, a = r.length; s < a;) {
        var l = r[s],
            c = n[s];
        o[l] = String.fromCharCode(c), i[c] = l, s++
    }

    function u() {}
    u.prototype.decode = function (e) {
        return e && e.length ? e.replace(/&(#?[\w\d]+);?/g, function (e, t) {
            var r;
            if ("#" === t.charAt(0)) {
                var n = "x" === t.charAt(1).toLowerCase() ? parseInt(t.substr(2), 16) : parseInt(t.substr(1));
                isNaN(n) || n < -32768 || n > 65535 || (r = String.fromCharCode(n))
            } else r = o[t];
            return r || e
        }) : ""
    }, u.decode = function (e) {
        return (new u).decode(e)
    }, u.prototype.encode = function (e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var o = i[e.charCodeAt(n)];
            r += o ? "&" + o + ";" : e.charAt(n), n++
        }
        return r
    }, u.encode = function (e) {
        return (new u).encode(e)
    }, u.prototype.encodeNonUTF = function (e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var o = e.charCodeAt(n),
                s = i[o];
            r += s ? "&" + s + ";" : o < 32 || o > 126 ? "&#" + o + ";" : e.charAt(n), n++
        }
        return r
    }, u.encodeNonUTF = function (e) {
        return (new u).encodeNonUTF(e)
    }, u.prototype.encodeNonASCII = function (e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var o = e.charCodeAt(n);
            o <= 255 ? r += e[n++] : (r += "&#" + o + ";", n++)
        }
        return r
    }, u.encodeNonASCII = function (e) {
        return (new u).encodeNonASCII(e)
    }, e.exports = u
}, function (e, t, r) {
    var n = {
        "./log": 49
    };

    function o(e) {
        var t = i(e);
        return r(t)
    }

    function i(e) {
        if (!r.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return n[e]
    }
    o.keys = function () {
        return Object.keys(n)
    }, o.resolve = i, e.exports = o, o.id = 48
}, function (e, t) {
    var r = "info";

    function n() {}

    function o(e) {
        return "info" === r && "info" === e || ["info", "warning"].indexOf(r) >= 0 && "warning" === e || ["info", "warning", "error"].indexOf(r) >= 0 && "error" === e
    }

    function i(e) {
        return function (t, r) {
            o(t) && e(r)
        }
    }
    e.exports = function (e, t) {
        o(e) && ("info" === e ? console.log(t) : "warning" === e ? console.warn(t) : "error" === e && console.error(t))
    };
    var s = console.group || n,
        a = console.groupCollapsed || n,
        l = console.groupEnd || n;
    e.exports.group = i(s), e.exports.groupCollapsed = i(a), e.exports.groupEnd = i(l), e.exports.setLogLevel = function (e) {
        r = e
    }
}, function (e, t, r) {
    var n = r(51);
    e.exports = new n
}, function (e, t, r) {
    "use strict";
    var n, o = "object" == typeof Reflect ? Reflect : null,
        i = o && "function" == typeof o.apply ? o.apply : function (e, t, r) {
            return Function.prototype.apply.call(e, t, r)
        };
    n = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function (e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : function (e) {
        return Object.getOwnPropertyNames(e)
    };
    var s = Number.isNaN || function (e) {
        return e != e
    };

    function a() {
        a.init.call(this)
    }
    e.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
    var l = 10;

    function c(e) {
        return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
    }

    function u(e, t, r, n) {
        var o, i, s, a;
        if ("function" != typeof r) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
        if (void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), i = e._events), s = i[t]), void 0 === s) s = i[t] = r, ++e._eventsCount;
        else if ("function" == typeof s ? s = i[t] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), (o = c(e)) > 0 && s.length > o && !s.warned) {
            s.warned = !0;
            var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = s.length, a = l, console && console.warn && console.warn(a)
        }
        return e
    }

    function f(e, t, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            o = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
                this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, i(this.listener, this.target, e))
            }.bind(n);
        return o.listener = r, n.wrapFn = o, o
    }

    function p(e, t, r) {
        var n = e._events;
        if (void 0 === n) return [];
        var o = n[t];
        return void 0 === o ? [] : "function" == typeof o ? r ? [o.listener || o] : [o] : r ? function (e) {
            for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
            return t
        }(o) : d(o, o.length)
    }

    function h(e) {
        var t = this._events;
        if (void 0 !== t) {
            var r = t[e];
            if ("function" == typeof r) return 1;
            if (void 0 !== r) return r.length
        }
        return 0
    }

    function d(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }
    Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
            return l
        },
        set: function (e) {
            if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            l = e
        }
    }), a.init = function () {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, a.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    }, a.prototype.getMaxListeners = function () {
        return c(this)
    }, a.prototype.emit = function (e) {
        for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
        var n = "error" === e,
            o = this._events;
        if (void 0 !== o) n = n && void 0 === o.error;
        else if (!n) return !1;
        if (n) {
            var s;
            if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
            var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
            throw a.context = s, a
        }
        var l = o[e];
        if (void 0 === l) return !1;
        if ("function" == typeof l) i(l, this, t);
        else {
            var c = l.length,
                u = d(l, c);
            for (r = 0; r < c; ++r) i(u[r], this, t)
        }
        return !0
    }, a.prototype.addListener = function (e, t) {
        return u(this, e, t, !1)
    }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function (e, t) {
        return u(this, e, t, !0)
    }, a.prototype.once = function (e, t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.on(e, f(this, e, t)), this
    }, a.prototype.prependOnceListener = function (e, t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.prependListener(e, f(this, e, t)), this
    }, a.prototype.removeListener = function (e, t) {
        var r, n, o, i, s;
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        if (void 0 === (n = this._events)) return this;
        if (void 0 === (r = n[e])) return this;
        if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
        else if ("function" != typeof r) {
            for (o = -1, i = r.length - 1; i >= 0; i--)
                if (r[i] === t || r[i].listener === t) {
                    s = r[i].listener, o = i;
                    break
                } if (o < 0) return this;
            0 === o ? r.shift() : function (e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop()
            }(r, o), 1 === r.length && (n[e] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", e, s || t)
        }
        return this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function (e) {
        var t, r, n;
        if (void 0 === (r = this._events)) return this;
        if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
        if (0 === arguments.length) {
            var o, i = Object.keys(r);
            for (n = 0; n < i.length; ++n) "removeListener" !== (o = i[n]) && this.removeAllListeners(o);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if ("function" == typeof (t = r[e])) this.removeListener(e, t);
        else if (void 0 !== t)
            for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
        return this
    }, a.prototype.listeners = function (e) {
        return p(this, e, !0)
    }, a.prototype.rawListeners = function (e) {
        return p(this, e, !1)
    }, a.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t)
    }, a.prototype.listenerCount = h, a.prototype.eventNames = function () {
        return this._eventsCount > 0 ? n(this._events) : []
    }
}, function (e, t, r) {
    "use strict";
    r.r(t);
    var n, o = r(6),
        i = r.n(o),
        s = r(1),
        a = r.n(s),
        l = r(7),
        c = r.n(l),
        u = r(8),
        f = r.n(u),
        p = r(9),
        h = r.n(p),
        d = r(10),
        g = r.n(d),
        m = r(11),
        v = r.n(m),
        y = r(12),
        b = r.n(y),
        w = r(13),
        x = r.n(w),
        C = r(14),
        E = r.n(C),
        _ = r(15),
        S = r.n(_),
        k = r(16),
        A = r.n(k),
        O = r(2),
        j = r.n(O),
        T = r(3),
        N = r.n(T),
        q = r(0),
        L = r.n(q),
        D = r(17),
        R = r.n(D),
        I = r(18),
        P = r.n(I),
        F = r(19),
        M = r.n(F),
        U = r(20),
        B = r.n(U),
        V = r(21),
        H = r.n(V),
        Y = r(22),
        G = r.n(Y),
        W = r(23),
        X = r.n(W),
        z = r(24),
        K = r.n(z),
        J = r(25),
        Z = r.n(J),
        $ = r(26),
        Q = r.n($),
        ee = r(27),
        te = r.n(ee),
        re = r(28),
        ne = r.n(re),
        oe = {
            animationid: {
                id: void 0
            }
        },
        ie = function () {
            function e(e) {
                this.fps = e, this.now, this.currentTime = Date.now(), this.interval = 1e3 / this.fps, this.delta
            }
            return e.prototype.fpsLimiter = function () {
                return this.now = Date.now(), this.delta = this.now - this.currentTime, this.delta > this.interval
            }, e.prototype.updateCurrentTime = function () {
                this.currentTime = this.now - this.delta % this.interval
            }, e
        }(),
        se = new ie(60),
        ae = function (e) {
            oe.animationid.id = requestAnimationFrame(function () {
                ae(e)
            }), se.fpsLimiter() && (se.updateCurrentTime(), e.playerObject.keyboard.escapeToggle > 0 ? e.playerObject.keyboard.checkToDisplayUserMenu(e.playerObject) : (e.playerObject.keyboard.keyboardPlayerMovement(), e.locationClass.draw(e.playerObject), e.playerObject.renderPlayer()))
        },
        le = [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 0, 0, 0, 0, 3, 3, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 0, 0, 5, 6, 6, 6, 5, 1, 11, 2, 2, 13, 13, 13, 13, 13, 12, 1, 4, 0, 3, 3, 9, 1, 1, 1, 5, 1, 4, 0, 5, 6, 6, 6, 6, 6, 6, 1, 4, 5, 6, 6, 6, 1, 11, 2, 5, 1, 4, 0, 5, 1, 1, 1, 1, 1, 1, 1, 4, 5, 1, 1, 1, 1, 4, 0, 5, 1, 4, 0, 5, 1, 8, 1, 8, 1, 1, 11, 0, 0, 2, 2, 7, 1, 4, 0, 5, 1, 4, 0, 5, 1, 1, 1, 1, 1, 1, 4, 0, 0, 0, 0, 5, 1, 4, 0, 5, 1, 4, 0, 0, 2, 2, 2, 7, 1, 11, 0, 0, 0, 0, 0, 5, 1, 4, 0, 5, 1, 4, 0, 0, 0, 0, 0, 5, 1, 4, 0, 0, 0, 0, 0, 5, 1, 4, 0, 9, 1, 4, 0, 0, 0, 0, 0, 5, 1, 10, 3, 3, 3, 3, 3, 9, 1, 4, 0, 1, 1, 4, 0, 0, 0, 0, 0, 5, 1, 6, 6, 6, 6, 6, 6, 6, 1, 4, 0, 2, 2, 0, 0, 0, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ce = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ue = [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 9, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 8, 0, 0, 11, 11, 11, 11, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 0, 0, 6, 6, 6, 6, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 8, 0, 0, 0, 0, 0, 0, 7, 1, 1, 1, 1, 1, 1, 1, 1, 3, 8, 0, 0, 8, 0, 0, 0, 0, 0, 0, 7, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 6, 4, 1, 1, 1, 1, 1, 1, 8, 11, 11, 11, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 11, 11, 2, 11, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fe = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 2, 1, 2, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 0, 0, 0, 0, 3, 4, 4, 4, 4, 3, 2, 2, 2, 2, 3, 3, 4, 4, 4, 3, 0, 0, 0, 0, 3, 4, 4, 4, 4, 3, 0, 0, 0, 0, 2, 3, 4, 4, 4, 3, 0, 0, 0, 3, 3, 4, 4, 4, 4, 3, 0, 0, 0, 0, 0, 3, 3, 4, 3, 3, 3, 0, 0, 3, 2, 4, 4, 4, 4, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 2, 2, 0, 0, 3, 2, 4, 4, 4, 4, 2, 2, 2, 2, 3, 0, 0, 2, 3, 2, 0, 0, 0, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 0, 0, 3, 0, 0, 0, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 0, 0, 2, 0, 0, 0, 3, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 0, 0, 0, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 3, 3, 0, 0, 0, 3, 3, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 3, 3, 0, 3, 3, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 3, 0, 3, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4],
        pe = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 2, 0, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0, 2, 3, 3, 3, 3],
        he = function () {
            return function (e, t, r) {
                this.animationDelay = e, this.animationIndexCounter = t, this.animationCurrentFrame = r
            }
        }(),
        de = {
            blockw: 32,
            blockh: 32
        },
        ge = function () {
            return function (e, t, r) {
                this.width = t, this.height = r, this.canvas = null, this.context = null, this.canvas = document.getElementById(e), this.context = this.canvas.getContext("2d"), this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this.canvas.setAttribute("style", "width: " + this.width + "px; height: " + this.height + "px;")
            }
        }();
        document.getElementsByClassName('canvas-container')[0].appendChild(((n = document.createElement("canvas")).id = "myCanvas", n.width = 640, n.height = 480, n));
    var me = new ge("myCanvas", 640, 480);
    var ve = {
            i2xy: function (e, t) {
                return function (e, t) {
                    return [e % t, Math.floor(e / t)]
                }(e, t)
            },
            xy2i: function (e, t, r) {
                return function (e, t, r) {
                    return t * r + e
                }(e, t, r)
            }
        },
        ye = 0,
        be = [];
    var we = {
            drawanimation: function (e) {
                ! function (e) {
                    var t = e.various;
                    if (void 0 !== t)
                        if ("number" == typeof t && t >= 0) {
                            var r = ve.i2xy(t, 3);
                            me.context.drawImage(e.sprite, 32 * r[0], 32 * r[1], 32, 32, e.x, e.y, 32, 32)
                        } else null != t.length && t.length > 0 && (be[ye].animationDelay++ >= 3 && (be[ye].animationDelay = -2, be[ye].animationIndexCounter++, be[ye].animationIndexCounter >= t.length && (be[ye].animationIndexCounter = 0), be[ye].animationCurrentFrame = t[be[ye].animationIndexCounter]), r = ve.i2xy(be[ye].animationCurrentFrame, 3), me.context.drawImage(e.sprite, 32 * r[0], 32 * r[1], 32, 32, e.x, e.y, 32, 32), ye++);
                    else me.context.drawImage(e.sprite, e.x, e.y, de.blockw, de.blockh)
                }(e)
            },
            initializeanimationcounters: function () {
                for (var e = 0; e < 32e3; e++) be[e] = new he(0, 0, 0)
            },
            resetanimationcounter: function () {
                ye = 0
            }
        },
        xe = function () {
            function e(e) {
                this.filepath = e, this.TO_RADIANS = Math.PI / 180, this.image = null, this.is_pattern = !1, this.pattern = null, this.pattern_x_times = 0, this.load = function (e) {
                    return this.image = new Image, this.image.src = e, this
                }, this.to_pattern = function (e) {
                    this.pattern_x_times = e, this.pattern = me.context.createPattern(this.image, "repeat"), this.is_pattern = !0
                }, this.spritesheet = null, this.filepath ? this.load(this.filepath) : console.log("Unable to load sprite. Filename " + e + " is not defined")
            }
            return e.prototype.draw = function (e, t, r) {
                var n = {
                    x: e,
                    y: t,
                    various: r,
                    sprite: this.image
                };
                we.drawanimation(n)
            }, e
        }(),
        Ce = new xe("./sprites/cliffgrass_back.png"),
        Ee = new xe("./sprites/cliffgrass_front.png"),
        _e = new xe("./sprites/cliffgrass_leftside.png"),
        Se = new xe("./sprites/cliffgrass_side.png"),
        ke = new xe("./sprites/cliff_front.png"),
        Ae = new xe("./sprites/cliffgrass_topright.png"),
        Oe = new xe("./sprites/cliffgrass_all.png"),
        je = new xe("./sprites/cliffgrass_bottomright.png"),
        Te = new xe("./sprites/cliffgrass_bottomleft.png"),
        Ne = new xe("./sprites/cliffgrass_topleft.png"),
        qe = new xe("./sprites/cliffgrass_uprightbottom.png"),
        Le = new xe("./sprites/cliffgrass_topbottom.png"),
        De = new xe("./sprites/caveentrance_open.png"),
        Re = {
            cliffgrass_back: Ce,
            cliffgrass_front: Ee,
            cliffgrass_left: _e,
            cliffgrass_right: Se,
            cliff_front: ke,
            cliffgrass_topright: Ae,
            cliffgrass_all: Oe,
            cliffgrass_bottomright: je,
            cliffgrass_bottomleft: Te,
            cliffgrass_topleft: Ne,
            cliffgrass_toprightbottom: qe,
            cliffgrass_topbottom: Le,
            cliffentrance_open: De
        },
        Ie = {
            dirt_terrain: new xe("sprites/dirt_terrian.png"),
            cave_terrain: new xe("sprites/cave_terrain.png"),
            grass_terrain: new xe("sprites/grass1.png")
        },
        Pe = new xe("sprites/black_block.png"),
        Fe = {
            blackblock: Pe,
            bush: new xe("sprites/bushV1.png")
        },
        Me = function () {
            function e(e, t, r) {
                this.mapArr = e, this.tileObj = t, this.influenceObject = r, this.BLOCK_W = 32, this.BLOCK_H = 32
            }
            return e.prototype.renderTile = function (e, t, r, n) {
                e[Object.keys(e)[t]].draw(r, n)
            }, e.prototype.tileCollision = function (e) {
                if (e.tileIndex >= e.tileCollisionMin) {
                    if (e.tiley + 20 < this.influenceObject.yCoordinates) return void(this.influenceObject.yCoordinates += 2);
                    if (e.tiley - 10 > this.influenceObject.yCoordinates) return void(this.influenceObject.yCoordinates -= 2);
                    if (e.tilex - 10 > this.influenceObject.xCoordinates) return void(this.influenceObject.xCoordinates -= 2);
                    if (e.tilex + 20 < this.influenceObject.xCoordinates) return void(this.influenceObject.xCoordinates += 2)
                }
            }, e.prototype.renderMap = function (e) {
                for (var t = 0, r = 0; r < 15; r++)
                    for (var n = 0; n < 20; n++, t++) {
                        var o = n * this.BLOCK_W,
                            i = r * this.BLOCK_H,
                            s = this.mapArr[t],
                            a = {
                                tilex: o,
                                tiley: i,
                                tileIndex: s,
                                tileCollisionMin: e
                            };
                        this.influenceObject.playerMoving && this.influenceObject.xCoordinates + 20 > o && this.influenceObject.xCoordinates - 30 < o && this.influenceObject.yCoordinates + 30 > i && this.influenceObject.yCoordinates - 25 < i && this.tileCollision(a), this.renderTile(this.tileObj, s, o, i)
                    }
            }, e.prototype.renderMiscellaneousSprites = function (e, t) {
                for (var r = 0; r < t.length; r++) e.draw(t[r].x, t[r].y)
            }, e
        }();
    var Ue = function (e, t, r, n) {
            var o = r.getBoundingClientRect(),
                i = n.clientX - o.left,
                s = n.clientY - o.top;
            return e.fighting && i > 507 && s > 184 && i < 565 && s < 200 && function (e, t) {
                t.battleTurn || e.disableAttack || (e.battleTurn = !0, e.disableAttack = !0, e.battleMoveForward = !0)
            }(e, t), console.log({
                x: i,
                y: s
            }), {
                x: i,
                y: s
            }
        },
        Be = {
            blackblock: Fe.blackblock,
            grass_terrain: Ie.grass_terrain
        },
        Ve = function () {
            function e() {
                this.limiter = new ie(60), this.victoryScreen = !1
            }
            return e.prototype.draw = function (e, t, r) {
                var n = this;
                (oe.animationid.id = requestAnimationFrame(function () {
                    n.draw(e, t, r)
                }), this.limiter.fpsLimiter()) && (this.limiter.updateCurrentTime(), new Me(ce, Be, e).renderMap(-1), function (e, t) {
                    e.beginPath(), e.fillStyle = "rgba(77,150,255,0.7)", e.fill(), e.fillRect(190, 50, 260, 75), e.closePath(), e.beginPath(), e.fillStyle = "rgba(77,150,255,0.7)", e.fill(), e.fillRect(475, 125, 125, 300), e.closePath(), e.font = "bold 1.2em Arial", screen.width <= 699 && (e.font = "bold 1.3em Arial"), e.shadowColor = "black", e.shadowBlur = 1, e.lineWidth = 1, e.strokeText("Player HP: ", 350, 85), e.strokeText(t.health + "/" + t.maxHealth, 360, 105), e.shadowBlur = 0, e.fillStyle = "white", t.health < t.maxHealth / 3 && (e.fillStyle = "Crimson"), e.fillText("Player HP: ", 350, 85), e.fillText(t.health + "/" + t.maxHealth, 360, 105), e.fill()
                }(me.context, e), function (e, t) {
                    e.font = "bold 1.2em Arial", screen.width <= 699 && (e.font = "bold 1.3em Arial"), e.shadowColor = "black", e.shadowBlur = 1, e.lineWidth = 1, e.strokeText("Potions", 507, 350), e.strokeText("Special", 507, 275), e.strokeText("Attack", 507, 200), e.shadowBlur = 0, e.fillStyle = "white", e.fillText("Potions", 507, 350), e.fillText("Special", 507, 275), t.disableAttack && (e.fillStyle = "grey"), e.fillText("Attack", 507, 200)
                }(me.context, e), function (e, t) {
                    e.font = "bold 1.2em Arial", screen.width <= 699 && (e.font = "bold 1.3em Arial"), e.shadowColor = "black", e.shadowBlur = 1, e.lineWidth = 1, e.strokeText(t.name + " HP: ", 200, 85), e.strokeText(t.health + "/" + t.totalHealth, 230, 105), e.shadowBlur = 0, e.fillStyle = "white", t.health < t.totalHealth / 3 && (e.fillStyle = "Crimson"), e.fillText(t.name + " HP: ", 200, 85), e.fillText(t.health + "/" + t.totalHealth, 230, 105)
                }(me.context, t), e.renderPlayer(), t.renderEnemy(), e.basicAttackSequence(e, t), t.basicAttackSequence(t, e), e.victory && (! function (e, t, r) {
                    e.beginPath(), e.fillStyle = "rgba(77,150,255,0.7)", e.fill(), e.fillRect(190, 350, 260, 75), e.closePath(), e.font = "bold 1.2em Arial", screen.width <= 699 && (e.font = "bold 1.3em Arial"), e.shadowColor = "black", e.shadowBlur = 1, e.lineWidth = 1, e.strokeText(t.name + " Slain!", 200, 370), e.strokeText("+" + t.goldReward + " gold coins", 200, 395), e.strokeText("+" + t.experienceReward + " Experience", 200, 420), e.shadowBlur = 0, e.fillStyle = "white", e.fillText(t.name + " Slain!", 200, 370), e.fillText("+" + t.goldReward + " gold coins", 200, 395), e.fillText("+" + t.experienceReward + " Experience", 200, 420)
                }(me.context, t), this.victoryScreen || (this.victoryScreen = !0, setTimeout(function () {
                    e.resetPlayerBattleStatusToDefault(t), e.playerVictoryRewardSequence(t),
                        function (e, t) {
                            var r = document.getElementById("myCanvas");
                            r.removeEventListener("mousedown", function (n) {
                                Ue(e, t, r, n)
                            })
                        }(e, t), cancelAnimationFrame(oe.animationid.id), ae({
                            playerObject: e,
                            locationClass: r
                        })
                }, 2500))), we.resetanimationcounter())
            }, e
        }(),
        He = {
            playerbasicattack_sprite: new xe("sprites/playerAttack_Spritesheet.png"),
            playersprite: "sprites/character_spritesheet.png"
        },
        Ye = function () {
            function e(e, t, r) {
                this.enemySprite = new xe(e.sprite), this.health = e.health, this.name = e.name, this.totalHealth = e.health, this.defense = e.defense, this.damage = e.damage, this.goldReward = e.goldReward, this.experienceReward = e.experienceReward, this.direction = [0, 0, 0], this.startX = t, this.startY = r, this.patrolled = !1, this.xCoordinates = t, this.yCoordinates = r, this.fighting = !1, this.battleMoveForward = !1, this.battleMoveBackward = !1, this.battleTurn = !1, this.dead = !1
            }
            return e.prototype.renderEnemy = function () {
                this.enemySprite.image.width = 32, this.enemySprite.image.height = 32, this.enemySprite.draw(this.xCoordinates, this.yCoordinates, this.direction)
            }, e.prototype.fightPlayer = function (e, t) {
                if (n = this.xCoordinates, o = this.yCoordinates, i = e.xCoordinates, s = e.yCoordinates, a = n - i, l = o - s, Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2)) <= 32) {
                    var r = new Ve;
                    cancelAnimationFrame(oe.animationid.id), e.fighting = !0, e.direction = [3, 4, 5], e.xCoordinates = 350, e.yCoordinates = 225, this.xCoordinates = 250, this.yCoordinates = 225, this.direction = [6, 7, 8],
                        function (e, t) {
                            var r = document.getElementById("myCanvas");
                            r.addEventListener("mousedown", function (n) {
                                Ue(e, t, r, n)
                            })
                        }(e, this), r.draw(e, this, t)
                }
                var n, o, i, s, a, l
            }, e.prototype.basicAttackSequence = function (e, t) {
                e.battleTurn && (!e.battleMoveBackward && e.battleMoveForward && e.xCoordinates <= 320 && (e.xCoordinates += 2, e.xCoordinates > 312 && He.playerbasicattack_sprite.draw(t.xCoordinates, t.yCoordinates, [0, 0, 0]), 320 === e.xCoordinates && (t.health -= 2 * e.damage, setTimeout(function () {
                    e.battleMoveForward = !1, e.battleMoveBackward = !0
                }, 150))), !e.battleMoveForward && e.battleMoveBackward && e.xCoordinates >= 252 && (e.xCoordinates -= 2, 250 === e.xCoordinates && (e.battleTurn = !1, e.battleMoveBackward = !1, t.disableAttack = !1)))
            }, e
        }(),
        Ge = "sprites/slimeSuper_spritesheet.png",
        We = "sprites/shadewalker_Spritesheet.png",
        Xe = "sprites/shadeKeeper_Spritesheet.png",
        ze = {
            sprite: "sprites/slime_spritesheet.png",
            name: "Green Slime",
            health: 25,
            defense: 0,
            damage: 2,
            goldReward: 10,
            experienceReward: 25
        },
        Ke = function (e) {
            return {
                patrol: function (t, r) {
                    t && Je({
                        entity: e,
                        entityCoordinate: e.xCoordinates,
                        entityStartCoordinate: e.startX,
                        patrolToCoordinate: t,
                        entityCoordinateProp: "xCoordinates"
                    }), r && Je({
                        entity: e,
                        entityCoordinate: e.yCoordinates,
                        entityStartCoordinate: e.startY,
                        patrolToCoordinate: r,
                        entityCoordinateProp: "yCoordinates"
                    })
                }
            }
        };

    function Je(e) {
        ! function (e) {
            e.entityCoordinate === e.patrolToCoordinate && (e.entity.patrolled = !0), e.entityCoordinate === e.entityStartCoordinate && (e.entity.patrolled = !1)
        }(e), e.entity.patrolled && (e.patrolToCoordinate = e.entityStartCoordinate), e.entityCoordinate > e.patrolToCoordinate && (e.entity[e.entityCoordinateProp] -= 1, e.entity.direction = [3, 4, 5]), e.entityCoordinate < e.patrolToCoordinate && (e.entity[e.entityCoordinateProp] += 1, e.entity.direction = [6, 7, 8])
    }
    var Ze = function () {
            return (Ze = Object.assign || function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        },
        $e = Ze({
            grass_terrain: Ie.grass_terrain,
            dirt_terrain: Ie.dirt_terrain
        }, Re),
        Qe = new Ye(ze, 300, 215);
    Object.assign(Qe, Ke(Qe));
    var et = new Ye(ze, 325, 155);
    Object.assign(et, Ke(et));
    var tt = new Ye(ze, 285, 275);
    Object.assign(tt, Ke(tt));
    var rt = new Ye(ze, 525, 155);
    Object.assign(rt, Ke(rt));
    var nt = new Ye(ze, 75, 55);
    Object.assign(nt, Ke(nt));
    var ot = function () {
            function e() {}
            return e.prototype.draw = function (e) {
                var t = new Me(le, $e, e);
                t.renderMap(2);
                for (var r = 0; r < 6; r++) t.renderMiscellaneousSprites(Fe.bush, [{
                    x: 230,
                    y: 300
                }, {
                    x: 400,
                    y: 250
                }, {
                    x: 425,
                    y: 10
                }, {
                    x: 120,
                    y: 100
                }, {
                    x: 125,
                    y: 350
                }]);
                Qe.health > 0 && (Qe.renderEnemy(), Qe.patrol(200), Qe.fightPlayer(e, this)), et.health > 0 && (et.renderEnemy(), et.patrol(250), et.fightPlayer(e, this)), tt.health > 0 && (tt.renderEnemy(), tt.patrol(!1, 380), tt.fightPlayer(e, this)), rt.health > 0 && (rt.renderEnemy(), rt.patrol(450), rt.fightPlayer(e, this)), nt.health > 0 && (nt.renderEnemy(), nt.patrol(300), nt.fightPlayer(e, this));
                for (r = 0; r < St.ridgeArea.transitionLocations.length; r++) {
                    var n = St.ridgeArea.transitionLocations[r];
                    this.transferNewLocation(n.location, {
                        player: e,
                        transferXCoordinate: n.transferXCoordinate,
                        transferYCoordinate: n.transferYCoordinate,
                        playerNewX: n.playerNewX,
                        playerNewY: n.playerNewY
                    })
                }
                we.resetanimationcounter()
            }, e.prototype.transferNewLocation = function (e, t) {
                t.transferXCoordinate - 32 < t.player.xCoordinates && t.transferYCoordinate - 32 < t.player.yCoordinates && t.transferXCoordinate > t.player.xCoordinates && t.transferYCoordinate > t.player.yCoordinates && (cancelAnimationFrame(oe.animationid.id), t.player.setPlayerCoordinates(t.playerNewX, t.playerNewY), ae({
                    playerObject: t.player,
                    locationClass: e
                }))
            }, e
        }(),
        it = {
            grass_terrain: Ie.grass_terrain,
            dirt_terrain: Ie.dirt_terrain,
            cliffentrance_open: De,
            cliffgrass_topleft: Ne,
            cliffgrass_topright: Ae,
            cliffgrass_front: Ee,
            cliffgrass_back: Ce,
            cliffgrass_right: Se,
            cliffgrass_left: _e,
            cliffgrass_bottomright: je,
            cliffgrass_bottomleft: Te,
            cliff_front: ke
        },
        st = new Ye({
            sprite: Ge,
            name: "Slime Super",
            health: 75,
            defense: 0,
            damage: 7,
            goldReward: 30,
            experienceReward: 75
        }, 429, 315);
    Object.assign(st, Ke(st));
    var at = new Ye(ze, 175, 115);
    Object.assign(at, Ke(at));
    var lt = new Ye(ze, 255, 270);
    Object.assign(lt, Ke(lt));
    var ct = function () {
            function e() {}
            return e.prototype.draw = function (e) {
                var t = new Me(ue, it, e);
                t.renderMap(3);
                for (var r = 0; r < 6; r++) t.renderMiscellaneousSprites(Fe.bush, [{
                    x: 450,
                    y: 400
                }, {
                    x: 495,
                    y: 185
                }, {
                    x: 575,
                    y: 75
                }, {
                    x: 50,
                    y: 175
                }, {
                    x: 125,
                    y: 350
                }]);
                st.health > 0 && (st.renderEnemy(), st.direction = [1, 1, 2], st.fightPlayer(e, this)), at.health > 0 && (at.renderEnemy(), at.patrol(350), at.fightPlayer(e, this)), lt.health > 0 && (lt.renderEnemy(), lt.patrol(350), lt.fightPlayer(e, this));
                for (r = 0; r < St.ridgeAreaCave.transitionLocations.length; r++) {
                    var n = St.ridgeAreaCave.transitionLocations[r];
                    this.transferNewLocation(n.location, {
                        player: e,
                        transferXCoordinate: n.transferXCoordinate,
                        transferYCoordinate: n.transferYCoordinate,
                        playerNewX: n.playerNewX,
                        playerNewY: n.playerNewY
                    })
                }
                we.resetanimationcounter()
            }, e.prototype.transferNewLocation = function (e, t) {
                t.transferXCoordinate - 32 < t.player.xCoordinates && t.transferYCoordinate - 32 < t.player.yCoordinates && t.transferXCoordinate > t.player.xCoordinates && t.transferYCoordinate > t.player.yCoordinates && (cancelAnimationFrame(oe.animationid.id), t.player.setPlayerCoordinates(t.playerNewX, t.playerNewY), ae({
                    playerObject: t.player,
                    locationClass: e
                }))
            }, e
        }(),
        ut = new xe("sprites/cave_wall.png"),
        ft = new xe("sprites/cave_ceiling.png"),
        pt = new xe("sprites/cave_openingdoor.png"),
        ht = {
            sprite: We,
            name: "Shade Walker",
            health: 50,
            defense: 0,
            damage: 5,
            goldReward: 25,
            experienceReward: 50
        },
        dt = {
            cave_wall: ut,
            cave_opening: pt,
            cave_terrain: Ie.cave_terrain,
            cave_ceiling: ft,
            blackblock: Pe
        },
        gt = new Ye(ht, 100, 150);
    Object.assign(gt, Ke(gt));
    var mt = new Ye(ht, 480, 65);
    Object.assign(mt, Ke(mt));
    var vt = function () {
            function e() {}
            return e.prototype.draw = function (e) {
                new Me(fe, dt, e).renderMap(2), gt.health > 0 && (gt.renderEnemy(), gt.patrol(200), gt.fightPlayer(e, this)), mt.health > 0 && (mt.renderEnemy(), mt.direction = [1, 1, 2], mt.fightPlayer(e, this));
                for (var t = 0; t < St.ridgeAreaCaveLevelOne.transitionLocations.length; t++) {
                    var r = St.ridgeAreaCaveLevelOne.transitionLocations[t];
                    this.transferNewLocation(r.location, {
                        player: e,
                        transferXCoordinate: r.transferXCoordinate,
                        transferYCoordinate: r.transferYCoordinate,
                        playerNewX: r.playerNewX,
                        playerNewY: r.playerNewY
                    })
                }
                we.resetanimationcounter()
            }, e.prototype.transferNewLocation = function (e, t) {
                t.transferXCoordinate - 32 < t.player.xCoordinates && t.transferYCoordinate - 32 < t.player.yCoordinates && t.transferXCoordinate > t.player.xCoordinates && t.transferYCoordinate > t.player.yCoordinates && (cancelAnimationFrame(oe.animationid.id), t.player.setPlayerCoordinates(t.playerNewX, t.playerNewY), ae({
                    playerObject: t.player,
                    locationClass: e
                }))
            }, e
        }(),
        yt = {
            cave_wall: ut,
            cave_terrain: Ie.cave_terrain,
            cave_ceiling: ft,
            blackblock: Pe
        },
        bt = new Ye({
            sprite: Xe,
            name: "Shade Keeper",
            health: 100,
            defense: 0,
            damage: 7,
            goldReward: 50,
            experienceReward: 100
        }, 275, 200);
    Object.assign(bt, Ke(bt));
    var wt = function () {
            function e() {}
            return e.prototype.draw = function (e) {
                new Me(pe, yt, e).renderMap(1), bt.health > 0 && (bt.renderEnemy(), bt.direction = [6, 6, 7], bt.fightPlayer(e, this));
                for (var t = 0; t < St.ridgeAreaCaveLevelTwo.transitionLocations.length; t++) {
                    var r = St.ridgeAreaCaveLevelTwo.transitionLocations[t];
                    this.transferNewLocation(r.location, {
                        player: e,
                        transferXCoordinate: r.transferXCoordinate,
                        transferYCoordinate: r.transferYCoordinate,
                        playerNewX: r.playerNewX,
                        playerNewY: r.playerNewY
                    })
                }
                we.resetanimationcounter()
            }, e.prototype.transferNewLocation = function (e, t) {
                t.transferXCoordinate - 32 < t.player.xCoordinates && t.transferYCoordinate - 32 < t.player.yCoordinates && t.transferXCoordinate > t.player.xCoordinates && t.transferYCoordinate > t.player.yCoordinates && (cancelAnimationFrame(oe.animationid.id), t.player.setPlayerCoordinates(t.playerNewX, t.playerNewY), ae({
                    playerObject: t.player,
                    locationClass: e
                }))
            }, e
        }(),
        xt = new ot,
        Ct = new ct,
        Et = new vt,
        _t = new wt,
        St = {
            ridgeArea: {
                location: xt,
                transitionLocations: [{
                    location: Ct,
                    transferXCoordinate: 635,
                    transferYCoordinate: 120,
                    playerNewX: 40,
                    playerNewY: 95
                }]
            },
            ridgeAreaCave: {
                location: Ct,
                transitionLocations: [{
                    location: xt,
                    transferXCoordinate: 9,
                    transferYCoordinate: 100,
                    playerNewX: 590,
                    playerNewY: 95
                }, {
                    location: Et,
                    transferXCoordinate: 495,
                    transferYCoordinate: 310,
                    playerNewX: 320,
                    playerNewY: 427
                }]
            },
            ridgeAreaCaveLevelOne: {
                location: Et,
                transitionLocations: [{
                    location: Ct,
                    transferXCoordinate: 330,
                    transferYCoordinate: 480,
                    playerNewX: 485,
                    playerNewY: 325
                }, {
                    location: _t,
                    transferXCoordinate: 496,
                    transferYCoordinate: 52,
                    playerNewX: 450,
                    playerNewY: 436
                }]
            },
            ridgeAreaCaveLevelTwo: {
                location: _t,
                transitionLocations: [{
                    location: Et,
                    transferXCoordinate: 460,
                    transferYCoordinate: 475,
                    playerNewX: 484,
                    playerNewY: 75
                }]
            }
        },
        kt = function () {
            function e(e) {
                this.influenceObject = e, this.w = !1, this.a = !1, this.s = !1, this.d = !1, this.keyBoardOff = !1, this.escapeToggle = 0, this.KEY_W = 87, this.KEY_A = 65, this.KEY_S = 83, this.KEY_D = 68, this.KEY_ESCAPE = 27
            }
            return e.prototype.intializeKeyBoardEvents = function () {
                var e = this;
                window.addEventListener("keydown", function (t) {
                    if (e.influenceObject.fighting) return e.influenceObject.playerMoving = !1, void e.setKeysToFalse();
                    switch (t.keyCode) {
                        case e.KEY_W:
                            e.w = !0, e.influenceObject.playerMoving = !0;
                            break;
                        case e.KEY_A:
                            e.a = !0, e.influenceObject.playerMoving = !0;
                            break;
                        case e.KEY_S:
                            e.s = !0, e.influenceObject.playerMoving = !0;
                            break;
                        case e.KEY_D:
                            e.d = !0, e.influenceObject.playerMoving = !0;
                            break;
                        case e.KEY_ESCAPE:
                            e.escapeToggle++
                    }
                }), window.addEventListener("keyup", function (t) {
                    if (e.influenceObject.fighting) return e.influenceObject.playerMoving = !1, void e.setKeysToFalse();
                    switch (t.keyCode) {
                        case e.KEY_W:
                            e.w = !1, e.influenceObject.direction = [9];
                            break;
                        case e.KEY_A:
                            e.a = !1, e.influenceObject.direction = [3];
                            break;
                        case e.KEY_S:
                            e.s = !1, e.influenceObject.direction = [0];
                            break;
                        case e.KEY_D:
                            e.d = !1, e.influenceObject.direction = [6];
                            break;
                        case e.KEY_ESCAPE:
                    }
                    e.KEY_W || e.KEY_A || e.KEY_S || e.KEY_D || (e.influenceObject.playerMoving = !1)
                })
            }, e.prototype.keyboardPlayerMovement = function () {
                if (this.influenceObject.fighting) return this.influenceObject.playerMoving = !1, void this.setKeysToFalse();
                this.w && (this.influenceObject.yCoordinates -= 2, this.influenceObject.direction = [9, 10, 11]), this.a && (this.influenceObject.xCoordinates -= 2, this.influenceObject.direction = [3, 4, 5]), this.s && (this.influenceObject.yCoordinates += 2, this.influenceObject.direction = [0, 1, 2]), this.d && (this.influenceObject.xCoordinates += 2, this.influenceObject.direction = [6, 7, 8])
            }, e.prototype.checkToDisplayUserMenu = function (e) {
                e.displayPlayerMenu(), 2 === this.escapeToggle && (this.escapeToggle = 0)
            }, e.prototype.setKeysToFalse = function () {
                this.w = !1, this.a = !1, this.s = !1, this.d = !1
            }, e
        }();
    var At = [225, 545, 810, 943, 1031, 1713, 2711, 3662, 4561, 5533, 5747, 6080, 6483, 6977, 7345, 7378, 7888, 8068, 8590, 8657, 9068, 9767, 10558, 10857, 11448, 11915, 12681, 13183, 13476, 14356, 15242, 15498, 15694, 16452, 16513, 16836, 17149, 17902, 18065, 18633, 18808, 19165, 19624, 20568, 20964, 21950, 21968, 22239, 23100, 23186, 24083, 25030, 25442, 25697, 26431, 26720, 27215, 27368, 28355, 28662, 29615, 29808, 30080, 31003, 31586, 32484, 33371, 34228, 35144, 35749, 36200, 36288, 37254, 37305, 38227, 38826, 39079, 39284, 39574, 40250, 40626, 40914, 41339, 41623, 42168, 43034, 43928, 44659, 45430, 46291, 46471, 46875, 47780, 48559, 49314, 50017, 50198, 50542, 50935, 50944],
        Ot = function () {
            function e(e) {
                this.playerSprite = new xe(e), this.strength = 5, this.stamina = 10, this.agility = 6, this.luck = 3, this.intelligence = 4, this.health = 100, this.maxHealth = 100, this.defense = 0, this.level = 1, this.hitchance = 76, this.critchance = 5, this.direction = [0, 0, 0], this.playerhit = Math.floor(Math.random() * Math.floor(100)) <= this.hitchance, this.xCoordinates = 30, this.yCoordinates = 90, this.damage = 4 * this.strength, this.playerMoving = !1, this.gold = 0, this.experience = 0, this.fighting = !1, this.battleTurn = !1, this.battleMoveForward = !1, this.battleMoveBackward = !1, this.disableAttack = !1, this.victory = !1, this.keyboard = new kt(this)
            }
            return e.prototype.playerVictoryRewardSequence = function (e) {
                this.gold += e.goldReward, this.experience += e.experienceReward, this.levelPlayer()
            }, e.prototype.levelPlayer = function () {
                for (var e = 1, t = 0; t < At.length && this.experience >= At[t]; t++) e++;
                e > this.level && (this.level = e, this.levelUpPlayerStats(), this.levelUpHealPlayer())
            }, e.prototype.levelUpHealPlayer = function () {
                this.health = this.maxHealth
            }, e.prototype.levelUpPlayerStats = function () {
                this.maxHealth += 50 + Math.ceil(.3 * this.stamina), this.strength += Math.ceil(4 * Math.random()), this.stamina += Math.ceil(4 * Math.random()), this.agility += Math.ceil(4 * Math.random()), this.intelligence += Math.ceil(4 * Math.random()), this.luck += Math.ceil(2 * Math.random()), this.damage += Math.ceil(4 * Math.random())
            }, e.prototype.setPlayerCoordinates = function (e, t) {
                this.xCoordinates = e, this.yCoordinates = t
            }, e.prototype.renderPlayer = function () {
                this.playerSprite.image.width = 32, this.playerSprite.image.height = 32, this.playerSprite.draw(this.xCoordinates, this.yCoordinates, this.direction)
            }, e.prototype.displayPlayerMenu = function () {
                ! function (e, t) {
                    e.beginPath(), e.fillStyle = "rgba(32,216,219,0.75)", e.fillRect(0, 0, e.canvas.offsetWidth, e.canvas.offsetHeight), e.closePath(), e.fill(), e.beginPath(), e.fillStyle = "white", e.moveTo(200, 0), e.lineTo(200, 480), e.stroke(), e.fillStyle = "white", e.moveTo(650, 200), e.lineTo(200, 200), e.stroke(), e.closePath(), e.beginPath(), e.font = "bold 1.5em Arial", e.fillStyle = "black", e.fillText("Status", 210, 40), e.font = "bold 1em Arial", e.fillText("ATK: " + t.damage, 225, 80), e.font = "bold 1em Arial", e.fillText("STR: " + t.strength, 225, 110), e.font = "bold 1em Arial", e.fillText("AGI: " + t.agility, 225, 140), e.font = "bold 1em Arial", e.fillStyle = "black", e.fillText("DEF: " + t.defense, 225, 170), e.font = "bold 1em Arial", e.fillStyle = "black", e.fillText("HP: " + t.health + "/" + t.maxHealth, 400, 80), e.font = "bold 1em Arial", e.fillStyle = "black", e.fillText("Hit Chance: " + t.hitchance + "%", 400, 110), e.font = "bold 1em Arial", e.fillStyle = "black", e.fillText("Crit Chance: " + t.critchance + "%", 400, 140), e.font = "bold 1.5em Arial", e.fillStyle = "black", e.fillText("Current", 210, 225), e.font = "bold 1em Arial", e.fillStyle = "black", e.fillText("Level: " + t.level, 225, 250), e.font = "bold 1em Arial", e.fillStyle = "black", e.fillText("Gold: " + t.gold, 225, 290), e.fillStyle = "black", e.fillText("XP: " + t.experience, 225, 320), e.fill(), e.closePath(), e.beginPath(), e.font = "bold 1.5em Arial", e.fillStyle = "black", e.fillText("Save", 35, 85), e.fill(), e.closePath(), e.beginPath(), e.font = "bold 1.5em Arial", e.fillStyle = "black", e.fillText("Exit Game", 35, 130), e.fill(), e.closePath(), e.beginPath(), e.font = "bold 1.5em Arial", e.fillStyle = "black", e.fillText("Equipment", 35, 40), e.fill(), e.closePath()
                }(me.context, this)
            }, e.prototype.basicAttackSequence = function (e, t) {
                if (e.battleTurn) {
                    if (!e.battleMoveBackward && e.battleMoveForward && e.xCoordinates >= 280 && (e.xCoordinates -= 2, e.xCoordinates < 288 && He.playerbasicattack_sprite.draw(t.xCoordinates, t.yCoordinates, [0, 0, 0]), 280 === e.xCoordinates && (setTimeout(function () {
                            e.battleMoveForward = !1, e.battleMoveBackward = !0
                        }, 150), t.health -= e.damage < t.health ? e.damage : t.health, t.health <= 0))) return t.direction = [0, 0, 0], e.battleTurn = !1, e.battleMoveForward = !1, void(e.victory = !0);
                    !e.battleMoveForward && e.battleMoveBackward && e.xCoordinates <= 348 && (e.xCoordinates += 2, 350 === e.xCoordinates && (e.battleTurn = !1, e.battleMoveBackward = !1, t.battleTurn = !0, t.battleMoveForward = !0))
                }
            }, e.prototype.resetPlayerBattleStatusToDefault = function (e) {
                this.victory = !1, this.disableAttack = !1, this.xCoordinates = e.startX, this.yCoordinates = e.startY, this.fighting = !1, this.direction = [0, 0, 0], this.battleMoveBackward = !1
            }, e
        }();
    console.log(i.a, a.a, c.a, a.a, f.a, h.a, g.a, v.a, b.a, x.a, E.a, S.a, A.a, j.a, N.a, L.a, R.a, P.a, M.a, B.a, H.a, G.a, X.a, K.a, Z.a, Q.a, te.a, ne.a, L.a, N.a, j.a);
    var jt = new Ot("sprites/character_spritesheet.png"),
        Tt = St.ridgeArea.location;
    jt.keyboard.intializeKeyBoardEvents(), we.initializeanimationcounters(), ae({
        playerObject: jt,
        locationClass: Tt
    })
}]);