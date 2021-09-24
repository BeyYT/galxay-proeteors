gdjs.New_32scene6Code = {};
gdjs.New_32scene6Code.GDNewObjectObjects1= [];
gdjs.New_32scene6Code.GDNewObjectObjects2= [];
gdjs.New_32scene6Code.GDNewObject2Objects1= [];
gdjs.New_32scene6Code.GDNewObject2Objects2= [];
gdjs.New_32scene6Code.GDNewObject32222Objects1= [];
gdjs.New_32scene6Code.GDNewObject32222Objects2= [];
gdjs.New_32scene6Code.GDNewObject3222Objects1= [];
gdjs.New_32scene6Code.GDNewObject3222Objects2= [];
gdjs.New_32scene6Code.GDNewObject322Objects1= [];
gdjs.New_32scene6Code.GDNewObject322Objects2= [];
gdjs.New_32scene6Code.GDNewObject32Objects1= [];
gdjs.New_32scene6Code.GDNewObject32Objects2= [];
gdjs.New_32scene6Code.GDNewObject3Objects1= [];
gdjs.New_32scene6Code.GDNewObject3Objects2= [];
gdjs.New_32scene6Code.GDNewObject4Objects1= [];
gdjs.New_32scene6Code.GDNewObject4Objects2= [];
gdjs.New_32scene6Code.GDNewObject5Objects1= [];
gdjs.New_32scene6Code.GDNewObject5Objects2= [];

gdjs.New_32scene6Code.conditionTrue_0 = {val:false};
gdjs.New_32scene6Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene6Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene6Code.condition2IsTrue_0 = {val:false};
gdjs.New_32scene6Code.condition3IsTrue_0 = {val:false};


gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.New_32scene6Code.GDNewObjectObjects1});gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.New_32scene6Code.GDNewObjectObjects1});gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.New_32scene6Code.GDNewObjectObjects1});gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.New_32scene6Code.GDNewObjectObjects1});gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene6Code.GDNewObject3Objects1});gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObject32Objects1Objects = Hashtable.newFrom({"NewObject32": gdjs.New_32scene6Code.GDNewObject32Objects1});gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObject3222Objects1Objects = Hashtable.newFrom({"NewObject3222": gdjs.New_32scene6Code.GDNewObject3222Objects1});gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObject32222Objects1Objects = Hashtable.newFrom({"NewObject32222": gdjs.New_32scene6Code.GDNewObject32222Objects1});gdjs.New_32scene6Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene6Code.GDNewObjectObjects1);

gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
gdjs.New_32scene6Code.condition1IsTrue_0.val = false;
gdjs.New_32scene6Code.condition2IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene6Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene6Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32scene6Code.condition1IsTrue_0.val ) {
{
gdjs.New_32scene6Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
}
if (gdjs.New_32scene6Code.condition2IsTrue_0.val) {
{gdjs.fileSystem.loadStringFromFile(runtimeScene.getVariables().getFromIndex(1), gdjs.fileSystem.getDesktopPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "score.sav", runtimeScene.getVariables().getFromIndex(6));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene6Code.GDNewObjectObjects1);

gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
gdjs.New_32scene6Code.condition1IsTrue_0.val = false;
gdjs.New_32scene6Code.condition2IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene6Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene6Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32scene6Code.condition1IsTrue_0.val ) {
{
gdjs.New_32scene6Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}}
}
if (gdjs.New_32scene6Code.condition2IsTrue_0.val) {
{gdjs.fileSystem.loadStringFromFile(runtimeScene.getVariables().getFromIndex(2), gdjs.fileSystem.getDesktopPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "skin.sav", runtimeScene.getVariables().getFromIndex(6));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "skins", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene6Code.GDNewObjectObjects1);

gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
gdjs.New_32scene6Code.condition1IsTrue_0.val = false;
gdjs.New_32scene6Code.condition2IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene6Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene6Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32scene6Code.condition1IsTrue_0.val ) {
{
gdjs.New_32scene6Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}}
}
if (gdjs.New_32scene6Code.condition2IsTrue_0.val) {
{gdjs.fileSystem.loadStringFromFile(runtimeScene.getVariables().getFromIndex(4), gdjs.fileSystem.getDesktopPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "skbuy.sav", runtimeScene.getVariables().getFromIndex(6));
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene6Code.GDNewObjectObjects1);

gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
gdjs.New_32scene6Code.condition1IsTrue_0.val = false;
gdjs.New_32scene6Code.condition2IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene6Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene6Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32scene6Code.condition1IsTrue_0.val ) {
{
gdjs.New_32scene6Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}}
}
if (gdjs.New_32scene6Code.condition2IsTrue_0.val) {
{gdjs.fileSystem.loadStringFromFile(runtimeScene.getVariables().getFromIndex(5), gdjs.fileSystem.getDesktopPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "name.sav", runtimeScene.getVariables().getFromIndex(6));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene6Code.GDNewObject3Objects1);

gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
gdjs.New_32scene6Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene6Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene6Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene6Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject32"), gdjs.New_32scene6Code.GDNewObject32Objects1);

gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
gdjs.New_32scene6Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObject32Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene6Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene6Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene6Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3222"), gdjs.New_32scene6Code.GDNewObject3222Objects1);

gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
gdjs.New_32scene6Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObject3222Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene6Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene6Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene6Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(4);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject32222"), gdjs.New_32scene6Code.GDNewObject32222Objects1);

gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
gdjs.New_32scene6Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene6Code.mapOfGDgdjs_46New_9532scene6Code_46GDNewObject32222Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene6Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene6Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene6Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}}

}


