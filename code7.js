gdjs.Multiplayer_95Game1Code = {};
gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1= [];
gdjs.Multiplayer_95Game1Code.GDNewObjectObjects2= [];
gdjs.Multiplayer_95Game1Code.GDNewObjectObjects3= [];
gdjs.Multiplayer_95Game1Code.GDNewObject2Objects1= [];
gdjs.Multiplayer_95Game1Code.GDNewObject2Objects2= [];
gdjs.Multiplayer_95Game1Code.GDNewObject2Objects3= [];
gdjs.Multiplayer_95Game1Code.GDplayer1Objects1= [];
gdjs.Multiplayer_95Game1Code.GDplayer1Objects2= [];
gdjs.Multiplayer_95Game1Code.GDplayer1Objects3= [];
gdjs.Multiplayer_95Game1Code.GDplayer2Objects1= [];
gdjs.Multiplayer_95Game1Code.GDplayer2Objects2= [];
gdjs.Multiplayer_95Game1Code.GDplayer2Objects3= [];
gdjs.Multiplayer_95Game1Code.GDNewObject3Objects1= [];
gdjs.Multiplayer_95Game1Code.GDNewObject3Objects2= [];
gdjs.Multiplayer_95Game1Code.GDNewObject3Objects3= [];
gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1= [];
gdjs.Multiplayer_95Game1Code.GDNewObject4Objects2= [];
gdjs.Multiplayer_95Game1Code.GDNewObject4Objects3= [];
gdjs.Multiplayer_95Game1Code.GDNewObject52Objects1= [];
gdjs.Multiplayer_95Game1Code.GDNewObject52Objects2= [];
gdjs.Multiplayer_95Game1Code.GDNewObject52Objects3= [];
gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1= [];
gdjs.Multiplayer_95Game1Code.GDNewObject5Objects2= [];
gdjs.Multiplayer_95Game1Code.GDNewObject5Objects3= [];
gdjs.Multiplayer_95Game1Code.GDborderObjects1= [];
gdjs.Multiplayer_95Game1Code.GDborderObjects2= [];
gdjs.Multiplayer_95Game1Code.GDborderObjects3= [];
gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects1= [];
gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects2= [];
gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects3= [];
gdjs.Multiplayer_95Game1Code.GDNewObject6Objects1= [];
gdjs.Multiplayer_95Game1Code.GDNewObject6Objects2= [];
gdjs.Multiplayer_95Game1Code.GDNewObject6Objects3= [];

gdjs.Multiplayer_95Game1Code.conditionTrue_0 = {val:false};
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0 = {val:false};
gdjs.Multiplayer_95Game1Code.condition1IsTrue_0 = {val:false};


gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDplayer1Objects1Objects = Hashtable.newFrom({"player1": gdjs.Multiplayer_95Game1Code.GDplayer1Objects1});gdjs.Multiplayer_95Game1Code.eventsList0 = function(runtimeScene) {

{


{
/* Reuse gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDplayer2Objects1Objects = Hashtable.newFrom({"player2": gdjs.Multiplayer_95Game1Code.GDplayer2Objects1});gdjs.Multiplayer_95Game1Code.eventsList1 = function(runtimeScene) {

{


{
/* Reuse gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDborderObjects1Objects = Hashtable.newFrom({"border": gdjs.Multiplayer_95Game1Code.GDborderObjects1});gdjs.Multiplayer_95Game1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("border"), gdjs.Multiplayer_95Game1Code.GDborderObjects1);

gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDborderObjects1Objects, runtimeScene, true, false);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects1);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects1[i].setPosition(33,20);
}
}}

}


};gdjs.Multiplayer_95Game1Code.eventsList3 = function(runtimeScene) {

{



}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects2);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects2[i].addForce(0, -(30), 0);
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects2[i].setAnimationName("up");
}
}{gdjs.evtTools.p2p.sendDataToAll("player1ypos", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "w"));
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects2);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects2[i].setAnimationName("idle");
}
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects2);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects2[i].addForce(0, 30, 0);
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects2[i].setAnimationName("down");
}
}{gdjs.evtTools.p2p.sendDataToAll("player1ypos", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects2);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects2[i].setAnimationName("idle");
}
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects2);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects2[i].addForce(-(30), 0, 0);
}
}{gdjs.evtTools.p2p.sendDataToAll("player1xpos", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects2);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects2[i].addForce(30, 0, 0);
}
}{gdjs.evtTools.p2p.sendDataToAll("player1xpos", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects2);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects2[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.p2p.sendDataToAll("player1ypos", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}{gdjs.evtTools.p2p.sendDataToAll("player1xpos", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Multiplayer_95Game1Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDborderObjects1Objects = Hashtable.newFrom({"border": gdjs.Multiplayer_95Game1Code.GDborderObjects1});gdjs.Multiplayer_95Game1Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("border"), gdjs.Multiplayer_95Game1Code.GDborderObjects1);

gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDborderObjects1Objects, runtimeScene, true, false);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects1);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects1[i].setPosition(33,20);
}
}}

}


};gdjs.Multiplayer_95Game1Code.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.Multiplayer_95Game1Code.GDplayer2Objects2);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer2Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer2Objects2[i].addForce(0, -(30), 0);
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer2Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer2Objects2[i].setAnimationName("up");
}
}{gdjs.evtTools.p2p.sendDataToAll("player2ypos", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "w"));
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.Multiplayer_95Game1Code.GDplayer2Objects2);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer2Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer2Objects2[i].setAnimationName("idle");
}
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.Multiplayer_95Game1Code.GDplayer2Objects2);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer2Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer2Objects2[i].addForce(0, 30, 0);
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer2Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer2Objects2[i].setAnimationName("down");
}
}{gdjs.evtTools.p2p.sendDataToAll("player2ypos", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.Multiplayer_95Game1Code.GDplayer2Objects2);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer2Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer2Objects2[i].setAnimationName("idle");
}
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.Multiplayer_95Game1Code.GDplayer2Objects2);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer2Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer2Objects2[i].addForce(-(30), 0, 0);
}
}{gdjs.evtTools.p2p.sendDataToAll("player2xpos", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.Multiplayer_95Game1Code.GDplayer2Objects2);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer2Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer2Objects2[i].addForce(30, 0, 0);
}
}{gdjs.evtTools.p2p.sendDataToAll("player2xpos", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.Multiplayer_95Game1Code.GDplayer2Objects2);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer2Objects2.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer2Objects2[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.p2p.sendDataToAll("player2ypos", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}{gdjs.evtTools.p2p.sendDataToAll("player2xpos", gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)));
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Multiplayer_95Game1Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDborderObjects1Objects = Hashtable.newFrom({"border": gdjs.Multiplayer_95Game1Code.GDborderObjects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDplayer1Objects1Objects = Hashtable.newFrom({"player1": gdjs.Multiplayer_95Game1Code.GDplayer1Objects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDborderObjects1Objects = Hashtable.newFrom({"border": gdjs.Multiplayer_95Game1Code.GDborderObjects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDvertical_9595BORDERObjects1Objects = Hashtable.newFrom({"vertical_BORDER": gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDplayer1Objects1Objects = Hashtable.newFrom({"player1": gdjs.Multiplayer_95Game1Code.GDplayer1Objects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDvertical_9595BORDERObjects1Objects = Hashtable.newFrom({"vertical_BORDER": gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDborderObjects1Objects = Hashtable.newFrom({"border": gdjs.Multiplayer_95Game1Code.GDborderObjects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDplayer2Objects1Objects = Hashtable.newFrom({"player2": gdjs.Multiplayer_95Game1Code.GDplayer2Objects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDborderObjects1Objects = Hashtable.newFrom({"border": gdjs.Multiplayer_95Game1Code.GDborderObjects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDvertical_9595BORDERObjects1Objects = Hashtable.newFrom({"vertical_BORDER": gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDplayer2Objects1Objects = Hashtable.newFrom({"player2": gdjs.Multiplayer_95Game1Code.GDplayer2Objects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDvertical_9595BORDERObjects1Objects = Hashtable.newFrom({"vertical_BORDER": gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects1});gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.Multiplayer_95Game1Code.GDNewObject6Objects1});gdjs.Multiplayer_95Game1Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.Multiplayer_95Game1Code.GDNewObject6Objects1);

gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDNewObject6Objects1Objects, runtimeScene, true, false);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataToAll("disconnect", "");
}}

}


};gdjs.Multiplayer_95Game1Code.eventsList7 = function(runtimeScene) {

{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject52"), gdjs.Multiplayer_95Game1Code.GDNewObject52Objects1);
gdjs.copyArray(runtimeScene.getObjects("border"), gdjs.Multiplayer_95Game1Code.GDborderObjects1);
gdjs.copyArray(runtimeScene.getObjects("vertical_BORDER"), gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects1);
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 160, 90);
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObject52Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObject52Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDborderObjects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDborderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1[i].addForce(-(1), 0, 1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.Multiplayer_95Game1Code.GDplayer2Objects1);
{runtimeScene.getVariables().getFromIndex(0).setNumber((( gdjs.Multiplayer_95Game1Code.GDplayer1Objects1.length === 0 ) ? 0 :gdjs.Multiplayer_95Game1Code.GDplayer1Objects1[0].getPointY("")));
}{runtimeScene.getVariables().getFromIndex(2).setNumber((( gdjs.Multiplayer_95Game1Code.GDplayer2Objects1.length === 0 ) ? 0 :gdjs.Multiplayer_95Game1Code.GDplayer2Objects1[0].getPointY("")));
}{runtimeScene.getVariables().getFromIndex(4).setNumber((( gdjs.Multiplayer_95Game1Code.GDplayer1Objects1.length === 0 ) ? 0 :gdjs.Multiplayer_95Game1Code.GDplayer1Objects1[0].getPointX("")));
}{runtimeScene.getVariables().getFromIndex(6).setNumber((( gdjs.Multiplayer_95Game1Code.GDplayer2Objects1.length === 0 ) ? 0 :gdjs.Multiplayer_95Game1Code.GDplayer2Objects1[0].getPointX("")));
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.75, "addobj");
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDNewObjectObjects1Objects, 300, gdjs.randomInRange(0, 90), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "addobj");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects1);

gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDNewObjectObjects1Objects, gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDplayer1Objects1Objects, false, runtimeScene, false);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject52"), gdjs.Multiplayer_95Game1Code.GDNewObject52Objects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "addobj");
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObject52Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObject52Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1[i].setString("red");
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1[i].setAnimationName("red");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "restart");
}
{ //Subevents
gdjs.Multiplayer_95Game1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.Multiplayer_95Game1Code.GDplayer2Objects1);

gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDNewObjectObjects1Objects, gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDplayer2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject52"), gdjs.Multiplayer_95Game1Code.GDNewObject52Objects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "addobj");
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObject52Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObject52Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "restart");
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1[i].setAnimationName("blue");
}
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1[i].setString("blue");
}
}
{ //Subevents
gdjs.Multiplayer_95Game1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("player1ypos", false);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects1);
{gdjs.evtTools.p2p.getEventVariable("player1ypos", runtimeScene.getVariables().getFromIndex(1));
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects1[i].setY(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("player2ypos", false);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.Multiplayer_95Game1Code.GDplayer2Objects1);
{gdjs.evtTools.p2p.getEventVariable("player2ypos", runtimeScene.getVariables().getFromIndex(3));
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer2Objects1[i].setY(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)));
}
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("player1xpos", false);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects1);
{gdjs.evtTools.p2p.getEventVariable("player1xpos", runtimeScene.getVariables().getFromIndex(5));
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects1[i].setX(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("player2xpos", false);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.Multiplayer_95Game1Code.GDplayer2Objects1);
{gdjs.evtTools.p2p.getEventVariable("player2xpos", runtimeScene.getVariables().getFromIndex(7));
}{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer2Objects1[i].setX(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)));
}
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "restart");
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Multiplayer_Game1", false);
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Multiplayer_95Game1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Multiplayer_95Game1Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("border"), gdjs.Multiplayer_95Game1Code.GDborderObjects1);
gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects1);

gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDborderObjects1Objects, gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDplayer1Objects1Objects, false, runtimeScene, false);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Multiplayer_95Game1Code.GDborderObjects1 */
/* Reuse gdjs.Multiplayer_95Game1Code.GDplayer1Objects1 */
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects1[i].separateFromObjectsList(gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDborderObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player1"), gdjs.Multiplayer_95Game1Code.GDplayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("vertical_BORDER"), gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects1);

gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDvertical_9595BORDERObjects1Objects, gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDplayer1Objects1Objects, false, runtimeScene, false);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Multiplayer_95Game1Code.GDplayer1Objects1 */
/* Reuse gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects1 */
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer1Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer1Objects1[i].separateFromObjectsList(gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDvertical_9595BORDERObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("border"), gdjs.Multiplayer_95Game1Code.GDborderObjects1);
gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.Multiplayer_95Game1Code.GDplayer2Objects1);

gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDborderObjects1Objects, gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDplayer2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Multiplayer_95Game1Code.GDborderObjects1 */
/* Reuse gdjs.Multiplayer_95Game1Code.GDplayer2Objects1 */
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer2Objects1[i].separateFromObjectsList(gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDborderObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player2"), gdjs.Multiplayer_95Game1Code.GDplayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("vertical_BORDER"), gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects1);

gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDvertical_9595BORDERObjects1Objects, gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDplayer2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Multiplayer_95Game1Code.GDplayer2Objects1 */
/* Reuse gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects1 */
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDplayer2Objects1[i].separateFromObjectsList(gdjs.Multiplayer_95Game1Code.mapOfGDgdjs_46Multiplayer_9595Game1Code_46GDvertical_9595BORDERObjects1Objects, false);
}
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataToAll("disconnect", "");
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Multiplayer_95Game1Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("disconnect", false);
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataToAll("disconnect", "");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene3", false);
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 640, 480);
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.Multiplayer_95Game1Code.GDNewObject6Objects1);
{for(var i = 0, len = gdjs.Multiplayer_95Game1Code.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.Multiplayer_95Game1Code.GDNewObject6Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = false;
{
gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.Multiplayer_95Game1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Report Multi Game");
}}

}


};

