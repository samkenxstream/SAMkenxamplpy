Search.setIndex({docnames:["class-structure","classes/ampl","classes/amplexception","classes/constraint","classes/dataframe","classes/entity","classes/environment","classes/errorhandler","classes/objective","classes/outputhandler","classes/parameter","classes/runnable","classes/set","classes/variable","examples","getting-started","index","intro","quick-start","reference"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:54},filenames:["class-structure.rst","classes/ampl.rst","classes/amplexception.rst","classes/constraint.rst","classes/dataframe.rst","classes/entity.rst","classes/environment.rst","classes/errorhandler.rst","classes/objective.rst","classes/outputhandler.rst","classes/parameter.rst","classes/runnable.rst","classes/set.rst","classes/variable.rst","examples.rst","getting-started.rst","index.rst","intro.rst","quick-start.rst","reference.rst"],objects:{"amplpy.AMPL":{"var":[1,2,1,""],__del__:[1,1,1,""],__init__:[1,1,1,""],__module__:[1,2,1,""],cd:[1,1,1,""],close:[1,1,1,""],con:[1,2,1,""],display:[1,1,1,""],eval:[1,1,1,""],evalAsync:[1,1,1,""],exportData:[1,1,1,""],exportGurobiModel:[1,1,1,""],getConstraint:[1,1,1,""],getConstraints:[1,1,1,""],getCurrentObjective:[1,1,1,""],getData:[1,1,1,""],getEntity:[1,1,1,""],getErrorHandler:[1,1,1,""],getObjective:[1,1,1,""],getObjectives:[1,1,1,""],getOption:[1,1,1,""],getOutput:[1,1,1,""],getOutputHandler:[1,1,1,""],getParameter:[1,1,1,""],getParameters:[1,1,1,""],getSet:[1,1,1,""],getSets:[1,1,1,""],getValue:[1,1,1,""],getVariable:[1,1,1,""],getVariables:[1,1,1,""],importGurobiSolution:[1,1,1,""],interrupt:[1,1,1,""],isBusy:[1,1,1,""],isRunning:[1,1,1,""],obj:[1,2,1,""],option:[1,2,1,""],param:[1,2,1,""],read:[1,1,1,""],readAsync:[1,1,1,""],readData:[1,1,1,""],readDataAsync:[1,1,1,""],readTable:[1,1,1,""],reset:[1,1,1,""],set:[1,2,1,""],setData:[1,1,1,""],setErrorHandler:[1,1,1,""],setOption:[1,1,1,""],setOutputHandler:[1,1,1,""],solve:[1,1,1,""],solveAsync:[1,1,1,""],wait:[1,1,1,""],writeTable:[1,1,1,""]},"amplpy.AMPLException":{__init__:[2,1,1,""],__module__:[2,2,1,""],__str__:[2,1,1,""],__weakref__:[2,2,1,""],getLineNumber:[2,1,1,""],getMessage:[2,1,1,""],getOffset:[2,1,1,""],getSourceName:[2,1,1,""]},"amplpy.Constraint":{__init__:[3,1,1,""],__module__:[3,2,1,""],astatus:[3,1,1,""],body:[3,1,1,""],defvar:[3,1,1,""],dinit0:[3,1,1,""],dinit:[3,1,1,""],drop:[3,1,1,""],dual:[3,1,1,""],isLogical:[3,1,1,""],lb:[3,1,1,""],lbs:[3,1,1,""],ldual:[3,1,1,""],lslack:[3,1,1,""],restore:[3,1,1,""],setDual:[3,1,1,""],slack:[3,1,1,""],sstatus:[3,1,1,""],status:[3,1,1,""],ub:[3,1,1,""],ubs:[3,1,1,""],udual:[3,1,1,""],uslack:[3,1,1,""],val:[3,1,1,""]},"amplpy.DataFrame":{__init__:[4,1,1,""],__iter__:[4,1,1,""],__module__:[4,2,1,""],addColumn:[4,1,1,""],addRow:[4,1,1,""],fromNumpy:[4,3,1,""],fromPandas:[4,3,1,""],getColumn:[4,1,1,""],getHeaders:[4,1,1,""],getNumCols:[4,1,1,""],getNumIndices:[4,1,1,""],getNumRows:[4,1,1,""],getRow:[4,1,1,""],getRowByIndex:[4,1,1,""],setColumn:[4,1,1,""],setValues:[4,1,1,""],toDict:[4,1,1,""],toList:[4,1,1,""],toPandas:[4,1,1,""]},"amplpy.Entity":{__getitem__:[5,1,1,""],__init__:[5,1,1,""],__iter__:[5,1,1,""],__module__:[5,2,1,""],__setitem__:[5,1,1,""],find:[5,1,1,""],get:[5,1,1,""],getIndexingSets:[5,1,1,""],getValues:[5,1,1,""],indexarity:[5,1,1,""],instances:[5,1,1,""],isScalar:[5,1,1,""],name:[5,1,1,""],numInstances:[5,1,1,""],setValues:[5,1,1,""]},"amplpy.EntityMap":{__getitem__:[1,1,1,""],__init__:[1,1,1,""],__len__:[1,1,1,""],__module__:[1,2,1,""],size:[1,1,1,""]},"amplpy.Environment":{__getitem__:[6,1,1,""],__init__:[6,1,1,""],__iter__:[6,1,1,""],__module__:[6,2,1,""],__setitem__:[6,1,1,""],getBinDir:[6,1,1,""],setBinDir:[6,1,1,""]},"amplpy.ErrorHandler":{__module__:[11,2,1,""],error:[11,1,1,""],warning:[11,1,1,""]},"amplpy.Kind":{BREAK:[9,2,1,""],BREAKPOINT:[9,2,1,""],CALL:[9,2,1,""],CD:[9,2,1,""],CHECK:[9,2,1,""],CLOSE:[9,2,1,""],COMMANDS:[9,2,1,""],CONTINUE:[9,2,1,""],DATA:[9,2,1,""],DELETECMD:[9,2,1,""],DISPLAY:[9,2,1,""],DROP:[9,2,1,""],DROP_OR_RESTORE_ALL:[9,2,1,""],ELSE:[9,2,1,""],ELSE_CHECK:[9,2,1,""],ENDIF:[9,2,1,""],ENVIRON:[9,2,1,""],EXIT:[9,2,1,""],EXPAND:[9,2,1,""],FIX:[9,2,1,""],FOR:[9,2,1,""],IF:[9,2,1,""],LET:[9,2,1,""],LOAD:[9,2,1,""],LOOPEND:[9,2,1,""],MISC:[9,2,1,""],OBJECTIVE:[9,2,1,""],OPTION:[9,2,1,""],OPTION_RESET:[9,2,1,""],PRINT:[9,2,1,""],PRINTF:[9,2,1,""],PROBLEM:[9,2,1,""],PROMPT:[9,2,1,""],PURGE:[9,2,1,""],RBRACE:[9,2,1,""],READ:[9,2,1,""],READ_TABLE:[9,2,1,""],RELOAD:[9,2,1,""],REMOVE:[9,2,1,""],REPEAT:[9,2,1,""],REPEAT_END:[9,2,1,""],RESET:[9,2,1,""],RESTORE:[9,2,1,""],RUN_ARGS:[9,2,1,""],SEMICOLON:[9,2,1,""],SHELL_MESSAGE:[9,2,1,""],SHELL_OUTPUT:[9,2,1,""],SHOW:[9,2,1,""],SOLUTION:[9,2,1,""],SOLVE:[9,2,1,""],SSTEP:[9,2,1,""],THEN:[9,2,1,""],UNFIX:[9,2,1,""],UNLOAD:[9,2,1,""],UPDATE:[9,2,1,""],WAITING:[9,2,1,""],WRITE:[9,2,1,""],WRITE_TABLE:[9,2,1,""],XREF:[9,2,1,""],__module__:[9,2,1,""]},"amplpy.Objective":{__init__:[8,1,1,""],__module__:[8,2,1,""],astatus:[8,1,1,""],drop:[8,1,1,""],exitcode:[8,1,1,""],message:[8,1,1,""],minimization:[8,1,1,""],restore:[8,1,1,""],result:[8,1,1,""],sstatus:[8,1,1,""],value:[8,1,1,""]},"amplpy.OutputHandler":{__module__:[9,2,1,""],__weakref__:[9,2,1,""],output:[9,1,1,""]},"amplpy.Parameter":{__init__:[10,1,1,""],__module__:[10,2,1,""],__setitem__:[10,1,1,""],hasDefault:[10,1,1,""],isSymbolic:[10,1,1,""],set:[10,1,1,""],setValues:[10,1,1,""],value:[10,1,1,""]},"amplpy.Runnable":{__module__:[7,2,1,""],__weakref__:[7,2,1,""],run:[7,1,1,""]},"amplpy.Set":{__init__:[12,1,1,""],__module__:[12,2,1,""],arity:[12,1,1,""],contains:[12,1,1,""],getValues:[12,1,1,""],instances:[12,1,1,""],members:[12,1,1,""],setValues:[12,1,1,""],size:[12,1,1,""]},"amplpy.Variable":{__init__:[13,1,1,""],__module__:[13,2,1,""],astatus:[13,1,1,""],defeqn:[13,1,1,""],dual:[13,1,1,""],fix:[13,1,1,""],init0:[13,1,1,""],init:[13,1,1,""],lb0:[13,1,1,""],lb1:[13,1,1,""],lb2:[13,1,1,""],lb:[13,1,1,""],lrc:[13,1,1,""],lslack:[13,1,1,""],rc:[13,1,1,""],setValue:[13,1,1,""],slack:[13,1,1,""],sstatus:[13,1,1,""],status:[13,1,1,""],ub0:[13,1,1,""],ub1:[13,1,1,""],ub2:[13,1,1,""],ub:[13,1,1,""],unfix:[13,1,1,""],urc:[13,1,1,""],uslack:[13,1,1,""],value:[13,1,1,""]},amplpy:{AMPL:[1,0,1,""],AMPLException:[2,0,1,""],Constraint:[3,0,1,""],DataFrame:[4,0,1,""],Entity:[5,0,1,""],EntityMap:[1,0,1,""],Environment:[6,0,1,""],ErrorHandler:[11,0,1,""],Kind:[9,0,1,""],Objective:[8,0,1,""],OutputHandler:[9,0,1,""],Parameter:[10,0,1,""],Runnable:[7,0,1,""],Set:[12,0,1,""],Variable:[13,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","classmethod","Python class method"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:classmethod"},terms:{"abstract":1,"break":9,"case":[0,1,3,5,8,10,12,13,18],"class":[1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,18],"default":[0,1,10,13,15,18],"export":1,"final":17,"float":10,"function":[0,1,3,5,7,9,10,14,15,17,18,19],"import":[0,1,15,18],"new":[0,1,3,4,8,13,15,18],"return":[0,1,3,4,5,6,8,9,10,13,18],"throw":[0,1,8,12,13],"true":[1,3,5,8,10,18],"var":[0,1,5,13],"while":0,Doing:18,FOR:9,For:[0,5,12,15,17,18,19],Its:0,One:0,THEN:9,That:0,The:[0,1,3,4,5,6,8,10,11,12,13,15,17,18],Their:0,Then:18,These:[0,14],Use:16,__del__:1,__getitem__:[0,1,5,6],__init__:[1,2,3,4,5,6,8,10,12,13],__iter__:[4,5,6],__len__:1,__module__:[1,2,3,4,5,6,7,8,9,10,11,12,13],__setitem__:[5,6,10],__str__:2,__weakref__:[2,7,9],_con:13,_impl:[2,3,5,8,10,12,13],_var:3,abil:6,about:[16,18],abov:[0,1,18],absolut:1,access:[1,3,4,5,6,8,12,13,15,16,17,18],accessor:12,account:0,act:17,activ:18,actual:0,adapt:0,add:[4,6,15],addcolumn:4,added:[4,17],adding:4,addrow:[0,4],adjust:3,after:[0,1,7,8],algebra:[0,3,5,16],all:[0,1,3,4,5,8,11,12,13,15,16,17,18,19],allow:[0,1,17],alphanumer:1,alreadi:[6,18],also:[0,17],alter:0,altern:[15,16],altogeth:18,alwai:0,amount:15,ampl:[2,3,4,5,6,8,9,10,11,12,13,15],amplapi:17,amplexcept:[1,11,19],amplexpress:1,amplpi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,19],amplstat:1,analyst:17,ani:[0,1,3,5,9,15,17,18],anoth:[0,9,10],anymor:0,anywai:0,api:[0,1,5,6,11,15,18],appli:5,applic:[11,15,17,18],arbitrari:[1,16],architectur:17,arg:[1,3,4,5,6,9,10,12,13],argument:4,ariti:[5,12],arrai:[4,5],artifici:3,assign:[0,1,3,4,5,6,10,12,16,17],associ:3,assum:18,astatu:[3,8,13],async:[0,1,7,14],asyncexampl:14,asynchron:[1,16],attempt:1,automat:[0,6,18],avail:[0,1,3,8,13,15],avoid:[0,18],back:[1,17],backslash:[15,18],base:[0,3,4,8,13,17],basi:[3,13],basic:[0,11,14],beef:18,been:[0,1,3,8,10,12,13,15,17,18],befor:[9,15],begin:[9,15],behavior:1,being:0,below:[0,5,17,18],benefit:0,better:0,between:[3,16,17,18],binari:[1,6,15],binarydirectori:6,bit:17,block:[0,1,9],bodi:[0,3],both:[0,3,10,18],bound:[3,13,18],brace:9,breakpoint:9,breviti:19,bui:18,build:[16,17],bulk:0,busi:0,calcul:0,call:[0,1,3,5,6,7,8,9,10,12,13,18],callback:[0,1,7,14],can:[0,1,3,4,5,8,10,12,13,14,15,16,18],cannot:[0,1],captur:1,caus:9,center:17,central:0,chang:[0,1,6,17,18],check:[0,3,5,9,10,12],choic:15,chosen:17,circumnst:0,clariti:18,classmethod:4,clear:1,click:17,clone:15,close:[0,1,9,18],clutter:18,code:[0,1,3,8,10,18],collect:[0,1,17,18],column:[0,1,4,5,12],com:[3,8,13,15],come:[0,1,9,15,17,18],command:[1,9,13,15,18],common:17,commun:[0,4,18],compact:0,compil:15,complet:[1,15,16],compon:12,compris:0,comput:[0,15],con:[0,1],concept:[0,17],concurr:0,condit:17,connect:17,consid:12,consider:[0,18],consist:0,consol:[0,1,18],constraint:[0,1,5,13,19],constraintinst:3,constraintnam:3,construct:1,constructor:[1,6],consum:0,contain:[0,1,4,5,9,12,15,17,18],content:18,continu:[0,9],control:0,conveni:0,copi:18,correct:17,correpond:5,correspond:[0,1,3,4,5,8,12,13,18],cost:[13,18],could:[0,15],cours:0,cpu:17,creat:[0,1,4,18],creation:[0,16],current:[0,1,3,5,6,13,18],currenti:5,customis:11,dat:[1,18],data:[1,4,5,9,10,12,13,16,17],datafram:[0,1,3,5,8,10,12,13,16,18,19],dataframeexampl:14,date:0,datfil:1,deal:0,dealloc:18,decis:[13,17,18],declar:[0,1,5,10,13],decoupl:[0,4,14],defeqn:13,defin:[0,2,3,6,7,9,10,13,18],definit:0,defvar:3,delet:[0,3,8,9,10,12,13,16],deletecmd:9,demo:15,demonstr:0,depend:[0,5,17],deploi:15,deploy:16,deriv:[0,1,5,9],descript:3,desir:[0,4],destructor:[1,18],detach:18,detail:0,detect:[0,1,2],develop:[0,16,17],df2:18,diagnost:0,dict:0,dictionari:[0,4,10],diet:[15,18],dietmodel:14,differ:[1,3],dimens:5,dinit0:3,dinit:3,direct:18,directli:[0,15,17],directori:[1,6,14,15,18],displai:[0,1,9,14,15,18],displaystat:1,distribut:14,document:17,doe:[0,1,5,13,17,18],doing:1,done:[1,4],doubl:[0,1],download:[15,17],driver:1,drop:[0,3,8,9],drop_or_restore_al:9,ds1:1,dsn:1,dual:[0,3,5,13],each:[0,1,4,12,18],eas:0,easi:17,easier:0,easili:17,effect:[0,1,5,8],effici:16,efficientfronti:14,either:[5,18],element:[1,12],els:9,else_check:9,embed:0,empti:[1,5],encapsul:0,encount:9,end:[1,9],endif:9,engin:[0,1],ensur:18,entii:5,entit:0,entiti:[1,3,4,8,10,12,13,16],entityclass:1,entitymap:[0,1],enumer:0,environ:[0,1,9,15,16,17,19],equal:[4,5,12],equival:[0,1,3,5,10,13,18],error:[1,2,3,9,11,15],errorhandl:[0,1,9,19],escap:[15,18],eval:[0,1],evalasync:[0,1,7],evalu:[0,1],even:0,everi:[0,1,3,18],exact:0,exactli:0,exampl:[0,5,12,15,16,17,18],except:[0,1,2,16,18],exe:15,execut:[0,1,6,7,9,15,17,18],exist:[0,1,4,15,17],exit:[8,9],exitcod:8,expand:9,experi:17,explain:0,explicit:0,explicitli:0,exportdata:1,exportgurobimodel:1,expos:12,express:[0,1,5,10,16],extent:0,extern:[17,18],extract:0,face:[0,1],facil:6,fail:[0,1],fals:[1,3,8],familiar:18,featur:17,fetch:[1,14,18],few:14,figur:0,file:[0,1,2,9,14,16],filenam:1,find:[0,5],finish:[1,7],first:[0,1,5,16,18],firstexampl:[14,15],firstli:18,fix:[0,3,9,13],flavour:17,fold:0,folder:15,follow:[0,1,4,5,10,12,15,18],food:[15,18],form:1,found:[0,1,5,6,12,14,18],fragment:0,framework:17,free:16,frequent:0,from:[0,1,3,4,5,7,9,13,14,15,16,17],fromnumpi:4,frompanda:4,frontier:16,full:[1,15,18],further:[1,17,18],gain:[0,3,5,8,12,13,18],gener:[0,1,2,14,17,18],get:[0,1,2,3,4,5,6,8,9,10,12,13,16],getbindir:6,getcolumn:4,getconstraint:[0,1,18],getcurrentobject:1,getdata:[1,18],getent:1,geterrorhandl:[0,1],gethead:4,getindexingset:5,getlinenumb:2,getmessag:2,getnumcol:4,getnumindic:4,getnumrow:4,getobject:[0,1,18],getoffset:2,getopt:[0,1,18],getoutput:1,getoutputhandl:[0,1],getparamet:[0,1,18],getrow:4,getrowbyindex:4,getset:[0,1,12,18],getsourcenam:2,getvalu:[0,1,3,4,5,8,12,13,18],getvari:[0,1,18],git:15,github:15,give:18,given:[1,18],glitch:0,good:18,grbmodel:1,great:17,group:0,guarante:0,guess:[3,13],guid:17,gurobi:1,gurobidriv:1,gurobipi:1,had:8,ham:18,handl:[1,9,11,17,18],handler:[0,1,11],has:[0,1,3,5,7,8,10,12,13,15,17,18],hasdefault:10,have:[0,5,8,13,15,18],header:4,heavi:0,hello:18,help:[1,2,3,5,8,10,12,13],henc:0,here:17,heurist:16,hint:14,hit:9,how:[0,14,17,18],html:[3,8,13],http:[1,3,8,13,15],identifi:18,idl:1,illustr:[0,18],implement:[0,1,9,11,14,15,17,18],importgurobisolut:1,incapsul:18,includ:[4,15,18],incomplet:9,increas:18,index:[0,1,3,4,5,10,12,13,18],indexar:[4,5],indic:[1,4,5,10],inform:9,inherit:7,init0:13,init:13,initi:[1,2,3,5,8,10,12,13,16],input:[0,1,18],instal:[16,17,18],instanc:[1,3,5,7,8,10,11,12,13,14,18],instanti:0,instead:[0,17,18],intend:17,intepret:[8,13],interact:[1,17,18],interest:[0,18],interfac:[0,9,11,17,18],intermediari:17,intern:[9,18],interpret:[0,1,3,6,9,11,12,17,18],interpter:0,interrog:18,interrupt:[1,9,14],introduct:16,invalid:[0,1],invalidargumet:1,ioerror:18,irrelev:17,isbusi:1,islog:3,isrun:1,isscalar:5,issu:[0,9,18],issymbol:10,item:4,iter:[0,1,6,12],its:[0,3,4,6,12,17,18],java:17,just:[15,17],keep:[0,18],kei:[1,4,5],kept:0,kill:1,kind:[0,9],know:[0,18],known:18,kwarg:[1,4],langext:1,languag:[0,17,18],last:[9,15],latest:15,latter:0,lazili:[0,1,18],lb0:13,lb1:13,lb2:13,lbs:3,ldual:3,lead:[0,17],less:0,lesser:[3,13],let:[3,5,9,10,13],level:[0,5],librari:[0,9,15,17],licens:1,like:[0,3,8,13],line:[0,9,18],linux:[15,17],list:[0,1,2,3,4,5,7,8,9,10,12,13,14,16],load:[1,6,9,16],locat:[1,2,6],logic:[3,17],look:[1,6],lookup:6,loop:9,loopend:9,lower:[3,13],lrc:13,lslack:[0,3,13],maco:15,made:18,mai:[15,18],main:[0,17],maintain:0,make:[15,17,18],manipul:0,manual:[4,16],map:[0,1,5],mark:3,master:15,mathemat:0,matlab:17,matrix:4,maxim:[0,8],mean:0,member:[5,12],memori:17,messag:[2,8,9,15],method:[1,3,5,8,9,10,11,12,13,16,18],microsoft:17,might:3,mind:17,minim:8,misc:9,misus:1,mix:1,mod:18,mode:1,model:[1,4,16,17],modif:[0,18],modifi:[0,1,4,5,16],modud:15,modul:16,more:[0,1,9,18],moreov:0,most:[1,8,17],mostli:17,msg:9,mswin64:[15,18],much:17,multi:0,multidimension:16,multidimensionalexampl:14,multipl:[0,1,4,18],must:[0,1,4,11,12],name:[0,1,2,3,4,5,6,8,13,15,18],namespac:19,nearer:13,necessari:[0,14,17,18],need:[0,4,11,15,16,17],newli:0,non:[3,8,10,12,13],none:[0,1,5,6,13],normal:[9,17],notabl:1,note:[3,5,6,8,9,10,13,15,16,18],noth:1,notif:11,now:12,number:[0,1,4,5,12],numer:[4,10,16],numinst:[0,5],numpi:4,obj:[0,1],object:[0,1,2,4,5,6,7,9,10,11,12,13,14,15,16,19],obtain:[0,1,5,17,18],obviou:0,occur:9,offici:17,offset:2,often:[0,3,17,18],omit:19,onc:[0,4,18],one:[0,1,3,4,7,18],onli:[0,1,3,4,7,10,12,17,18],onward:0,open:[0,15],oper:[0,1,7,9,12,16],optim:[1,15,17,18],optimis:0,option:[1,3,9,15,16,18],option_reset:9,optionsexampl:14,order:[0,5,15,18],org:1,origin:[3,4,13],osx:17,other:[0,1,17,18],otherwis:[0,3,5,6,8,10,13,15],our:15,out:[3,13,18],outcom:1,output:[1,9,18],outputhandl:[0,1,19],outsid:0,over:[0,1,5,12],overhead:[0,17],overload:18,overview:0,own:15,packag:[15,17,18],page:15,panda:4,par:10,paragraph:0,param:[0,1,10,12],paramet:[0,1,5,14,16,17,19],parent:0,pars:1,part:[0,9,17],particular:[0,5],pass:[1,5,9,15],path:[1,15,18],percentag:18,perform:[0,18],permit:0,phase:13,pip:15,platform:[15,17],pleas:[10,15,17,18],point:0,pointer:18,popul:[1,4],port:17,portfolio:14,possibl:[0,1,3,17,18],power:18,practic:18,pre:4,predict:0,prefer:[0,18],preinstal:17,present:[0,17,18],presolv:[0,3,13],price:0,princip:5,print:[0,1,9,18],printf:9,prior:0,problem:[1,9,14,15,16],procedur:[1,17,18],process:[0,17],produc:18,program:[0,16,17],programm:[0,18],programmat:[0,14,18],prompt1:9,prompt2:9,prompt:9,proof:17,proper:0,properti:[0,3,5,8,13],provid:[0,1,5,6,10,13,15,17,18,19],purg:9,put:1,python:[0,1,12,15,17],qmip:14,quick:[16,17],quickli:15,quit:0,rais:[1,10],rang:0,raw:[15,18],rbrace:9,read:[0,1,9,14,17,18],read_tabl:9,readasync:[0,1,7],readdata:[0,1,18],readdataasync:[0,1,7],reader:17,readtabl:1,reason:[0,1],reassign:[1,14,18],receiv:11,recent:8,redirect:9,redistribut:17,reduc:[0,13],refer:[0,2,7,9,10,16,17,18],referenc:0,reflect:3,refresh:0,regard:0,regist:11,rel:1,relat:[1,16],relax:14,releas:[1,18],reli:[0,17],reload:9,remov:9,repeat:9,repeat_end:9,repeteatli:14,replic:0,report:11,repositori:15,repres:[0,2,3,4,5,7,8,9,10,12,13,18],represent:[0,5,18],requir:[15,16],reset:[1,3,9],resid:19,resolv:18,resourc:[0,1,16],respect:[17,18],restart:1,restor:[0,3,8,9],result:[0,1,8,18],retriev:0,retrun:5,right:9,risk:0,routin:0,row:[0,2,4],run:[1,7,15],run_arg:9,runnabl:[14,19],runtim:3,runtimeerror:[1,8,10,12,13],same:[0,1,3,5,8,13,14,18],scalar:[1,3,5,8,10,13,18],scalarexpress:1,schema:17,schemat:0,script:[1,9],search:[5,6,15,18],second:18,section:[0,14,17,18],see:[0,1,2,3,5,8,9,10,12,13,15],seen:0,select:6,semant:5,semicolon:[1,9],send:[0,9],sens:8,sent:3,separ:0,sequenc:[1,17],session:18,set:[0,1,3,4,5,6,10,13,16,17,18,19],setbindir:6,setcolumn:4,setdata:[0,1,4,10,12],setdual:[0,3],seterrorhandl:[0,1,11],setnam:1,setopt:[0,1,3],setoutputhandl:[0,1],setup:17,setvalu:[0,4,5,10,12,13,18],sever:[0,15],shell:9,shell_messag:9,shell_output:9,should:[0,1,15,18],show:[9,14,17,18],shown:[0,15],side:1,sigint:9,signatur:[1,2,3,5,8,10,12,13],similar:0,simpl:[16,18],simplifi:0,sinc:[3,18],singl:[0,1,4,5,10,18],size:[1,4,12,17],skeleton:4,slack:[0,3,13],slash:[15,18],small:15,smart:18,snippet:[0,18],softwar:17,solut:[0,1,9,14,15,17],solv:[0,1,8,9,15,16],solveasync:[1,7],solver:[1,3,8,9,13,15,17],some:[0,3,9,17,18],soon:0,space:1,special:0,specif:[0,4,5,18],specifi:[0,1,4,5,6,10,12,15,18],specifii:4,speed:17,split:0,sstatu:[3,8,13],sstep:9,stabil:17,standard:0,start:[1,14,16],state:0,statement:[0,1,3,5,9,13,18],statu:[3,8,13],stdout:[0,1],step:16,stop:1,store:[0,10,18],str:2,string:[0,1,5,8,10,15,18],stronger:13,structur:[16,17],subject:0,subset:5,substitut:[3,13],succe:1,success:1,suffbuiltin:[3,8,13],suffici:[17,18],suffix:[3,5,8,13,16],suggest:18,sum:5,support:[3,17],sure:[15,17,18],symbol:[0,10],syntax:[0,1],system:[0,15,16,18],tabl:[1,9],tablenam:1,tabular:1,taken:0,task:[1,4],term:[0,17],termin:15,test:[0,5,16],text:9,than:[0,1],thei:[0,4,18],them:[0,18],therefor:0,thi:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18],those:0,thread:0,three:0,through:[0,3,8,9,11,13,16,17,18],thrown:[0,1,3,18],thu:0,time:[0,18],todict:4,togeth:[0,15],tolist:4,topanda:4,total:4,total_cost:18,totalcost:18,track:0,trackingmodel:14,translat:[0,1],transpar:0,treat:0,tree:15,trial:15,trigger:3,tupl:[0,4,5,12],two:[0,1,18],type:[1,2,3,5,8,9,10,12,13],typeerror:[1,3,8,10,12,13],typic:0,ub0:13,ub1:13,ub2:13,ubs:3,udual:3,uncoupl:0,under:0,underli:[0,1,3,6,8,9,10,11,12,13,18],undetermin:0,unfix:[0,9,13],unload:9,updat:[0,9,18],upgrad:15,upper:[3,13,18],urc:13,usabl:17,usag:[0,14,17],use:[0,4,5,7,15,16,18],used:[0,1,4,5,13,15,17,18],user:[0,1,15,17],uses:[0,17,18],using:[0,1,4,10,11,12,14,15,18],uslack:[0,3,13],usual:18,val:[3,5,13],valid:[0,1,3,10,12,17],valu:[1,3,4,5,6,8,9,10,12,13,14,16],variabl:[1,3,5,6,14,16,19],variou:[0,4,17,18],vector:5,vectori:18,verbos:[0,1],veri:18,version:[0,15,17,18],via:[0,1,3,4,16],view:4,visual:[1,17],wai:[0,4,18],wait:[1,9],walk:17,want:[5,17],warn:[0,1,9,11],weak:[2,7,9],weaker:13,well:0,went:0,wether:12,what:16,wheel:15,when:[0,1,7,9,18],where:[0,1,2,6,15],whether:[1,5],which:[0,1,3,5,6,7,8,10,13,17,18],who:[15,16],whole:4,why:0,wiki:1,wikipedia:1,window:[15,17],within:17,without:[0,1,5],work:[1,15],workaround:3,working_directori:1,world:18,would:[0,18],wrap:0,wrapfunct:5,write:[0,1,9],write_t:9,writet:1,written:[1,17],wrong:0,www:[3,8,13],xdict:0,xref:9,yet:15,you:[12,15,17,18],your:15,zero:[4,5]},titles:["Class structure","AMPL","AMPLException","Constraint","DataFrame","Entity","Environment","Runnable","Objective","OutputHandler","Parameter","ErrorHandler","Set","Variable","Python API examples","Getting started","AMPL Python API","Introduction","Python quick start","Python API reference"],titleterms:{"class":[0,19],Use:14,about:17,access:0,algebra:19,all:14,altern:0,ampl:[0,1,14,16,17,18,19],amplexcept:2,api:[14,16,17,19],arbitrari:18,assign:[14,18],asynchron:14,between:0,build:14,can:17,command:0,complet:18,constraint:3,content:16,creation:18,data:[0,14,18],datafram:[4,14],delet:18,deploy:15,develop:15,direct:0,effici:14,entiti:[0,5,18,19],environ:[6,18],error:0,errorhandl:11,exampl:14,except:19,express:18,file:18,first:14,free:18,from:18,frontier:14,get:[14,15,18],handl:0,heurist:14,initi:15,instal:15,instanc:0,interact:0,interrog:0,introduct:17,list:18,load:18,manual:17,method:0,model:[0,14,18],modifi:18,modul:18,multidimension:14,need:18,note:0,numer:18,object:[8,18],oper:14,option:[0,14],output:0,outputhandl:9,paramet:[10,18],problem:18,program:18,python:[14,16,18,19],quick:18,refer:19,relat:0,requir:17,resourc:18,runnabl:7,scalar:0,set:[12,14],simpl:14,solv:[14,18],start:[15,18],step:14,structur:0,suffix:0,system:17,test:15,thi:17,through:14,use:17,valu:[0,18],variabl:[0,13,18],via:18,what:17,who:17}})