{


gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.New_32scene6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene6Code.GDNewObject4Objects1);
{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject4Objects1[i].setString("error: no sav selected");
}
}{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject4Objects1[i].setColor("255;255;255");
}
}}

}


{


gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.New_32scene6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene6Code.GDNewObject4Objects1);
{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject4Objects1[i].setString("score");
}
}{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject4Objects1[i].setColor("0;0;0");
}
}}

}


{


gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.New_32scene6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene6Code.GDNewObject4Objects1);
{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject4Objects1[i].setString("skin");
}
}{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject4Objects1[i].setColor("0;0;0");
}
}}

}


{


gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.New_32scene6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene6Code.GDNewObject4Objects1);
{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject4Objects1[i].setString("coins");
}
}{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject4Objects1[i].setColor("0;0;0");
}
}}

}


{


gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if (gdjs.New_32scene6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene6Code.GDNewObject4Objects1);
{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject4Objects1[i].setString("items");
}
}{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject4Objects1[i].setColor("0;0;0");
}
}}

}


{


gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if (gdjs.New_32scene6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene6Code.GDNewObject4Objects1);
{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject4Objects1[i].setString("name");
}
}{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject4Objects1[i].setColor("0;0;0");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene6Code.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.New_32scene6Code.GDNewObject5Objects1);
{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject4Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.New_32scene6Code.GDNewObject4Objects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject5Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.New_32scene6Code.GDNewObject5Objects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.New_32scene6Code.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.New_32scene6Code.GDNewObject5Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}
}}

}


{


gdjs.New_32scene6Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene6Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.New_32scene6Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.New_32scene6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene6Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene6Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene6Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene6Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene6Code.GDNewObject32222Objects1.length = 0;
gdjs.New_32scene6Code.GDNewObject32222Objects2.length = 0;
gdjs.New_32scene6Code.GDNewObject3222Objects1.length = 0;
gdjs.New_32scene6Code.GDNewObject3222Objects2.length = 0;
gdjs.New_32scene6Code.GDNewObject322Objects1.length = 0;
gdjs.New_32scene6Code.GDNewObject322Objects2.length = 0;
gdjs.New_32scene6Code.GDNewObject32Objects1.length = 0;
gdjs.New_32scene6Code.GDNewObject32Objects2.length = 0;
gdjs.New_32scene6Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene6Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene6Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene6Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene6Code.GDNewObject5Objects1.length = 0;
gdjs.New_32scene6Code.GDNewObject5Objects2.length = 0;

gdjs.New_32scene6Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene6Code'] = gdjs.New_32scene6Code;