gdjs.Multiplayer_95Game1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Multiplayer_95Game1Code.GDNewObjectObjects1.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObjectObjects2.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObjectObjects3.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject2Objects1.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject2Objects2.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject2Objects3.length = 0;
gdjs.Multiplayer_95Game1Code.GDplayer1Objects1.length = 0;
gdjs.Multiplayer_95Game1Code.GDplayer1Objects2.length = 0;
gdjs.Multiplayer_95Game1Code.GDplayer1Objects3.length = 0;
gdjs.Multiplayer_95Game1Code.GDplayer2Objects1.length = 0;
gdjs.Multiplayer_95Game1Code.GDplayer2Objects2.length = 0;
gdjs.Multiplayer_95Game1Code.GDplayer2Objects3.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject3Objects1.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject3Objects2.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject3Objects3.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject4Objects1.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject4Objects2.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject4Objects3.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject52Objects1.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject52Objects2.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject52Objects3.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject5Objects1.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject5Objects2.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject5Objects3.length = 0;
gdjs.Multiplayer_95Game1Code.GDborderObjects1.length = 0;
gdjs.Multiplayer_95Game1Code.GDborderObjects2.length = 0;
gdjs.Multiplayer_95Game1Code.GDborderObjects3.length = 0;
gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects1.length = 0;
gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects2.length = 0;
gdjs.Multiplayer_95Game1Code.GDvertical_95BORDERObjects3.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject6Objects1.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject6Objects2.length = 0;
gdjs.Multiplayer_95Game1Code.GDNewObject6Objects3.length = 0;

gdjs.Multiplayer_95Game1Code.eventsList7(runtimeScene);
return;

}

gdjs['Multiplayer_95Game1Code'] = gdjs.Multiplayer_95Game1Code;
