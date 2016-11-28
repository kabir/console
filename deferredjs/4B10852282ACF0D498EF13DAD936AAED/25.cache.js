$wnd.hal.runAsyncCallback25("defineClass(2102, 717, {1:1, 44:1, 189:1});\n_.firstKey = function firstKey(){\n  return this.sortedMap().firstKey();\n}\n;\ndefineClass(715, 714, {18:1, 1:1, 19:1, 33:1, 167:1});\n_.first_1 = function first_1(){\n  return this.sortedMap().firstKey();\n}\n;\n_.sortedMap = function sortedMap_0(){\n  return castTo(getClassPrototype(438).map_1.call(this), 189);\n}\n;\ndefineClass(2099, 450, {18:1, 1:1, 19:1, 33:1, 167:1});\n_.first_1 = function first_4(){\n  this.refreshIfEmpty();\n  return this.getSortedSetDelegate().first_1();\n}\n;\n_.getSortedSetDelegate = function getSortedSetDelegate(){\n  return castTo(this.getDelegate(), 167);\n}\n;\ndefineClass(1040, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_____________________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_____________________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction getKeyOrNSE(entry){\n  if (isNull_0(entry)) {\n    throw toJs(new NoSuchElementException);\n  }\n  return entry.getKey_0();\n}\n\ndefineClass(1238, 273, {1:1, 44:1, 189:1});\n_.firstKey = function firstKey_0(){\n  return getKeyOrNSE(this.getFirstEntry());\n}\n;\ndefineClass(1243, 163, {18:1, 1:1, 19:1, 33:1, 167:1});\n_.first_1 = function first_5(){\n  return this.map_0.firstKey();\n}\n;\ndefineClass(887, 408, {18:1, 1:1, 19:1, 33:1, 167:1});\n_.first_1 = function first_6(){\n  return this.sortedSet.first_1();\n}\n;\ndefineClass(499, 1238, {4:1, 1:1, 44:1, 189:1});\n_.getFirstEntry = function getFirstEntry(){\n  var nextNode, node;\n  if (isNull_0(this.root)) {\n    return null;\n  }\n  node = this.root;\n  while (isNotNull(nextNode = node.child[0])) {\n    node = nextNode;\n  }\n  return node;\n}\n;\ndefineClass(229, 163, {4:1, 18:1, 1:1, 19:1, 33:1, 167:1});\n_.first_1 = function first_7(){\n  return this.map_0.firstKey();\n}\n;\nfunction MailSession(name_0, node){\n  $clinit_MailSession();\n  NamedNode.call(this, name_0, node);\n  this.$init_1028();\n}\n\ndefineClass(764, 17, {1:1, 14:1, 17:1}, MailSession);\nfunction $clinit_MailSessionPresenter(){\n  $clinit_MailSessionPresenter = emptyMethod;\n  $clinit_ApplicationFinderPresenter();\n}\n\nfunction MailSessionPresenter(eventBus, view, proxy, finder, crud, finderPathFactory, resources, dispatcher, statementContext, metadataRegistry){\n  $clinit_MailSessionPresenter();\n  ApplicationFinderPresenter.call(this, eventBus, view, proxy, finder);\n  this.$init_1031();\n  this.crud = crud;\n  this.finderPathFactory = finderPathFactory;\n  this.metadataRegistry = metadataRegistry;\n  this.resources = resources;\n  this.dispatcher = dispatcher;\n  this.statementContext = new SelectionAwareStatementContext(statementContext, new MailSessionPresenter$lambda$0$Type(this));\n}\n\nfunction lambda$3_44(node_0){\n  $clinit_MailSessionPresenter();\n  return toUpperCase__Ljava_lang_String___devirtual$(node_0.asString());\n}\n\ndefineClass(509, 155, {58:1, 45:1, 1:1, 28:1, 27:1, 509:1, 130:1, 97:1}, MailSessionPresenter);\n_.$init_1031 = function $init_1031(){\n}\n;\n_.lambda$0_78 = function lambda$0_136(){\n  $clinit_MailSessionPresenter();\n  return this.mailSessionName;\n}\n;\n_.lambda$1_42 = function lambda$1_75(result_0){\n  $clinit_MailSessionPresenter();\n  castTo(this.getView(), 3441).update_13(new MailSession(this.mailSessionName, result_0));\n}\n;\n_.lambda$2_32 = function lambda$2_57(availableServers_1, serversResult_1){\n  $clinit_MailSessionPresenter();\n  var dialog, existingServers, form_0, metadata, serverTypeItem;\n  {\n    existingServers = castTo(serversResult_1.asList_1().stream().map_3(new MailSessionPresenter$lambda$3$Type).collect_0(toSet()), 33);\n    availableServers_1.removeAll(existingServers);\n    if (availableServers_1.isEmpty()) {\n      fire_18(this.getEventBus(), error_6(this.resources.messages_0().allMailServersExist()));\n    }\n     else {\n      if (availableServers_1.size_1() == 1) {\n        serverTypeItem = new TextBoxItem('server-type', this.resources.constants_0().type_4());\n        serverTypeItem.setValue_1(castToString(availableServers_1.first_1()));\n        serverTypeItem.setEnabled(false);\n      }\n       else {\n        serverTypeItem = new SingleSelectBoxItem('server-type', this.resources.constants_0().type_4(), new ArrayList_1(availableServers_1));\n        serverTypeItem.setRequired(true);\n      }\n      metadata = castTo(this.metadataRegistry.lookup_1(($clinit_AddressTemplates_9() , SERVER_TEMPLATE)), 23);\n      form_0 = (new ModelNodeForm$Builder(($clinit_Ids() , MAIL_SERVER_DIALOG), metadata)).addFromRequestProperties().include_6('outbound-socket-binding-ref', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['username', 'password', 'ssl', 'tls'])).requiredOnly_0().unboundFormItem_2(serverTypeItem, 0).build_15();\n      dialog = new AddResourceDialog_1(this.resources.messages_0().addResourceTitle('Server'), form_0, new MailSessionPresenter$lambda$4$Type(this, serverTypeItem));\n      dialog.getForm().getFormItem('outbound-socket-binding-ref').registerSuggestHandler(new ReadChildrenAutoComplete_0(this.dispatcher, this.statementContext, ($clinit_AddressTemplates_9() , SOCKET_BINDING_TEMPLATE)));\n      dialog.show_0();\n    }\n  }\n}\n;\n_.lambda$4_22 = function lambda$4_38(serverTypeItem_1, name_1, modelNode_2){\n  $clinit_MailSessionPresenter();\n  var address, operation, serverType;\n  {\n    serverType = toLowerCase__Ljava_lang_String___devirtual$(castToString(serverTypeItem_1.getValue_0()));\n    address = ($clinit_AddressTemplates_9() , SELECTED_MAIL_SESSION_TEMPLATE).append_24('server' + '=' + serverType).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n    operation = (new Operation$Builder('add', address)).payload_0(modelNode_2).param_0('server', name_1).build_17();\n    this.dispatcher.execute_15(operation, new MailSessionPresenter$lambda$5$Type(this, serverType));\n  }\n}\n;\n_.lambda$5_14 = function lambda$5_27(serverType_1, result_1){\n  $clinit_MailSessionPresenter();\n  {\n    fire_18(this.getEventBus(), success_6(this.resources.messages_0().addResourceSuccess('Server', serverType_1)));\n    this.reload_0();\n  }\n}\n;\n_.finderPath = function finderPath_14(){\n  return this.finderPathFactory.subsystemPath('mail').append_19('mail-session', this.mailSessionName, 'Mail Session', this.mailSessionName);\n}\n;\n_.launchAddServer = function launchAddServer(){\n  var availableServers, selectedSessionAddress, serverNamesOp;\n  availableServers = new TreeSet_0(asList_3(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [toUpperCase__Ljava_lang_String___devirtual$('smtp'), toUpperCase__Ljava_lang_String___devirtual$('imap'), toUpperCase__Ljava_lang_String___devirtual$('pop3')])));\n  selectedSessionAddress = ($clinit_AddressTemplates_9() , SELECTED_MAIL_SESSION_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n  serverNamesOp = (new Operation$Builder('read-children-names', selectedSessionAddress)).param_0('child-type', 'server').build_17();\n  this.dispatcher.execute_15(serverNamesOp, new MailSessionPresenter$lambda$2$Type(this, availableServers));\n}\n;\n_.onBind = function onBind_17(){\n  getClassPrototype(78).onBind.call(this);\n  castTo(this.getView(), 3441).setPresenter(this);\n}\n;\n_.prepareFromRequest = function prepareFromRequest_7(request){\n  getClassPrototype(152).prepareFromRequest.call(this, request);\n  this.mailSessionName = request.getParameter_0('name', null);\n}\n;\n_.reload_0 = function reload_15(){\n  var address;\n  address = ($clinit_AddressTemplates_9() , SELECTED_MAIL_SESSION_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n  this.crud.readRecursive(address, new MailSessionPresenter$lambda$1$Type(this));\n}\n;\n_.removeServer = function removeServer(mailServer){\n  var address, name_0;\n  name_0 = mailServer.getName();\n  address = ($clinit_AddressTemplates_9() , SELECTED_MAIL_SESSION_TEMPLATE).append_24('server' + '=' + name_0).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n  this.crud.remove_14('Server', name_0, address, makeLambdaFunction(MailSessionPresenter$1methodref$reload$Type.prototype.execute_0, MailSessionPresenter$1methodref$reload$Type, [this]));\n}\n;\n_.resourceAddress = function resourceAddress_13(){\n  return ($clinit_AddressTemplates_9() , SELECTED_MAIL_SESSION_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n}\n;\n_.save_2 = function save_3(changedValues){\n  var address;\n  address = ($clinit_AddressTemplates_9() , SELECTED_MAIL_SESSION_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n  this.crud.save_4('Mail Session', this.mailSessionName, address, changedValues, makeLambdaFunction(MailSessionPresenter$0methodref$reload$Type.prototype.execute_0, MailSessionPresenter$0methodref$reload$Type, [this]));\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter', 509, Lorg_jboss_hal_core_mvp_ApplicationFinderPresenter_2_classLit);\nfunction $clinit_MailSessionPresenter$0methodref$reload$Type(){\n  $clinit_MailSessionPresenter$0methodref$reload$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$0methodref$reload$Type($$outer_0){\n  $clinit_MailSessionPresenter$0methodref$reload$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4369, $wnd.Function, {1:1}, MailSessionPresenter$0methodref$reload$Type);\n_.execute_0 = function execute_191(){\n  this.$$outer_0.reload_0();\n}\n;\nfunction $clinit_MailSessionPresenter$1methodref$reload$Type(){\n  $clinit_MailSessionPresenter$1methodref$reload$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$1methodref$reload$Type($$outer_0){\n  $clinit_MailSessionPresenter$1methodref$reload$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4370, $wnd.Function, {1:1}, MailSessionPresenter$1methodref$reload$Type);\n_.execute_0 = function execute_192(){\n  this.$$outer_0.reload_0();\n}\n;\nfunction $clinit_MailSessionPresenter$MyView(){\n  $clinit_MailSessionPresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/MyView');\nfunction $clinit_MailSessionPresenter$lambda$0$Type(){\n  $clinit_MailSessionPresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$lambda$0$Type($$outer_0){\n  $clinit_MailSessionPresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1311, 1, {1:1}, MailSessionPresenter$lambda$0$Type);\n_.get_0 = function get_154(){\n  return this.$$outer_0.lambda$0_78();\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/lambda$0$Type', 1311, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionPresenter$lambda$1$Type(){\n  $clinit_MailSessionPresenter$lambda$1$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$lambda$1$Type($$outer_0){\n  $clinit_MailSessionPresenter$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1312, 1, {1:1}, MailSessionPresenter$lambda$1$Type);\n_.execute_9 = function execute_193(arg0){\n  this.$$outer_0.lambda$1_42(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/lambda$1$Type', 1312, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionPresenter$lambda$2$Type(){\n  $clinit_MailSessionPresenter$lambda$2$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$lambda$2$Type($$outer_0, availableServers_1){\n  $clinit_MailSessionPresenter$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n  this.availableServers_1 = availableServers_1;\n}\n\ndefineClass(1316, 1, {1:1, 31:1}, MailSessionPresenter$lambda$2$Type);\n_.onSuccess_0 = function onSuccess_103(arg0){\n  this.$$outer_0.lambda$2_32(this.availableServers_1, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/lambda$2$Type', 1316, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionPresenter$lambda$3$Type(){\n  $clinit_MailSessionPresenter$lambda$3$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$lambda$3$Type(){\n  $clinit_MailSessionPresenter$lambda$3$Type();\n}\n\ndefineClass(1313, 1, {1:1}, MailSessionPresenter$lambda$3$Type);\n_.apply_2 = function apply_129(arg0){\n  return lambda$3_44(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/lambda$3$Type', 1313, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionPresenter$lambda$4$Type(){\n  $clinit_MailSessionPresenter$lambda$4$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$lambda$4$Type($$outer_0, serverTypeItem_1){\n  $clinit_MailSessionPresenter$lambda$4$Type();\n  this.$$outer_0 = $$outer_0;\n  this.serverTypeItem_1 = serverTypeItem_1;\n}\n\ndefineClass(1315, 1, {1:1}, MailSessionPresenter$lambda$4$Type);\n_.onAdd = function onAdd_21(arg0, arg1){\n  this.$$outer_0.lambda$4_22(this.serverTypeItem_1, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$lambda$4$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/lambda$4$Type', 1315, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionPresenter$lambda$5$Type(){\n  $clinit_MailSessionPresenter$lambda$5$Type = emptyMethod;\n}\n\nfunction MailSessionPresenter$lambda$5$Type($$outer_0, serverType_1){\n  $clinit_MailSessionPresenter$lambda$5$Type();\n  this.$$outer_0 = $$outer_0;\n  this.serverType_1 = serverType_1;\n}\n\ndefineClass(1314, 1, {1:1, 31:1}, MailSessionPresenter$lambda$5$Type);\n_.onSuccess_0 = function onSuccess_104(arg0){\n  this.$$outer_0.lambda$5_14(this.serverType_1, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionPresenter$lambda$5$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionPresenter/lambda$5$Type', 1314, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionView(){\n  $clinit_MailSessionView = emptyMethod;\n  $clinit_HalViewImpl();\n  $clinit_HalView();\n}\n\nfunction MailSessionView(metadataRegistry, dispatcher, statementContext, resources){\n  $clinit_MailSessionView();\n  var layoutBuilder, mailSessionElement, mailSessionMetadata, navigation, root, serverMetadata, tableOptions;\n  HalViewImpl.call(this);\n  this.$init_1035();\n  navigation = new VerticalNavigation;\n  this.registerAttachable(navigation, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  mailSessionMetadata = castTo(metadataRegistry.lookup_1(($clinit_AddressTemplates_9() , MAIL_SESSION_TEMPLATE)), 23);\n  this.mailSessionForm = (new ModelNodeForm$Builder(($clinit_Ids() , MAIL_SESSION_FORM), mailSessionMetadata)).onSave_1(new MailSessionView$lambda$0$Type(this)).build_15();\n  this.registerAttachable(this.mailSessionForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  mailSessionElement = castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).p(), 3).textContent_0(mailSessionMetadata.getDescription_0().getDescription()), 3).end(), 3).add_10(this.mailSessionForm.asElement_0()), 3).end(), 3).build_2();\n  navigation.addPrimary_0(($clinit_Ids() , MAIL_SESSION_ENTRY), resources.constants_0().attributes_1(), fontAwesome('envelope'), mailSessionElement);\n  serverMetadata = castTo(metadataRegistry.lookup_1(($clinit_AddressTemplates_9() , SERVER_TEMPLATE)), 23);\n  tableOptions = castTo(castTo(castTo(castTo((new ModelNodeTable$Builder(serverMetadata)).button_3(resources.constants_0().add_46(), makeLambdaFunction(MailSessionView$lambda$1$Type.prototype.action_4, MailSessionView$lambda$1$Type, [this])), 12).button_4(resources.constants_0().remove_21(), ($clinit_Button$Scope() , SELECTED_0), makeLambdaFunction(MailSessionView$lambda$2$Type.prototype.action_4, MailSessionView$lambda$2$Type, [this])), 12).column_10((new ColumnBuilder('type', resources.constants_0().type_4(), makeLambdaFunction(MailSessionView$lambda$3$Type.prototype.render_2, MailSessionView$lambda$3$Type, []))).build_7()), 12).column_10((new ColumnBuilder('outbound-socket-binding-ref', 'Outbound Socket Binding', makeLambdaFunction(MailSessionView$lambda$4$Type.prototype.render_2, MailSessionView$lambda$4$Type, []))).build_7()), 12).build_8();\n  this.serverTable = new NamedNodeTable(($clinit_Ids() , MAIL_SERVER_TABLE), tableOptions);\n  this.registerAttachable(this.serverTable, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  this.serverForm = (new ModelNodeForm$Builder(($clinit_Ids() , MAIL_SERVER_FORM), serverMetadata)).include_6('outbound-socket-binding-ref', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['username', 'password', 'ssl', 'tls'])).unsorted_0().onSave_1(new MailSessionView$lambda$5$Type(this)).build_15();\n  this.serverForm.getFormItem('outbound-socket-binding-ref').registerSuggestHandler(new ReadChildrenAutoComplete_0(dispatcher, statementContext, ($clinit_AddressTemplates_9() , SOCKET_BINDING_TEMPLATE)));\n  this.registerAttachable(this.serverForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  mailSessionElement = castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).p(), 3).textContent_0(serverMetadata.getDescription_0().getDescription()), 3).end(), 3).add_10(this.serverTable.asElement_0()), 3).add_10(this.serverForm.asElement_0()), 3).end(), 3).build_2();\n  navigation.addPrimary_0(($clinit_Ids() , MAIL_SERVER_ENTRY), 'Server', pfIcon('server'), mailSessionElement);\n  layoutBuilder = castTo(castTo(castTo(castTo((new LayoutBuilder).row_0().column_2().header_1('Mail Session').end(), 8).addAll_0(navigation.panes_0()), 8).end(), 8).end(), 8);\n  root = layoutBuilder.build_2();\n  this.initElement(root);\n}\n\nfunction lambda$3_45(cell_0, type_1, row_2, meta_3){\n  $clinit_MailSessionView();\n  return toUpperCase__Ljava_lang_String___devirtual$(row_2.getName());\n}\n\nfunction lambda$4_39(cell_0, type_1, row_2, meta_3){\n  $clinit_MailSessionView();\n  return row_2.get_17('outbound-socket-binding-ref').asString();\n}\n\ndefineClass(1709, 63, {1:1, 28:1, 27:1, 3441:1, 48:1}, MailSessionView);\n_.$init_1035 = function $init_1035(){\n}\n;\n_.lambda$0_79 = function lambda$0_138(form_0, changedValues_1){\n  $clinit_MailSessionView();\n  this.presenter.save_2(changedValues_1);\n}\n;\n_.lambda$1_43 = function lambda$1_77(event_0, api_1){\n  $clinit_MailSessionView();\n  this.presenter.launchAddServer();\n}\n;\n_.lambda$2_33 = function lambda$2_59(event_0, api_1){\n  $clinit_MailSessionView();\n  this.presenter.removeServer(castTo($selectedRow(api_1), 17));\n}\n;\n_.lambda$5_15 = function lambda$5_28(f_0, changedValues_1){\n  $clinit_MailSessionView();\n  this.presenter.save_2(changedValues_1);\n}\n;\n_.setPresenter = function setPresenter_10(presenter){\n  this.setPresenter_6(castTo(presenter, 509));\n}\n;\n_.attach = function attach_28(){\n  getClassPrototype(63).attach.call(this);\n  this.serverTable.bindForm(this.serverForm);\n}\n;\n_.setPresenter_6 = function setPresenter_11(presenter){\n  this.presenter = presenter;\n}\n;\n_.update_13 = function update_26(mailSession){\n  var servers;\n  this.mailSessionForm.view_0(mailSession);\n  servers = asNamedNodes(mailSession.get_17('server').asPropertyList());\n  this.serverForm.clear_0();\n  this.serverTable.update_24(servers);\n  this.serverTable.api_0().button(0).enable(servers.size_1() != 3);\n}\n;\nfunction $clinit_MailSessionView$lambda$0$Type(){\n  $clinit_MailSessionView$lambda$0$Type = emptyMethod;\n}\n\nfunction MailSessionView$lambda$0$Type($$outer_0){\n  $clinit_MailSessionView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1710, 1, {1:1}, MailSessionView$lambda$0$Type);\n_.onSave = function onSave_67(arg0, arg1){\n  this.$$outer_0.lambda$0_79(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionView/lambda$0$Type', 1710, Ljava_lang_Object_2_classLit);\nfunction $clinit_MailSessionView$lambda$1$Type(){\n  $clinit_MailSessionView$lambda$1$Type = emptyMethod;\n}\n\nfunction MailSessionView$lambda$1$Type($$outer_0){\n  $clinit_MailSessionView$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4417, $wnd.Function, {1:1}, MailSessionView$lambda$1$Type);\n_.action_4 = function action_45(arg0, arg1){\n  this.$$outer_0.lambda$1_43(arg0, arg1);\n}\n;\nfunction $clinit_MailSessionView$lambda$2$Type(){\n  $clinit_MailSessionView$lambda$2$Type = emptyMethod;\n}\n\nfunction MailSessionView$lambda$2$Type($$outer_0){\n  $clinit_MailSessionView$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4418, $wnd.Function, {1:1}, MailSessionView$lambda$2$Type);\n_.action_4 = function action_46(arg0, arg1){\n  this.$$outer_0.lambda$2_33(arg0, arg1);\n}\n;\nfunction $clinit_MailSessionView$lambda$3$Type(){\n  $clinit_MailSessionView$lambda$3$Type = emptyMethod;\n}\n\nfunction MailSessionView$lambda$3$Type(){\n  $clinit_MailSessionView$lambda$3$Type();\n}\n\ndefineClass(4419, $wnd.Function, {1:1}, MailSessionView$lambda$3$Type);\n_.render_2 = function render_47(arg0, arg1, arg2, arg3){\n  return lambda$3_45(arg0, arg1, arg2, arg3);\n}\n;\nfunction $clinit_MailSessionView$lambda$4$Type(){\n  $clinit_MailSessionView$lambda$4$Type = emptyMethod;\n}\n\nfunction MailSessionView$lambda$4$Type(){\n  $clinit_MailSessionView$lambda$4$Type();\n}\n\ndefineClass(4420, $wnd.Function, {1:1}, MailSessionView$lambda$4$Type);\n_.render_2 = function render_48(arg0, arg1, arg2, arg3){\n  return lambda$4_39(arg0, arg1, arg2, arg3);\n}\n;\nfunction $clinit_MailSessionView$lambda$5$Type(){\n  $clinit_MailSessionView$lambda$5$Type = emptyMethod;\n}\n\nfunction MailSessionView$lambda$5$Type($$outer_0){\n  $clinit_MailSessionView$lambda$5$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1711, 1, {1:1}, MailSessionView$lambda$5$Type);\n_.onSave = function onSave_68(arg0, arg1){\n  this.$$outer_0.lambda$5_15(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_mail_MailSessionView$lambda$5$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.mail', 'MailSessionView/lambda$5$Type', 1711, Ljava_lang_Object_2_classLit);\ndefineClass(1114, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$MyView$_annotation$$none$$(){\n  var result;\n  result = this.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$();\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter_org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core().get_Key$type$org$jboss$hal$core$CrudOperations$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$MetadataRegistry$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$mail$MailSessionView_org$jboss$hal$client$configuration$subsystem$mail$MailSessionView_methodInjection(this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$MetadataRegistry$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_____________________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionView$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter_org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter_methodInjection = function org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter_org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6, _7, _8, _9){\n  return new MailSessionPresenter(_0, _1, _2, _3, _4, _5, _6, _7, _8, _9);\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$mail$MailSessionView_org$jboss$hal$client$configuration$subsystem$mail$MailSessionView_methodInjection = function org$jboss$hal$client$configuration$subsystem$mail$MailSessionView_org$jboss$hal$client$configuration$subsystem$mail$MailSessionView_methodInjection(_0, _1, _2, _3){\n  return new MailSessionView(_0, _1, _2, _3);\n}\n;\ndefineClass(1116, 1, {57:1, 1:1});\n_.onSuccess_1 = function onSuccess_105(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$subsystem$mail$MailSessionPresenter$_annotation$$none$$());\n}\n;\ndefineClass(213, 1, {1:1, 250:1});\n_.allMailServersExist = function allMailServersExist(){\n  return (new SafeHtmlBuilder).appendHtmlConstant('All mails servers already exist.').toSafeHtml();\n}\n;\n$entry(onLoad)(25);\n\n//# sourceURL=hal-25.js\n")