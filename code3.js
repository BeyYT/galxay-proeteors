gdjs.New_32scene5Code = {};
gdjs.New_32scene5Code.GDNewObject322Objects1= [];
gdjs.New_32scene5Code.GDNewObject322Objects2= [];
gdjs.New_32scene5Code.GDNewObject22Objects1= [];
gdjs.New_32scene5Code.GDNewObject22Objects2= [];
gdjs.New_32scene5Code.GDNewObject2Objects1= [];
gdjs.New_32scene5Code.GDNewObject2Objects2= [];
gdjs.New_32scene5Code.GDNewObjectObjects1= [];
gdjs.New_32scene5Code.GDNewObjectObjects2= [];
gdjs.New_32scene5Code.GDNewObject32Objects1= [];
gdjs.New_32scene5Code.GDNewObject32Objects2= [];
gdjs.New_32scene5Code.GDNewObject3Objects1= [];
gdjs.New_32scene5Code.GDNewObject3Objects2= [];
gdjs.New_32scene5Code.GDNewObject4Objects1= [];
gdjs.New_32scene5Code.GDNewObject4Objects2= [];
gdjs.New_32scene5Code.GDNewObject5Objects1= [];
gdjs.New_32scene5Code.GDNewObject5Objects2= [];
gdjs.New_32scene5Code.GDNewObject6Objects1= [];
gdjs.New_32scene5Code.GDNewObject6Objects2= [];
gdjs.New_32scene5Code.GDNewObject7Objects1= [];
gdjs.New_32scene5Code.GDNewObject7Objects2= [];
gdjs.New_32scene5Code.GDNewObject8Objects1= [];
gdjs.New_32scene5Code.GDNewObject8Objects2= [];
gdjs.New_32scene5Code.GDNewObject9Objects1= [];
gdjs.New_32scene5Code.GDNewObject9Objects2= [];

gdjs.New_32scene5Code.conditionTrue_0 = {val:false};
gdjs.New_32scene5Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene5Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene5Code.condition2IsTrue_0 = {val:false};


gdjs.New_32scene5Code.mapOfGDgdjs_46New_9532scene5Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene5Code.GDNewObject2Objects1});gdjs.New_32scene5Code.mapOfGDgdjs_46New_9532scene5Code_46GDNewObject22Objects1Objects = Hashtable.newFrom({"NewObject22": gdjs.New_32scene5Code.GDNewObject22Objects1});gdjs.New_32scene5Code.mapOfGDgdjs_46New_9532scene5Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.New_32scene5Code.GDNewObjectObjects1});gdjs.New_32scene5Code.mapOfGDgdjs_46New_9532scene5Code_46GDNewObject8Objects1Objects = Hashtable.newFrom({"NewObject8": gdjs.New_32scene5Code.GDNewObject8Objects1});gdjs.New_32scene5Code.mapOfGDgdjs_46New_9532scene5Code_46GDNewObject9Objects1Objects = Hashtable.newFrom({"NewObject9": gdjs.New_32scene5Code.GDNewObject9Objects1});gdjs.New_32scene5Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene5Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene5Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene5Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject22"), gdjs.New_32scene5Code.GDNewObject22Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.New_32scene5Code.GDNewObject5Objects1);
{for(var i = 0, len = gdjs.New_32scene5Code.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.New_32scene5Code.GDNewObject5Objects1[i].setLayer("0");
}
}{for(var i = 0, len = gdjs.New_32scene5Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene5Code.GDNewObject2Objects1[i].setLayer("1");
}
}{for(var i = 0, len = gdjs.New_32scene5Code.GDNewObject22Objects1.length ;i < len;++i) {
    gdjs.New_32scene5Code.GDNewObject22Objects1[i].setLayer("1");
}
}{for(var i = 0, len = gdjs.New_32scene5Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene5Code.GDNewObjectObjects1[i].setLayer("1");
}
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 640, 480);
}{gdjs.evtTools.storage.readNumberFromJSONFile("str", "skins", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("str", "joyconr", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Main_Menu_edit.mp3", 2, true, 99, 1);
}{gdjs.adMob.setupBanner("ca-app-pub-1132060138444437/3270565639", "", true);
}{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene5Code.GDNewObject2Objects1);

gdjs.New_32scene5Code.condition0IsTrue_0.val = false;
gdjs.New_32scene5Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene5Code.mapOfGDgdjs_46New_9532scene5Code_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene5Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Skins");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject22"), gdjs.New_32scene5Code.GDNewObject22Objects1);

gdjs.New_32scene5Code.condition0IsTrue_0.val = false;
gdjs.New_32scene5Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene5Code.mapOfGDgdjs_46New_9532scene5Code_46GDNewObject22Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene5Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene3", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene5Code.GDNewObjectObjects1);

gdjs.New_32scene5Code.condition0IsTrue_0.val = false;
gdjs.New_32scene5Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene5Code.mapOfGDgdjs_46New_9532scene5Code_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene5Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "inflvl", true);
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject8"), gdjs.New_32scene5Code.GDNewObject8Objects1);

gdjs.New_32scene5Code.condition0IsTrue_0.val = false;
gdjs.New_32scene5Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene5Code.mapOfGDgdjs_46New_9532scene5Code_46GDNewObject8Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene5Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.New_32scene5Code.GDNewObject9Objects1);

gdjs.New_32scene5Code.condition0IsTrue_0.val = false;
gdjs.New_32scene5Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene5Code.mapOfGDgdjs_46New_9532scene5Code_46GDNewObject9Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene5Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://beyyt.github.io/BeyYT-Website/patchnotes.html", runtimeScene);
}}

}


{


gdjs.New_32scene5Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.New_32scene5Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "skins", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


{


gdjs.New_32scene5Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene5Code.condition0IsTrue_0.val) {
{gdjs.adMob.showBanner();
}}

}


};

gdjs.New_32scene5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene5Code.GDNewObject322Objects1.length = 0;
gdjs.New_32scene5Code.GDNewObject322Objects2.length = 0;
gdjs.New_32scene5Code.GDNewObject22Objects1.length = 0;
gdjs.New_32scene5Code.GDNewObject22Objects2.length = 0;
gdjs.New_32scene5Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene5Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene5Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene5Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene5Code.GDNewObject32Objects1.length = 0;
gdjs.New_32scene5Code.GDNewObject32Objects2.length = 0;
gdjs.New_32scene5Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene5Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene5Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene5Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene5Code.GDNewObject5Objects1.length = 0;
gdjs.New_32scene5Code.GDNewObject5Objects2.length = 0;
gdjs.New_32scene5Code.GDNewObject6Objects1.length = 0;
gdjs.New_32scene5Code.GDNewObject6Objects2.length = 0;
gdjs.New_32scene5Code.GDNewObject7Objects1.length = 0;
gdjs.New_32scene5Code.GDNewObject7Objects2.length = 0;
gdjs.New_32scene5Code.GDNewObject8Objects1.length = 0;
gdjs.New_32scene5Code.GDNewObject8Objects2.length = 0;
gdjs.New_32scene5Code.GDNewObject9Objects1.length = 0;
gdjs.New_32scene5Code.GDNewObject9Objects2.length = 0;

gdjs.New_32scene5Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene5Code'] = gdjs.New_32scene5Code;
