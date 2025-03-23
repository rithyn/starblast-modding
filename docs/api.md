## Classes

<dl>
<dt><a href="#BrowserClient">BrowserClient</a></dt>
<dd><p>The Browser Client Instance for supporting mod codes running in Browser Modding. <br><b>Warning: </b><br><ul><li>This client doesn&#39;t support undocumented features like accessing through <code>game.modding</code>, etc. </li><li>Some of the latest features of the new ModdingClient (which may not work in browsers) will be available. </li><li>Using Promise-related functionalities (including async/await) in your mod code is highly DISCOURAGED since NodeJS VM doesn&#39;t work well with Promise, and will likely crash or hang the running mod.</li></p>
</dd>
<dt><a href="#ModdingClient">ModdingClient</a> ⇐ <code>EventEmitter</code></dt>
<dd><p>The Modding Client Instance.</p>
</dd>
<dt><a href="#AlienManager">AlienManager</a> ⇐ <code><a href="#EntityManager">EntityManager</a></code></dt>
<dd><p>The Alien Manager Instance.</p>
</dd>
<dt><a href="#AsteroidManager">AsteroidManager</a> ⇐ <code><a href="#EntityManager">EntityManager</a></code></dt>
<dd><p>The Asteroid Manager Instance.</p>
</dd>
<dt><a href="#CollectibleManager">CollectibleManager</a> ⇐ <code><a href="#EntityManager">EntityManager</a></code></dt>
<dd><p>The Collectible Manager Instance.</p>
</dd>
<dt><a href="#EntityManager">EntityManager</a> ⇐ <code><a href="#StructureManager">StructureManager</a></code></dt>
<dd><p>The Entity Manager Instance.</p>
</dd>
<dt><a href="#ObjectManager">ObjectManager</a> ⇐ <code><a href="#StructureManager">StructureManager</a></code></dt>
<dd><p>The Object3D Manager Instance.</p>
</dd>
<dt><a href="#ObjectTypeManager">ObjectTypeManager</a> ⇐ <code><a href="#StructureManager">StructureManager</a></code></dt>
<dd><p>The Object Type Manager Instance.</p>
</dd>
<dt><a href="#ShipManager">ShipManager</a> ⇐ <code><a href="#EntityManager">EntityManager</a></code></dt>
<dd><p>The Ship Manager Instance.</p>
</dd>
<dt><a href="#StationModuleManager">StationModuleManager</a> ⇐ <code><a href="#StructureManager">StructureManager</a></code></dt>
<dd><p>The Station Module Manager Instance.</p>
</dd>
<dt><a href="#StructureManager">StructureManager</a> ⇐ <code><a href="#ArrayMap">ArrayMap</a></code></dt>
<dd><p>The Station Module Manager Instance.</p>
</dd>
<dt><a href="#TeamManager">TeamManager</a> ⇐ <code><a href="#StructureManager">StructureManager</a></code></dt>
<dd><p>The Team Manager Instance.</p>
</dd>
<dt><a href="#TimeManager">TimeManager</a></dt>
<dd><p>The Time Manager (Timer) Instance.<br>Please note that all functions running in the timer will be bound to its parent <code>ModdingClient</code> object by default.</p>
</dd>
<dt><a href="#UIComponentManager">UIComponentManager</a> ⇐ <code><a href="#StructureManager">StructureManager</a></code></dt>
<dd><p>The UI Components Manager.</p>
</dd>
<dt><a href="#Alien">Alien</a> ⇐ <code><a href="#Entity">Entity</a></code></dt>
<dd><p>The Alien Instance</p>
</dd>
<dt><a href="#Asteroid">Asteroid</a> ⇐ <code><a href="#Entity">Entity</a></code></dt>
<dd><p>The Asteroid Instance</p>
</dd>
<dt><a href="#BaseEntity">BaseEntity</a> ⇐ <code><a href="#Structure">Structure</a></code></dt>
<dd><p>Most basic class of entity without stats modification ability</p>
</dd>
<dt><a href="#Collectible">Collectible</a> ⇐ <code><a href="#BaseEntity">BaseEntity</a></code></dt>
<dd><p>The Collectible Instance</p>
</dd>
<dt><a href="#Coordinate">Coordinate</a></dt>
<dd><p>The Coordinate Instance</p>
</dd>
<dt><a href="#Entity">Entity</a> ⇐ <code><a href="#BaseEntity">BaseEntity</a></code></dt>
<dd><p>Represents any entity in the game, with ability to modify stats</p>
</dd>
<dt><a href="#Object3D">Object3D</a> ⇐ <code><a href="#Structure">Structure</a></code></dt>
<dd><p>The Object3D Instance</p>
</dd>
<dt><a href="#ObjectType">ObjectType</a> ⇐ <code><a href="#Structure">Structure</a></code></dt>
<dd><p>The ObjectType Instance</p>
</dd>
<dt><a href="#Ship">Ship</a> ⇐ <code><a href="#Entity">Entity</a></code></dt>
<dd><p>The Ship Instance</p>
</dd>
<dt><a href="#Station">Station</a> ⇐ <code><a href="#BaseEntity">BaseEntity</a></code></dt>
<dd><p>The Station Instance</p>
</dd>
<dt><a href="#StationModule">StationModule</a> ⇐ <code><a href="#BaseEntity">BaseEntity</a></code></dt>
<dd><p>The Station Module Instance</p>
</dd>
<dt><a href="#Structure">Structure</a></dt>
<dd><p>The Structure Instance - represents any structrure in the game</p>
</dd>
<dt><a href="#Team">Team</a> ⇐ <code><a href="#Structure">Structure</a></code></dt>
<dd><p>The Team Instance</p>
</dd>
<dt><a href="#UIBasicShapeElement">UIBasicShapeElement</a> ⇐ <code><a href="#UIBaseElement">UIBaseElement</a></code></dt>
<dd><p>The UI BasicShape Element instance</p>
</dd>
<dt><a href="#UIBoxElement">UIBoxElement</a> ⇐ <code><a href="#UIBasicShapeElement">UIBasicShapeElement</a></code></dt>
<dd><p>The UI Box Element instance</p>
</dd>
<dt><a href="#UIComponent">UIComponent</a> ⇐ <code><a href="#UIElementGroup">UIElementGroup</a></code></dt>
<dd><p>The UI Component instance, representing visual and interactable components in-game.
This is an extension of UIElementGroup, but has more features and acts at the upmost parent of any UI Component.</p>
</dd>
<dt><a href="#UIBaseElement">UIBaseElement</a></dt>
<dd><p>Base UI Element instance</p>
</dd>
<dt><a href="#UIElementGroup">UIElementGroup</a> ⇐ <code><a href="#UIBaseElement">UIBaseElement</a></code></dt>
<dd><p>The UI Element Group instance - allows grouping and scaling of UI Elements as a whole</p>
</dd>
<dt><a href="#UIPlayerElement">UIPlayerElement</a> ⇐ <code><a href="#UITextBasedElement">UITextBasedElement</a></code></dt>
<dd><p>The UI Text Element instance</p>
</dd>
<dt><a href="#UIRoundElement">UIRoundElement</a> ⇐ <code><a href="#UIBasicShapeElement">UIBasicShapeElement</a></code></dt>
<dd><p>The UI Round Element instance</p>
</dd>
<dt><a href="#UITextElement">UITextElement</a> ⇐ <code><a href="#UITextBasedElement">UITextBasedElement</a></code></dt>
<dd><p>The UI Text Element instance</p>
</dd>
<dt><a href="#UITextBasedElement">UITextBasedElement</a> ⇐ <code><a href="#UIBaseElement">UIBaseElement</a></code></dt>
<dd><p>The UI Text-Based Element instance</p>
</dd>
<dt><a href="#ArrayMap">ArrayMap</a> ⇐ <code>Map</code></dt>
<dd><p>The Map Instance with a few array methods</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#abstract_message_handler">abstract_message_handler(data)</a></dt>
<dd><p>Message handler function</p>
</dd>
</dl>

<a name="BrowserClient"></a>

## BrowserClient
The Browser Client Instance for supporting mod codes running in Browser Modding. <br><b>Warning: </b><br><ul><li>This client doesn't support undocumented features like accessing through `game.modding`, etc. </li><li>Some of the latest features of the new ModdingClient (which may not work in browsers) will be available. </li><li>Using Promise-related functionalities (including async/await) in your mod code is highly DISCOURAGED since NodeJS VM doesn't work well with Promise, and will likely crash or hang the running mod.</li>

**Kind**: global class  
**Since**: 1.1.0-alpha6  

* [BrowserClient](#BrowserClient)
    * [new BrowserClient(options)](#new_BrowserClient_new)
    * [.setRegion(regionName)](#BrowserClient+setRegion) ⇒ [<code>BrowserClient</code>](#BrowserClient)
    * [.resetContext()](#BrowserClient+resetContext)
    * [.setECPKey(ECPKey)](#BrowserClient+setECPKey) ⇒ [<code>BrowserClient</code>](#BrowserClient)
    * [.getNode()](#BrowserClient+getNode) ⇒ [<code>ModdingClient</code>](#ModdingClient)
    * [.getGame()](#BrowserClient+getGame) ⇒ <code>object</code>
    * [.loadCodeFromString(text, options)](#BrowserClient+loadCodeFromString) ⇒ [<code>BrowserClient</code>](#BrowserClient)
    * [.loadCodeFromLocal(path, options)](#BrowserClient+loadCodeFromLocal) ⇒ [<code>BrowserClient</code>](#BrowserClient)
    * [.loadCodeFromExternal(URL, options)](#BrowserClient+loadCodeFromExternal) ⇒ [<code>BrowserClient</code>](#BrowserClient)
    * [.pollMessages(handler)](#BrowserClient+pollMessages)
    * [.start()](#BrowserClient+start) ⇒ <code>string</code>
    * [.execute(command, options)](#BrowserClient+execute) ⇒ <code>Object</code>
    * [.stop()](#BrowserClient+stop) ⇒ [<code>BrowserClient</code>](#BrowserClient)

<a name="new_BrowserClient_new"></a>

### new BrowserClient(options)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>object</code> |  | options for calling the object. <br><b>Note that</b> if both one property and its aliases exist on the object, the value of the main one will be chosen |
| [options.cacheECPKey] | <code>boolean</code> | <code>false</code> | same with option specified at [ModdingClient](#ModdingClient) |
| [options.extendedMode] | <code>boolean</code> | <code>false</code> | same with option specified at [ModdingClient](#ModdingClient) |
| [options.strictMode] | <code>boolean</code> | <code>false</code> | Commands that affect the instance configuration (e.g `region`) won't be allowed to execute |
| [options.persistentContext] | <code>boolean</code> | <code>true</code> | context where mod and command is executing on will be persistent across mod runs |
| [options.sameCodeExecution] | <code>boolean</code> | <code>false</code> | loading the same code will trigger the execution or not. <br><b>Note:</b> This feature only works when you call `loadCodeFromString`, `loadCodeFromLocal` or `loadCodeFromExternal` methods, and not during the auto-update process |
| [options.crashOnException] | <code>boolean</code> | <code>false</code> | when tick or event function, or mod code execution fails, the mod will crash |
| options.crashOnError | <code>boolean</code> |  | alias of the property `options.crashOnException` |
| [options.logErrors] | <code>boolean</code> | <code>true</code> | game will log any errors or not |
| options.logExceptions | <code>boolean</code> |  | alias of the property `options.logErrors` |
| [options.logMessages] | <code>boolean</code> | <code>true</code> | game will log any in-game logs or not |
| [options.compressWSMessages] | <code>boolean</code> | <code>false</code> | same with option specified at [ModdingClient](#ModdingClient) |

<a name="BrowserClient+setRegion"></a>

### browserClient.setRegion(regionName) ⇒ [<code>BrowserClient</code>](#BrowserClient)
Set the region of the client.

**Kind**: instance method of [<code>BrowserClient</code>](#BrowserClient)  

| Param | Type | Description |
| --- | --- | --- |
| regionName | <code>string</code> | region name, must be either Asia, America or Europe |

<a name="BrowserClient+resetContext"></a>

### browserClient.resetContext()
Destroy and recreate the context where mod and command execution is running on.

**Kind**: instance method of [<code>BrowserClient</code>](#BrowserClient)  
**Since**: 1.4.14-alpha6  
<a name="BrowserClient+setECPKey"></a>

### browserClient.setECPKey(ECPKey) ⇒ [<code>BrowserClient</code>](#BrowserClient)
Set the ECP key that client will use for requests

**Kind**: instance method of [<code>BrowserClient</code>](#BrowserClient)  

| Param | Type | Description |
| --- | --- | --- |
| ECPKey | <code>string</code> | The ECP key |

<a name="BrowserClient+getNode"></a>

### browserClient.getNode() ⇒ [<code>ModdingClient</code>](#ModdingClient)
Get the ModdingClient object running behind the scene

**Kind**: instance method of [<code>BrowserClient</code>](#BrowserClient)  
<a name="BrowserClient+getGame"></a>

### browserClient.getGame() ⇒ <code>object</code>
Get the game object, which acts the same as the `game` object in browser

**Kind**: instance method of [<code>BrowserClient</code>](#BrowserClient)  
<a name="BrowserClient+loadCodeFromString"></a>

### browserClient.loadCodeFromString(text, options) ⇒ [<code>BrowserClient</code>](#BrowserClient)
Load the mod code from a script string

**Kind**: instance method of [<code>BrowserClient</code>](#BrowserClient)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>string</code> |  | The code string to execute |
| options | <code>Object</code> |  | execution options |
| [options.executionTimeout] | <code>number</code> | <code>Infinity</code> | The timeout for executing this code |

<a name="BrowserClient+loadCodeFromLocal"></a>

### browserClient.loadCodeFromLocal(path, options) ⇒ [<code>BrowserClient</code>](#BrowserClient)
Load the mod code from a local file (File on your device)

**Kind**: instance method of [<code>BrowserClient</code>](#BrowserClient)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>string</code> |  | The path to the local file |
| options | <code>Object</code> |  | execution options |
| [options.watchChanges] | <code>boolean</code> | <code>false</code> | Whether to watch for changes on the file or not |
| [options.watchInterval] | <code>number</code> | <code>5000</code> | The interval between watches (if `watchChanges` is set to `true`) |
| [options.executionTimeout] | <code>number</code> | <code>Infinity</code> | The timeout for executing this code |

<a name="BrowserClient+loadCodeFromExternal"></a>

### browserClient.loadCodeFromExternal(URL, options) ⇒ [<code>BrowserClient</code>](#BrowserClient)
Load the mod code from an external URL file

**Kind**: instance method of [<code>BrowserClient</code>](#BrowserClient)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| URL | <code>string</code> |  | The URL to the file |
| options | <code>Object</code> |  | execution options |
| [options.watchChanges] | <code>boolean</code> | <code>false</code> | Whether to watch for changes on the file or not |
| [options.watchInterval] | <code>number</code> | <code>5000</code> | The interval between watches (if `watchChanges` is set to `true`) |
| [options.executionTimeout] | <code>number</code> | <code>Infinity</code> | The timeout for executing this code |

<a name="BrowserClient+pollMessages"></a>

### browserClient.pollMessages(handler)
Poll messages (logs and errors) from browser client.Defaults to logging parsed content/errors if no handler is present.

**Kind**: instance method of [<code>BrowserClient</code>](#BrowserClient)  

| Param | Type | Description |
| --- | --- | --- |
| handler | [<code>abstract\_message\_handler</code>](#abstract_message_handler) | Message handler |

<a name="BrowserClient+start"></a>

### browserClient.start() ⇒ <code>string</code>
Starts the game

**Kind**: instance method of [<code>BrowserClient</code>](#BrowserClient)  
**Returns**: <code>string</code> - Link of the game  
<a name="BrowserClient+execute"></a>

### browserClient.execute(command, options) ⇒ <code>Object</code>
Executes any terminal command on current running instance.

**Kind**: instance method of [<code>BrowserClient</code>](#BrowserClient)  
**Returns**: <code>Object</code> - Success status (boolean) and output of given execution (if ouput capturing is enabled)  
**Since**: 1.4.7-alpha6  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| command | <code>string</code> |  | Command to execute |
| options | <code>object</code> |  | Options for this execution |
| [options.allowEval] | <code>boolean</code> | <code>false</code> | Whether to allow eval the command as JavaScript or not.<br> WARNING: THIS MAY CAUSE SECURITY ISSUES TO YOUR INSTANCE |
| [options.captureOutput] | <code>boolean</code> | <code>false</code> | Whether to capture execution output or pipe it to error/log events instead |
| [options.executionTimeout] | <code>number</code> |  | Timeout for this execution, set to nullish to use default execution timeout from mod compilation |

<a name="BrowserClient+stop"></a>

### browserClient.stop() ⇒ [<code>BrowserClient</code>](#BrowserClient)
Stops the game

**Kind**: instance method of [<code>BrowserClient</code>](#BrowserClient)  
<a name="ModdingClient"></a>

## ModdingClient ⇐ <code>EventEmitter</code>
The Modding Client Instance.

**Kind**: global class  
**Extends**: <code>EventEmitter</code>  

* [ModdingClient](#ModdingClient) ⇐ <code>EventEmitter</code>
    * [new ModdingClient(options)](#new_ModdingClient_new)
    * [.started](#ModdingClient+started) : <code>boolean</code>
    * [.processStarted](#ModdingClient+processStarted) : <code>boolean</code>
    * [.stopped](#ModdingClient+stopped) : <code>boolean</code>
    * [.version](#ModdingClient+version) : <code>string</code>
    * [.requestOptions](#ModdingClient+requestOptions) : <code>object</code>
    * [.region](#ModdingClient+region) : <code>string</code>
    * [.ships](#ModdingClient+ships) : [<code>ShipManager</code>](#ShipManager)
    * [.aliens](#ModdingClient+aliens) : [<code>AlienManager</code>](#AlienManager)
    * [.asteroids](#ModdingClient+asteroids) : [<code>AsteroidManager</code>](#AsteroidManager)
    * [.collectibles](#ModdingClient+collectibles) : [<code>CollectibleManager</code>](#CollectibleManager)
    * [.objects](#ModdingClient+objects) : [<code>ObjectManager</code>](#ObjectManager)
    * [.teams](#ModdingClient+teams) : [<code>TeamManager</code>](#TeamManager)
    * [.timer](#ModdingClient+timer) : [<code>TimeManager</code>](#TimeManager)
    * [.options](#ModdingClient+options) : <code>object</code>
    * [.link](#ModdingClient+link) : <code>string</code>
    * [.custom](#ModdingClient+custom) : <code>object</code>
    * [.error(message)](#ModdingClient+error) ⇒ <code>boolean</code>
    * [.log(...messages)](#ModdingClient+log) ⇒ <code>boolean</code>
    * [.setRegion(regionName)](#ModdingClient+setRegion) ⇒ [<code>ModdingClient</code>](#ModdingClient)
    * [.setOptions(options)](#ModdingClient+setOptions) ⇒ [<code>ModdingClient</code>](#ModdingClient)
    * [.setECPKey(ECPKey)](#ModdingClient+setECPKey) ⇒ [<code>ModdingClient</code>](#ModdingClient)
    * [.configure(options)](#ModdingClient+configure) ⇒ [<code>ModdingClient</code>](#ModdingClient)
    * [.setOpen(isOpen)](#ModdingClient+setOpen) ⇒ [<code>ModdingClient</code>](#ModdingClient)
    * [.setCustomMap(mapPattern)](#ModdingClient+setCustomMap) ⇒ [<code>ModdingClient</code>](#ModdingClient)
    * [.findStructureByUUID(uuid)](#ModdingClient+findStructureByUUID) ⇒ [<code>Structure</code>](#Structure)
    * [.start(options)](#ModdingClient+start) ⇒ <code>string</code>
    * [.stop()](#ModdingClient+stop) ⇒ [<code>ModdingClient</code>](#ModdingClient)
    * [.isRunning()](#ModdingClient+isRunning) ⇒ <code>boolean</code>
    * ["start" (link, options)](#ModdingClient+event_start)
    * ["error" (error)](#ModdingClient+event_error)
    * ["log" (...messages)](#ModdingClient+event_log)
    * ["tick" (step)](#ModdingClient+event_tick)
    * ["stop" (client)](#ModdingClient+event_stop)
    * ["shipRespawn" (ship)](#ModdingClient+event_shipRespawn)
    * ["shipSpawn" (ship)](#ModdingClient+event_shipSpawn)
    * ["shipDestroy" (ship, killer)](#ModdingClient+event_shipDestroy)
    * ["shipDisconnect" (ship)](#ModdingClient+event_shipDisconnect)
    * ["UIComponentClick" (component, ship)](#ModdingClient+event_UIComponentClick)
    * ["alienCreate" (alien)](#ModdingClient+event_alienCreate)
    * ["alienDestroy" (alien, killer)](#ModdingClient+event_alienDestroy)
    * ["asteroidCreate" (asteroid)](#ModdingClient+event_asteroidCreate)
    * ["asteroidDestroy" (asteroid, killer)](#ModdingClient+event_asteroidDestroy)
    * ["collectibleCreate" (collectible)](#ModdingClient+event_collectibleCreate)
    * ["collectiblePick" (collectible, ship)](#ModdingClient+event_collectiblePick)
    * ["stationDestroy" (station)](#ModdingClient+event_stationDestroy)
    * ["stationModuleDestroy" (station_module)](#ModdingClient+event_stationModuleDestroy)
    * ["stationModuleRepair" (station_module)](#ModdingClient+event_stationModuleRepair)

<a name="new_ModdingClient_new"></a>

### new ModdingClient(options)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>object</code> |  | options for calling the object. Note that if mod fails to start, all cached data are not erased. |
| [options.cacheECPKey] | <code>boolean</code> | <code>false</code> | set to `true` if you want to reuse ECP Key for the next run, `false` otherwise |
| [options.cacheOptions] | <code>boolean</code> | <code>false</code> | set to `true` if you want to reuse request options for the next run, `false` otherwise |
| [options.cacheEvents] | <code>boolean</code> | <code>false</code> | set to `true` if you want to reuse all event handlers for the next run, `false` otherwise |
| [options.compressWSMessages] | <code>boolean</code> | <code>false</code> | To decide whether to compress messages in WebSocket requests or not. `true` will use less bandwith but may also be CPU-intensive, and `false` will do the opposite. |
| [options.extendedMode] | <code>boolean</code> | <code>false</code> | Whether to enable extended listener (which includes extended events and ship properties such as station-related events or ship customization) |

<a name="ModdingClient+started"></a>

### moddingClient.started : <code>boolean</code>
Indicates if the game is started or not.

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
<a name="ModdingClient+processStarted"></a>

### moddingClient.processStarted : <code>boolean</code>
Indicates if the game alredy started its process (sending starting request to server) or not.

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
**Since**: 1.0.20-alpha6  
<a name="ModdingClient+stopped"></a>

### moddingClient.stopped : <code>boolean</code>
Indicates if the game is stopped or not.

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
<a name="ModdingClient+version"></a>

### moddingClient.version : <code>string</code>
This package version

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
**Since**: 1.4.7-alpha6  
<a name="ModdingClient+requestOptions"></a>

### moddingClient.requestOptions : <code>object</code>
Returns a copy of the options object that was sent to the server from the start

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
<a name="ModdingClient+region"></a>

### moddingClient.region : <code>string</code>
Game region for this modded game, or configured region if mod isn't started yet

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
<a name="ModdingClient+ships"></a>

### moddingClient.ships : [<code>ShipManager</code>](#ShipManager)
The ship manager of the game

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
<a name="ModdingClient+aliens"></a>

### moddingClient.aliens : [<code>AlienManager</code>](#AlienManager)
The alien manager of the game

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
<a name="ModdingClient+asteroids"></a>

### moddingClient.asteroids : [<code>AsteroidManager</code>](#AsteroidManager)
The asteroid manager of the game

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
<a name="ModdingClient+collectibles"></a>

### moddingClient.collectibles : [<code>CollectibleManager</code>](#CollectibleManager)
The collectible manager of the game

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
<a name="ModdingClient+objects"></a>

### moddingClient.objects : [<code>ObjectManager</code>](#ObjectManager)
The object manager of the game

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
<a name="ModdingClient+teams"></a>

### moddingClient.teams : [<code>TeamManager</code>](#TeamManager)
The team manager of the game. Coule be `null` if the modded game is not team-based.

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
<a name="ModdingClient+timer"></a>

### moddingClient.timer : [<code>TimeManager</code>](#TimeManager)
The time manager (timer) of the game.

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
**Since**: 1.0.17-alpha6  
<a name="ModdingClient+options"></a>

### moddingClient.options : <code>object</code>
Returns a copy of game options object

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
<a name="ModdingClient+link"></a>

### moddingClient.link : <code>string</code>
The game link

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
**Read only**: true  
<a name="ModdingClient+custom"></a>

### moddingClient.custom : <code>object</code>
Custom object served for assigning data by the user

**Kind**: instance property of [<code>ModdingClient</code>](#ModdingClient)  
<a name="ModdingClient+error"></a>

### moddingClient.error(message) ⇒ <code>boolean</code>
Trigger the `onError` event.

**Kind**: instance method of [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | Error message |

<a name="ModdingClient+log"></a>

### moddingClient.log(...messages) ⇒ <code>boolean</code>
Trigger the `onLog` event.

**Kind**: instance method of [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| ...messages | <code>string</code> | Log messages strings |

<a name="ModdingClient+setRegion"></a>

### moddingClient.setRegion(regionName) ⇒ [<code>ModdingClient</code>](#ModdingClient)
Set the region of the client. If this is called when mod already started process, this will apply for next run

**Kind**: instance method of [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| regionName | <code>string</code> | region name, must be either Asia, America or Europe |

<a name="ModdingClient+setOptions"></a>

### moddingClient.setOptions(options) ⇒ [<code>ModdingClient</code>](#ModdingClient)
Set the options for the modded game. If this is called when mod already started process, this will apply for next run

**Kind**: instance method of [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>options</code> | game options, same as `this.options` uses in browser modding |

<a name="ModdingClient+setECPKey"></a>

### moddingClient.setECPKey(ECPKey) ⇒ [<code>ModdingClient</code>](#ModdingClient)
Set the ECP key that client will use for requests. If this is called when mod already started process, this will apply for next run

**Kind**: instance method of [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| ECPKey | <code>string</code> | The ECP key |

<a name="ModdingClient+configure"></a>

### moddingClient.configure(options) ⇒ [<code>ModdingClient</code>](#ModdingClient)
Configure the client. If this is called when mod already started process, this will apply for next run

**Kind**: instance method of [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | An options object |
| options.options | <code>object</code> | Modded game options |
| options.region | <code>string</code> | Modded game region |
| options.ECPKey | <code>string</code> | ECP key |

<a name="ModdingClient+setOpen"></a>

### moddingClient.setOpen(isOpen) ⇒ [<code>ModdingClient</code>](#ModdingClient)
Set the game state to "open"(true) (still attracts new players) or "closed"(false) (not attract new players)

**Kind**: instance method of [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| isOpen | <code>boolean</code> | `true` to keep the game open, `false` otherwise. |

<a name="ModdingClient+setCustomMap"></a>

### moddingClient.setCustomMap(mapPattern) ⇒ [<code>ModdingClient</code>](#ModdingClient)
Set the custom map for the game

**Kind**: instance method of [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| mapPattern | <code>string</code> | The map pattern |

<a name="ModdingClient+findStructureByUUID"></a>

### moddingClient.findStructureByUUID(uuid) ⇒ [<code>Structure</code>](#Structure)
Find a structrue based on its UUID

**Kind**: instance method of [<code>ModdingClient</code>](#ModdingClient)  
**Returns**: [<code>Structure</code>](#Structure) - - The structure object, `null` if not found any.  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>string</code> | An UUID (Universal Unique Identifier) to search for |

<a name="ModdingClient+start"></a>

### moddingClient.start(options) ⇒ <code>string</code>
Starts the game

**Kind**: instance method of [<code>ModdingClient</code>](#ModdingClient)  
**Returns**: <code>string</code> - Link of the game  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Options Object, same as calling configure(options) |

<a name="ModdingClient+stop"></a>

### moddingClient.stop() ⇒ [<code>ModdingClient</code>](#ModdingClient)
Stops the game

**Kind**: instance method of [<code>ModdingClient</code>](#ModdingClient)  
<a name="ModdingClient+isRunning"></a>

### moddingClient.isRunning() ⇒ <code>boolean</code>
Whether is the game is running (mod is already active)

**Kind**: instance method of [<code>ModdingClient</code>](#ModdingClient)  
<a name="ModdingClient+event_start"></a>

### "start" (link, options)
Fires when the game is about to start

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| link | <code>string</code> | The link to the created game |
| options | <code>object</code> | The current game options from server |

<a name="ModdingClient+event_error"></a>

### "error" (error)
Fires when there is error message from server (and sometimes client, use [error](#ModdingClient+error) to do so). <br>It is recommended to add a listener for this event ([reference](https://nodejs.org/api/events.html#error-events)), since unexpected error message from the server can also crash your mod.

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>Error</code> | The `Error` object |

<a name="ModdingClient+event_log"></a>

### "log" (...messages)
Fires after each evocation of [log](#ModdingClient+log)

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| ...messages | <code>string</code> | The messages |

<a name="ModdingClient+event_tick"></a>

### "tick" (step)
Fires each tick, similar to `this.tick` in browser modding

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| step | <code>number</code> | Game step |

<a name="ModdingClient+event_stop"></a>

### "stop" (client)
Fires when the mod stops.

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| client | [<code>ModdingClient</code>](#ModdingClient) | The client object bound to this event, with properties and data right before mod is stopped and being renewed |

<a name="ModdingClient+event_shipRespawn"></a>

### "shipRespawn" (ship)
Fires when a ship respawns

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| ship | [<code>Ship</code>](#Ship) | The ship object |

<a name="ModdingClient+event_shipSpawn"></a>

### "shipSpawn" (ship)
Fires when a ship first spawns

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| ship | [<code>Ship</code>](#Ship) | The ship object |

<a name="ModdingClient+event_shipDestroy"></a>

### "shipDestroy" (ship, killer)
Fires when a ship is destroyed

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| ship | [<code>Ship</code>](#Ship) | The ship object |
| killer | [<code>Ship</code>](#Ship) | The killer ship object or `null` |

<a name="ModdingClient+event_shipDisconnect"></a>

### "shipDisconnect" (ship)
Fires when a ship is disconnected

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| ship | [<code>Ship</code>](#Ship) | The ship object |

<a name="ModdingClient+event_UIComponentClick"></a>

### "UIComponentClick" (component, ship)
Fires when a ship clicks an UIComponent

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| component | [<code>UIComponent</code>](#UIComponent) | The UIComponent being clicked, note that individual components are prioritized first |
| ship | [<code>Ship</code>](#Ship) | The ship object |

<a name="ModdingClient+event_alienCreate"></a>

### "alienCreate" (alien)
Fires when an alien is created

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| alien | [<code>Alien</code>](#Alien) | The alien object |

<a name="ModdingClient+event_alienDestroy"></a>

### "alienDestroy" (alien, killer)
Fires when an alien is destroyed

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| alien | [<code>Alien</code>](#Alien) | The alien object |
| killer | [<code>Ship</code>](#Ship) | The killer ship object or `null` |

<a name="ModdingClient+event_asteroidCreate"></a>

### "asteroidCreate" (asteroid)
Fires when an asteroid is created

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| asteroid | [<code>Asteroid</code>](#Asteroid) | The asteroid object |

<a name="ModdingClient+event_asteroidDestroy"></a>

### "asteroidDestroy" (asteroid, killer)
Fires when an asteroid is destroyed

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| asteroid | [<code>Asteroid</code>](#Asteroid) | The asteroid object |
| killer | [<code>Ship</code>](#Ship) | The killer ship object or `null` |

<a name="ModdingClient+event_collectibleCreate"></a>

### "collectibleCreate" (collectible)
Fires when a collectible is created

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| collectible | [<code>Collectible</code>](#Collectible) | The collectible object |

<a name="ModdingClient+event_collectiblePick"></a>

### "collectiblePick" (collectible, ship)
Fires when a collectible is picked

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  

| Param | Type | Description |
| --- | --- | --- |
| collectible | [<code>Collectible</code>](#Collectible) | The collectible object |
| ship | [<code>Ship</code>](#Ship) | The ship that picked the collectible |

<a name="ModdingClient+event_stationDestroy"></a>

### "stationDestroy" (station)
Fires when a station is destroyed

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  
**Since**: 1.0.3-alpha6  

| Param | Type | Description |
| --- | --- | --- |
| station | [<code>Station</code>](#Station) | The station object |

<a name="ModdingClient+event_stationModuleDestroy"></a>

### "stationModuleDestroy" (station_module)
Fires when a station module is destroyed

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  
**Since**: 1.0.3-alpha6  

| Param | Type | Description |
| --- | --- | --- |
| station_module | [<code>StationModule</code>](#StationModule) | The station module object |

<a name="ModdingClient+event_stationModuleRepair"></a>

### "stationModuleRepair" (station_module)
Fires when a station module is repaired

**Kind**: event emitted by [<code>ModdingClient</code>](#ModdingClient)  
**Since**: 1.0.3-alpha6  

| Param | Type | Description |
| --- | --- | --- |
| station_module | [<code>StationModule</code>](#StationModule) | The station module object |

<a name="AlienManager"></a>

## *AlienManager ⇐ [<code>EntityManager</code>](#EntityManager)*
The Alien Manager Instance.

**Kind**: global abstract class  
**Extends**: [<code>EntityManager</code>](#EntityManager)  

* *[AlienManager](#AlienManager) ⇐ [<code>EntityManager</code>](#EntityManager)*
    * *[.all](#StructureManager+all) : [<code>ArrayMap</code>](#ArrayMap)*
    * *[.limit](#StructureManager+limit) ⇒ <code>boolean</code>*
    * *[.length](#ArrayMap+length) : <code>number</code>*
    * *[.add(data)](#EntityManager+add) ⇒ [<code>Entity</code>](#Entity)*
    * *[.setById(id, data)](#EntityManager+setById) ⇒ [<code>Entity</code>](#Entity)*
    * *[.set(data)](#EntityManager+set) ⇒ [<code>Entity</code>](#Entity)*
    * *[.kill(id)](#EntityManager+kill) ⇒ [<code>Entity</code>](#Entity)*
    * *[.array(includeInactive)](#StructureManager+array) ⇒ <code>Array</code>*
    * *[.isInstance(entity)](#StructureManager+isInstance) ⇒ <code>boolean</code>*
    * *[.findById(id, includeInactive)](#StructureManager+findById) ⇒ [<code>Structure</code>](#Structure)*
    * *[.get(uuid, [includeInactive])](#StructureManager+get) ⇒ [<code>Structure</code>](#Structure)*
    * *[.limitReached()](#StructureManager+limitReached) ⇒ <code>boolean</code>*
    * *[.at()](#ArrayMap+at) ⇒ <code>any</code> \| <code>undefined</code>*
    * *[.toArray()](#ArrayMap+toArray) ⇒ <code>array</code>*

<a name="StructureManager+all"></a>

### *alienManager.all : [<code>ArrayMap</code>](#ArrayMap)*
A collection containing all structures in the manager

**Kind**: instance property of [<code>AlienManager</code>](#AlienManager)  
**Overrides**: [<code>all</code>](#StructureManager+all)  
**Read only**: true  
<a name="StructureManager+limit"></a>

### *alienManager.limit ⇒ <code>boolean</code>*
The server limit (maximum number of structures) of this manager

**Kind**: instance property of [<code>AlienManager</code>](#AlienManager)  
**Overrides**: [<code>limit</code>](#StructureManager+limit)  
**Read only**: true  
<a name="ArrayMap+length"></a>

### *alienManager.length : <code>number</code>*
Length of this object, same as `Map.prototype.size`

**Kind**: instance property of [<code>AlienManager</code>](#AlienManager)  
**Overrides**: [<code>length</code>](#ArrayMap+length)  
**Read only**: true  
<a name="EntityManager+add"></a>

### *alienManager.add(data) ⇒ [<code>Entity</code>](#Entity)*
Add a new entity to the game

**Kind**: instance method of [<code>AlienManager</code>](#AlienManager)  
**Overrides**: [<code>add</code>](#EntityManager+add)  
**Returns**: [<code>Entity</code>](#Entity) - - The created entity  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | entity creation options |

<a name="EntityManager+setById"></a>

### *alienManager.setById(id, data) ⇒ [<code>Entity</code>](#Entity)*
Set options to an entity based on ID

**Kind**: instance method of [<code>AlienManager</code>](#AlienManager)  
**Overrides**: [<code>setById</code>](#EntityManager+setById)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The entity's ID |
| data | <code>object</code> | Options to be set on the entity |

<a name="EntityManager+set"></a>

### *alienManager.set(data) ⇒ [<code>Entity</code>](#Entity)*
Set options to an entity

**Kind**: instance method of [<code>AlienManager</code>](#AlienManager)  
**Overrides**: [<code>set</code>](#EntityManager+set)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | Options to be set on the entity including the entity ID itself |

<a name="EntityManager+kill"></a>

### *alienManager.kill(id) ⇒ [<code>Entity</code>](#Entity)*
Kill an entity based on ID

**Kind**: instance method of [<code>AlienManager</code>](#AlienManager)  
**Overrides**: [<code>kill</code>](#EntityManager+kill)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The entity's ID needs to be killed |

<a name="StructureManager+array"></a>

### *alienManager.array(includeInactive) ⇒ <code>Array</code>*
converts the list to array

**Kind**: instance method of [<code>AlienManager</code>](#AlienManager)  
**Overrides**: [<code>array</code>](#StructureManager+array)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeInactive | <code>boolean</code> | <code>false</code> | the converted array will contain inactive structures (destroyed, disconnected) or not |

<a name="StructureManager+isInstance"></a>

### *alienManager.isInstance(entity) ⇒ <code>boolean</code>*
To check whether the given object has the same instance as the structure's constructor or not

**Kind**: instance method of [<code>AlienManager</code>](#AlienManager)  
**Overrides**: [<code>isInstance</code>](#StructureManager+isInstance)  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>object</code> | The object needs to be checked |

<a name="StructureManager+findById"></a>

### *alienManager.findById(id, includeInactive) ⇒ [<code>Structure</code>](#Structure)*
Find a structure inside the manager with the given ID

**Kind**: instance method of [<code>AlienManager</code>](#AlienManager)  
**Overrides**: [<code>findById</code>](#StructureManager+findById)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, `null` if not found any  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | The Structure ID to be search for |
| includeInactive | <code>includeInactive</code> | <code>false</code> | To show whether it needs to search through inactive structures or not |

<a name="StructureManager+get"></a>

### *alienManager.get(uuid, [includeInactive]) ⇒ [<code>Structure</code>](#Structure)*
Get a structure by its UUID

**Kind**: instance method of [<code>AlienManager</code>](#AlienManager)  
**Overrides**: [<code>get</code>](#StructureManager+get)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, null if not found  
**Since**: 1.4.25  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| uuid | <code>string</code> |  | UUID of structure to lookup |
| [includeInactive] | <code>boolean</code> | <code>false</code> | Whether to also search for inactive structures |

<a name="StructureManager+limitReached"></a>

### *alienManager.limitReached() ⇒ <code>boolean</code>*
Check whether the number of structures inside this manager exceeds the server limit or not

**Kind**: instance method of [<code>AlienManager</code>](#AlienManager)  
**Overrides**: [<code>limitReached</code>](#StructureManager+limitReached)  
<a name="ArrayMap+at"></a>

### *alienManager.at() ⇒ <code>any</code> \| <code>undefined</code>*
Get element at index, Equivalent to `Array.prototype.at`

**Kind**: instance method of [<code>AlienManager</code>](#AlienManager)  
**Overrides**: [<code>at</code>](#ArrayMap+at)  
**Returns**: <code>any</code> \| <code>undefined</code> - The value at index  
<a name="ArrayMap+toArray"></a>

### *alienManager.toArray() ⇒ <code>array</code>*
Get an array from this object

**Kind**: instance method of [<code>AlienManager</code>](#AlienManager)  
**Overrides**: [<code>toArray</code>](#ArrayMap+toArray)  
<a name="AsteroidManager"></a>

## *AsteroidManager ⇐ [<code>EntityManager</code>](#EntityManager)*
The Asteroid Manager Instance.

**Kind**: global abstract class  
**Extends**: [<code>EntityManager</code>](#EntityManager)  

* *[AsteroidManager](#AsteroidManager) ⇐ [<code>EntityManager</code>](#EntityManager)*
    * *[.all](#StructureManager+all) : [<code>ArrayMap</code>](#ArrayMap)*
    * *[.limit](#StructureManager+limit) ⇒ <code>boolean</code>*
    * *[.length](#ArrayMap+length) : <code>number</code>*
    * *[.add(data)](#EntityManager+add) ⇒ [<code>Entity</code>](#Entity)*
    * *[.setById(id, data)](#EntityManager+setById) ⇒ [<code>Entity</code>](#Entity)*
    * *[.set(data)](#EntityManager+set) ⇒ [<code>Entity</code>](#Entity)*
    * *[.kill(id)](#EntityManager+kill) ⇒ [<code>Entity</code>](#Entity)*
    * *[.array(includeInactive)](#StructureManager+array) ⇒ <code>Array</code>*
    * *[.isInstance(entity)](#StructureManager+isInstance) ⇒ <code>boolean</code>*
    * *[.findById(id, includeInactive)](#StructureManager+findById) ⇒ [<code>Structure</code>](#Structure)*
    * *[.get(uuid, [includeInactive])](#StructureManager+get) ⇒ [<code>Structure</code>](#Structure)*
    * *[.limitReached()](#StructureManager+limitReached) ⇒ <code>boolean</code>*
    * *[.at()](#ArrayMap+at) ⇒ <code>any</code> \| <code>undefined</code>*
    * *[.toArray()](#ArrayMap+toArray) ⇒ <code>array</code>*

<a name="StructureManager+all"></a>

### *asteroidManager.all : [<code>ArrayMap</code>](#ArrayMap)*
A collection containing all structures in the manager

**Kind**: instance property of [<code>AsteroidManager</code>](#AsteroidManager)  
**Overrides**: [<code>all</code>](#StructureManager+all)  
**Read only**: true  
<a name="StructureManager+limit"></a>

### *asteroidManager.limit ⇒ <code>boolean</code>*
The server limit (maximum number of structures) of this manager

**Kind**: instance property of [<code>AsteroidManager</code>](#AsteroidManager)  
**Overrides**: [<code>limit</code>](#StructureManager+limit)  
**Read only**: true  
<a name="ArrayMap+length"></a>

### *asteroidManager.length : <code>number</code>*
Length of this object, same as `Map.prototype.size`

**Kind**: instance property of [<code>AsteroidManager</code>](#AsteroidManager)  
**Overrides**: [<code>length</code>](#ArrayMap+length)  
**Read only**: true  
<a name="EntityManager+add"></a>

### *asteroidManager.add(data) ⇒ [<code>Entity</code>](#Entity)*
Add a new entity to the game

**Kind**: instance method of [<code>AsteroidManager</code>](#AsteroidManager)  
**Overrides**: [<code>add</code>](#EntityManager+add)  
**Returns**: [<code>Entity</code>](#Entity) - - The created entity  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | entity creation options |

<a name="EntityManager+setById"></a>

### *asteroidManager.setById(id, data) ⇒ [<code>Entity</code>](#Entity)*
Set options to an entity based on ID

**Kind**: instance method of [<code>AsteroidManager</code>](#AsteroidManager)  
**Overrides**: [<code>setById</code>](#EntityManager+setById)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The entity's ID |
| data | <code>object</code> | Options to be set on the entity |

<a name="EntityManager+set"></a>

### *asteroidManager.set(data) ⇒ [<code>Entity</code>](#Entity)*
Set options to an entity

**Kind**: instance method of [<code>AsteroidManager</code>](#AsteroidManager)  
**Overrides**: [<code>set</code>](#EntityManager+set)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | Options to be set on the entity including the entity ID itself |

<a name="EntityManager+kill"></a>

### *asteroidManager.kill(id) ⇒ [<code>Entity</code>](#Entity)*
Kill an entity based on ID

**Kind**: instance method of [<code>AsteroidManager</code>](#AsteroidManager)  
**Overrides**: [<code>kill</code>](#EntityManager+kill)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The entity's ID needs to be killed |

<a name="StructureManager+array"></a>

### *asteroidManager.array(includeInactive) ⇒ <code>Array</code>*
converts the list to array

**Kind**: instance method of [<code>AsteroidManager</code>](#AsteroidManager)  
**Overrides**: [<code>array</code>](#StructureManager+array)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeInactive | <code>boolean</code> | <code>false</code> | the converted array will contain inactive structures (destroyed, disconnected) or not |

<a name="StructureManager+isInstance"></a>

### *asteroidManager.isInstance(entity) ⇒ <code>boolean</code>*
To check whether the given object has the same instance as the structure's constructor or not

**Kind**: instance method of [<code>AsteroidManager</code>](#AsteroidManager)  
**Overrides**: [<code>isInstance</code>](#StructureManager+isInstance)  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>object</code> | The object needs to be checked |

<a name="StructureManager+findById"></a>

### *asteroidManager.findById(id, includeInactive) ⇒ [<code>Structure</code>](#Structure)*
Find a structure inside the manager with the given ID

**Kind**: instance method of [<code>AsteroidManager</code>](#AsteroidManager)  
**Overrides**: [<code>findById</code>](#StructureManager+findById)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, `null` if not found any  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | The Structure ID to be search for |
| includeInactive | <code>includeInactive</code> | <code>false</code> | To show whether it needs to search through inactive structures or not |

<a name="StructureManager+get"></a>

### *asteroidManager.get(uuid, [includeInactive]) ⇒ [<code>Structure</code>](#Structure)*
Get a structure by its UUID

**Kind**: instance method of [<code>AsteroidManager</code>](#AsteroidManager)  
**Overrides**: [<code>get</code>](#StructureManager+get)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, null if not found  
**Since**: 1.4.25  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| uuid | <code>string</code> |  | UUID of structure to lookup |
| [includeInactive] | <code>boolean</code> | <code>false</code> | Whether to also search for inactive structures |

<a name="StructureManager+limitReached"></a>

### *asteroidManager.limitReached() ⇒ <code>boolean</code>*
Check whether the number of structures inside this manager exceeds the server limit or not

**Kind**: instance method of [<code>AsteroidManager</code>](#AsteroidManager)  
**Overrides**: [<code>limitReached</code>](#StructureManager+limitReached)  
<a name="ArrayMap+at"></a>

### *asteroidManager.at() ⇒ <code>any</code> \| <code>undefined</code>*
Get element at index, Equivalent to `Array.prototype.at`

**Kind**: instance method of [<code>AsteroidManager</code>](#AsteroidManager)  
**Overrides**: [<code>at</code>](#ArrayMap+at)  
**Returns**: <code>any</code> \| <code>undefined</code> - The value at index  
<a name="ArrayMap+toArray"></a>

### *asteroidManager.toArray() ⇒ <code>array</code>*
Get an array from this object

**Kind**: instance method of [<code>AsteroidManager</code>](#AsteroidManager)  
**Overrides**: [<code>toArray</code>](#ArrayMap+toArray)  
<a name="CollectibleManager"></a>

## *CollectibleManager ⇐ [<code>EntityManager</code>](#EntityManager)*
The Collectible Manager Instance.

**Kind**: global abstract class  
**Extends**: [<code>EntityManager</code>](#EntityManager)  

* *[CollectibleManager](#CollectibleManager) ⇐ [<code>EntityManager</code>](#EntityManager)*
    * *[.all](#StructureManager+all) : [<code>ArrayMap</code>](#ArrayMap)*
    * *[.limit](#StructureManager+limit) ⇒ <code>boolean</code>*
    * *[.length](#ArrayMap+length) : <code>number</code>*
    * *[.add(data)](#EntityManager+add) ⇒ [<code>Entity</code>](#Entity)*
    * *[.setById(id, data)](#EntityManager+setById) ⇒ [<code>Entity</code>](#Entity)*
    * *[.set(data)](#EntityManager+set) ⇒ [<code>Entity</code>](#Entity)*
    * *[.kill(id)](#EntityManager+kill) ⇒ [<code>Entity</code>](#Entity)*
    * *[.array(includeInactive)](#StructureManager+array) ⇒ <code>Array</code>*
    * *[.isInstance(entity)](#StructureManager+isInstance) ⇒ <code>boolean</code>*
    * *[.findById(id, includeInactive)](#StructureManager+findById) ⇒ [<code>Structure</code>](#Structure)*
    * *[.get(uuid, [includeInactive])](#StructureManager+get) ⇒ [<code>Structure</code>](#Structure)*
    * *[.limitReached()](#StructureManager+limitReached) ⇒ <code>boolean</code>*
    * *[.at()](#ArrayMap+at) ⇒ <code>any</code> \| <code>undefined</code>*
    * *[.toArray()](#ArrayMap+toArray) ⇒ <code>array</code>*

<a name="StructureManager+all"></a>

### *collectibleManager.all : [<code>ArrayMap</code>](#ArrayMap)*
A collection containing all structures in the manager

**Kind**: instance property of [<code>CollectibleManager</code>](#CollectibleManager)  
**Overrides**: [<code>all</code>](#StructureManager+all)  
**Read only**: true  
<a name="StructureManager+limit"></a>

### *collectibleManager.limit ⇒ <code>boolean</code>*
The server limit (maximum number of structures) of this manager

**Kind**: instance property of [<code>CollectibleManager</code>](#CollectibleManager)  
**Overrides**: [<code>limit</code>](#StructureManager+limit)  
**Read only**: true  
<a name="ArrayMap+length"></a>

### *collectibleManager.length : <code>number</code>*
Length of this object, same as `Map.prototype.size`

**Kind**: instance property of [<code>CollectibleManager</code>](#CollectibleManager)  
**Overrides**: [<code>length</code>](#ArrayMap+length)  
**Read only**: true  
<a name="EntityManager+add"></a>

### *collectibleManager.add(data) ⇒ [<code>Entity</code>](#Entity)*
Add a new entity to the game

**Kind**: instance method of [<code>CollectibleManager</code>](#CollectibleManager)  
**Overrides**: [<code>add</code>](#EntityManager+add)  
**Returns**: [<code>Entity</code>](#Entity) - - The created entity  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | entity creation options |

<a name="EntityManager+setById"></a>

### *collectibleManager.setById(id, data) ⇒ [<code>Entity</code>](#Entity)*
Set options to an entity based on ID

**Kind**: instance method of [<code>CollectibleManager</code>](#CollectibleManager)  
**Overrides**: [<code>setById</code>](#EntityManager+setById)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The entity's ID |
| data | <code>object</code> | Options to be set on the entity |

<a name="EntityManager+set"></a>

### *collectibleManager.set(data) ⇒ [<code>Entity</code>](#Entity)*
Set options to an entity

**Kind**: instance method of [<code>CollectibleManager</code>](#CollectibleManager)  
**Overrides**: [<code>set</code>](#EntityManager+set)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | Options to be set on the entity including the entity ID itself |

<a name="EntityManager+kill"></a>

### *collectibleManager.kill(id) ⇒ [<code>Entity</code>](#Entity)*
Kill an entity based on ID

**Kind**: instance method of [<code>CollectibleManager</code>](#CollectibleManager)  
**Overrides**: [<code>kill</code>](#EntityManager+kill)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The entity's ID needs to be killed |

<a name="StructureManager+array"></a>

### *collectibleManager.array(includeInactive) ⇒ <code>Array</code>*
converts the list to array

**Kind**: instance method of [<code>CollectibleManager</code>](#CollectibleManager)  
**Overrides**: [<code>array</code>](#StructureManager+array)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeInactive | <code>boolean</code> | <code>false</code> | the converted array will contain inactive structures (destroyed, disconnected) or not |

<a name="StructureManager+isInstance"></a>

### *collectibleManager.isInstance(entity) ⇒ <code>boolean</code>*
To check whether the given object has the same instance as the structure's constructor or not

**Kind**: instance method of [<code>CollectibleManager</code>](#CollectibleManager)  
**Overrides**: [<code>isInstance</code>](#StructureManager+isInstance)  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>object</code> | The object needs to be checked |

<a name="StructureManager+findById"></a>

### *collectibleManager.findById(id, includeInactive) ⇒ [<code>Structure</code>](#Structure)*
Find a structure inside the manager with the given ID

**Kind**: instance method of [<code>CollectibleManager</code>](#CollectibleManager)  
**Overrides**: [<code>findById</code>](#StructureManager+findById)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, `null` if not found any  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | The Structure ID to be search for |
| includeInactive | <code>includeInactive</code> | <code>false</code> | To show whether it needs to search through inactive structures or not |

<a name="StructureManager+get"></a>

### *collectibleManager.get(uuid, [includeInactive]) ⇒ [<code>Structure</code>](#Structure)*
Get a structure by its UUID

**Kind**: instance method of [<code>CollectibleManager</code>](#CollectibleManager)  
**Overrides**: [<code>get</code>](#StructureManager+get)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, null if not found  
**Since**: 1.4.25  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| uuid | <code>string</code> |  | UUID of structure to lookup |
| [includeInactive] | <code>boolean</code> | <code>false</code> | Whether to also search for inactive structures |

<a name="StructureManager+limitReached"></a>

### *collectibleManager.limitReached() ⇒ <code>boolean</code>*
Check whether the number of structures inside this manager exceeds the server limit or not

**Kind**: instance method of [<code>CollectibleManager</code>](#CollectibleManager)  
**Overrides**: [<code>limitReached</code>](#StructureManager+limitReached)  
<a name="ArrayMap+at"></a>

### *collectibleManager.at() ⇒ <code>any</code> \| <code>undefined</code>*
Get element at index, Equivalent to `Array.prototype.at`

**Kind**: instance method of [<code>CollectibleManager</code>](#CollectibleManager)  
**Overrides**: [<code>at</code>](#ArrayMap+at)  
**Returns**: <code>any</code> \| <code>undefined</code> - The value at index  
<a name="ArrayMap+toArray"></a>

### *collectibleManager.toArray() ⇒ <code>array</code>*
Get an array from this object

**Kind**: instance method of [<code>CollectibleManager</code>](#CollectibleManager)  
**Overrides**: [<code>toArray</code>](#ArrayMap+toArray)  
<a name="EntityManager"></a>

## *EntityManager ⇐ [<code>StructureManager</code>](#StructureManager)*
The Entity Manager Instance.

**Kind**: global abstract class  
**Extends**: [<code>StructureManager</code>](#StructureManager)  

* *[EntityManager](#EntityManager) ⇐ [<code>StructureManager</code>](#StructureManager)*
    * *[.all](#StructureManager+all) : [<code>ArrayMap</code>](#ArrayMap)*
    * *[.limit](#StructureManager+limit) ⇒ <code>boolean</code>*
    * *[.length](#ArrayMap+length) : <code>number</code>*
    * *[.add(data)](#EntityManager+add) ⇒ [<code>Entity</code>](#Entity)*
    * *[.setById(id, data)](#EntityManager+setById) ⇒ [<code>Entity</code>](#Entity)*
    * *[.set(data)](#EntityManager+set) ⇒ [<code>Entity</code>](#Entity)*
    * *[.kill(id)](#EntityManager+kill) ⇒ [<code>Entity</code>](#Entity)*
    * *[.array(includeInactive)](#StructureManager+array) ⇒ <code>Array</code>*
    * *[.isInstance(entity)](#StructureManager+isInstance) ⇒ <code>boolean</code>*
    * *[.findById(id, includeInactive)](#StructureManager+findById) ⇒ [<code>Structure</code>](#Structure)*
    * *[.get(uuid, [includeInactive])](#StructureManager+get) ⇒ [<code>Structure</code>](#Structure)*
    * *[.limitReached()](#StructureManager+limitReached) ⇒ <code>boolean</code>*
    * *[.at()](#ArrayMap+at) ⇒ <code>any</code> \| <code>undefined</code>*
    * *[.toArray()](#ArrayMap+toArray) ⇒ <code>array</code>*

<a name="StructureManager+all"></a>

### *entityManager.all : [<code>ArrayMap</code>](#ArrayMap)*
A collection containing all structures in the manager

**Kind**: instance property of [<code>EntityManager</code>](#EntityManager)  
**Overrides**: [<code>all</code>](#StructureManager+all)  
**Read only**: true  
<a name="StructureManager+limit"></a>

### *entityManager.limit ⇒ <code>boolean</code>*
The server limit (maximum number of structures) of this manager

**Kind**: instance property of [<code>EntityManager</code>](#EntityManager)  
**Overrides**: [<code>limit</code>](#StructureManager+limit)  
**Read only**: true  
<a name="ArrayMap+length"></a>

### *entityManager.length : <code>number</code>*
Length of this object, same as `Map.prototype.size`

**Kind**: instance property of [<code>EntityManager</code>](#EntityManager)  
**Overrides**: [<code>length</code>](#ArrayMap+length)  
**Read only**: true  
<a name="EntityManager+add"></a>

### *entityManager.add(data) ⇒ [<code>Entity</code>](#Entity)*
Add a new entity to the game

**Kind**: instance method of [<code>EntityManager</code>](#EntityManager)  
**Returns**: [<code>Entity</code>](#Entity) - - The created entity  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | entity creation options |

<a name="EntityManager+setById"></a>

### *entityManager.setById(id, data) ⇒ [<code>Entity</code>](#Entity)*
Set options to an entity based on ID

**Kind**: instance method of [<code>EntityManager</code>](#EntityManager)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The entity's ID |
| data | <code>object</code> | Options to be set on the entity |

<a name="EntityManager+set"></a>

### *entityManager.set(data) ⇒ [<code>Entity</code>](#Entity)*
Set options to an entity

**Kind**: instance method of [<code>EntityManager</code>](#EntityManager)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | Options to be set on the entity including the entity ID itself |

<a name="EntityManager+kill"></a>

### *entityManager.kill(id) ⇒ [<code>Entity</code>](#Entity)*
Kill an entity based on ID

**Kind**: instance method of [<code>EntityManager</code>](#EntityManager)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The entity's ID needs to be killed |

<a name="StructureManager+array"></a>

### *entityManager.array(includeInactive) ⇒ <code>Array</code>*
converts the list to array

**Kind**: instance method of [<code>EntityManager</code>](#EntityManager)  
**Overrides**: [<code>array</code>](#StructureManager+array)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeInactive | <code>boolean</code> | <code>false</code> | the converted array will contain inactive structures (destroyed, disconnected) or not |

<a name="StructureManager+isInstance"></a>

### *entityManager.isInstance(entity) ⇒ <code>boolean</code>*
To check whether the given object has the same instance as the structure's constructor or not

**Kind**: instance method of [<code>EntityManager</code>](#EntityManager)  
**Overrides**: [<code>isInstance</code>](#StructureManager+isInstance)  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>object</code> | The object needs to be checked |

<a name="StructureManager+findById"></a>

### *entityManager.findById(id, includeInactive) ⇒ [<code>Structure</code>](#Structure)*
Find a structure inside the manager with the given ID

**Kind**: instance method of [<code>EntityManager</code>](#EntityManager)  
**Overrides**: [<code>findById</code>](#StructureManager+findById)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, `null` if not found any  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | The Structure ID to be search for |
| includeInactive | <code>includeInactive</code> | <code>false</code> | To show whether it needs to search through inactive structures or not |

<a name="StructureManager+get"></a>

### *entityManager.get(uuid, [includeInactive]) ⇒ [<code>Structure</code>](#Structure)*
Get a structure by its UUID

**Kind**: instance method of [<code>EntityManager</code>](#EntityManager)  
**Overrides**: [<code>get</code>](#StructureManager+get)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, null if not found  
**Since**: 1.4.25  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| uuid | <code>string</code> |  | UUID of structure to lookup |
| [includeInactive] | <code>boolean</code> | <code>false</code> | Whether to also search for inactive structures |

<a name="StructureManager+limitReached"></a>

### *entityManager.limitReached() ⇒ <code>boolean</code>*
Check whether the number of structures inside this manager exceeds the server limit or not

**Kind**: instance method of [<code>EntityManager</code>](#EntityManager)  
**Overrides**: [<code>limitReached</code>](#StructureManager+limitReached)  
<a name="ArrayMap+at"></a>

### *entityManager.at() ⇒ <code>any</code> \| <code>undefined</code>*
Get element at index, Equivalent to `Array.prototype.at`

**Kind**: instance method of [<code>EntityManager</code>](#EntityManager)  
**Overrides**: [<code>at</code>](#ArrayMap+at)  
**Returns**: <code>any</code> \| <code>undefined</code> - The value at index  
<a name="ArrayMap+toArray"></a>

### *entityManager.toArray() ⇒ <code>array</code>*
Get an array from this object

**Kind**: instance method of [<code>EntityManager</code>](#EntityManager)  
**Overrides**: [<code>toArray</code>](#ArrayMap+toArray)  
<a name="ObjectManager"></a>

## *ObjectManager ⇐ [<code>StructureManager</code>](#StructureManager)*
The Object3D Manager Instance.

**Kind**: global abstract class  
**Extends**: [<code>StructureManager</code>](#StructureManager)  

* *[ObjectManager](#ObjectManager) ⇐ [<code>StructureManager</code>](#StructureManager)*
    * *[.parent](#ObjectManager+parent) : [<code>Ship</code>](#Ship) \| [<code>ModdingClient</code>](#ModdingClient)*
    * *[.all](#StructureManager+all) : [<code>ArrayMap</code>](#ArrayMap)*
    * *[.limit](#StructureManager+limit) ⇒ <code>boolean</code>*
    * *[.length](#ArrayMap+length) : <code>number</code>*
    * *[.add(data)](#ObjectManager+add) ⇒ [<code>Object3D</code>](#Object3D)*
    * *[.set(data)](#ObjectManager+set) ⇒ [<code>Object3D</code>](#Object3D)*
    * *[.setById(id, data)](#ObjectManager+setById) ⇒ [<code>Object3D</code>](#Object3D)*
    * *[.remove(id)](#ObjectManager+remove) ⇒ [<code>Object3D</code>](#Object3D)*
    * *[.array(includeInactive)](#StructureManager+array) ⇒ <code>Array</code>*
    * *[.isInstance(entity)](#StructureManager+isInstance) ⇒ <code>boolean</code>*
    * *[.findById(id, includeInactive)](#StructureManager+findById) ⇒ [<code>Structure</code>](#Structure)*
    * *[.get(uuid, [includeInactive])](#StructureManager+get) ⇒ [<code>Structure</code>](#Structure)*
    * *[.limitReached()](#StructureManager+limitReached) ⇒ <code>boolean</code>*
    * *[.at()](#ArrayMap+at) ⇒ <code>any</code> \| <code>undefined</code>*
    * *[.toArray()](#ArrayMap+toArray) ⇒ <code>array</code>*

<a name="ObjectManager+parent"></a>

### *objectManager.parent : [<code>Ship</code>](#Ship) \| [<code>ModdingClient</code>](#ModdingClient)*
Parent object (ship or modding client) of this manager

**Kind**: instance property of [<code>ObjectManager</code>](#ObjectManager)  
**Read only**: true  
**Since**: 1.4.30-alpha6  
<a name="StructureManager+all"></a>

### *objectManager.all : [<code>ArrayMap</code>](#ArrayMap)*
A collection containing all structures in the manager

**Kind**: instance property of [<code>ObjectManager</code>](#ObjectManager)  
**Overrides**: [<code>all</code>](#StructureManager+all)  
**Read only**: true  
<a name="StructureManager+limit"></a>

### *objectManager.limit ⇒ <code>boolean</code>*
The server limit (maximum number of structures) of this manager

**Kind**: instance property of [<code>ObjectManager</code>](#ObjectManager)  
**Overrides**: [<code>limit</code>](#StructureManager+limit)  
**Read only**: true  
<a name="ArrayMap+length"></a>

### *objectManager.length : <code>number</code>*
Length of this object, same as `Map.prototype.size`

**Kind**: instance property of [<code>ObjectManager</code>](#ObjectManager)  
**Overrides**: [<code>length</code>](#ArrayMap+length)  
**Read only**: true  
<a name="ObjectManager+add"></a>

### *objectManager.add(data) ⇒ [<code>Object3D</code>](#Object3D)*
Add a new object to the game. Note that physics is only available on global object.

**Kind**: instance method of [<code>ObjectManager</code>](#ObjectManager)  
**Returns**: [<code>Object3D</code>](#Object3D) - - The newly created object  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | object creation options |

<a name="ObjectManager+set"></a>

### *objectManager.set(data) ⇒ [<code>Object3D</code>](#Object3D)*
Set options to an object; can also be used to add a new object with given data to the game. Note that physics is only available on global object.

**Kind**: instance method of [<code>ObjectManager</code>](#ObjectManager)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | Options to be set on the object including the object ID itself |

<a name="ObjectManager+setById"></a>

### *objectManager.setById(id, data) ⇒ [<code>Object3D</code>](#Object3D)*
Set options to an object based on ID

**Kind**: instance method of [<code>ObjectManager</code>](#ObjectManager)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The object's ID |
| data | <code>object</code> | Options to be set on the object |

<a name="ObjectManager+remove"></a>

### *objectManager.remove(id) ⇒ [<code>Object3D</code>](#Object3D)*
Remove an object based on ID

**Kind**: instance method of [<code>ObjectManager</code>](#ObjectManager)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The object's ID needs to be killed, `null` to remove all objects in the scene |

<a name="StructureManager+array"></a>

### *objectManager.array(includeInactive) ⇒ <code>Array</code>*
converts the list to array

**Kind**: instance method of [<code>ObjectManager</code>](#ObjectManager)  
**Overrides**: [<code>array</code>](#StructureManager+array)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeInactive | <code>boolean</code> | <code>false</code> | the converted array will contain inactive structures (destroyed, disconnected) or not |

<a name="StructureManager+isInstance"></a>

### *objectManager.isInstance(entity) ⇒ <code>boolean</code>*
To check whether the given object has the same instance as the structure's constructor or not

**Kind**: instance method of [<code>ObjectManager</code>](#ObjectManager)  
**Overrides**: [<code>isInstance</code>](#StructureManager+isInstance)  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>object</code> | The object needs to be checked |

<a name="StructureManager+findById"></a>

### *objectManager.findById(id, includeInactive) ⇒ [<code>Structure</code>](#Structure)*
Find a structure inside the manager with the given ID

**Kind**: instance method of [<code>ObjectManager</code>](#ObjectManager)  
**Overrides**: [<code>findById</code>](#StructureManager+findById)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, `null` if not found any  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | The Structure ID to be search for |
| includeInactive | <code>includeInactive</code> | <code>false</code> | To show whether it needs to search through inactive structures or not |

<a name="StructureManager+get"></a>

### *objectManager.get(uuid, [includeInactive]) ⇒ [<code>Structure</code>](#Structure)*
Get a structure by its UUID

**Kind**: instance method of [<code>ObjectManager</code>](#ObjectManager)  
**Overrides**: [<code>get</code>](#StructureManager+get)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, null if not found  
**Since**: 1.4.25  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| uuid | <code>string</code> |  | UUID of structure to lookup |
| [includeInactive] | <code>boolean</code> | <code>false</code> | Whether to also search for inactive structures |

<a name="StructureManager+limitReached"></a>

### *objectManager.limitReached() ⇒ <code>boolean</code>*
Check whether the number of structures inside this manager exceeds the server limit or not

**Kind**: instance method of [<code>ObjectManager</code>](#ObjectManager)  
**Overrides**: [<code>limitReached</code>](#StructureManager+limitReached)  
<a name="ArrayMap+at"></a>

### *objectManager.at() ⇒ <code>any</code> \| <code>undefined</code>*
Get element at index, Equivalent to `Array.prototype.at`

**Kind**: instance method of [<code>ObjectManager</code>](#ObjectManager)  
**Overrides**: [<code>at</code>](#ArrayMap+at)  
**Returns**: <code>any</code> \| <code>undefined</code> - The value at index  
<a name="ArrayMap+toArray"></a>

### *objectManager.toArray() ⇒ <code>array</code>*
Get an array from this object

**Kind**: instance method of [<code>ObjectManager</code>](#ObjectManager)  
**Overrides**: [<code>toArray</code>](#ArrayMap+toArray)  
<a name="ObjectTypeManager"></a>

## *ObjectTypeManager ⇐ [<code>StructureManager</code>](#StructureManager)*
The Object Type Manager Instance.

**Kind**: global abstract class  
**Extends**: [<code>StructureManager</code>](#StructureManager)  

* *[ObjectTypeManager](#ObjectTypeManager) ⇐ [<code>StructureManager</code>](#StructureManager)*
    * *[.all](#StructureManager+all) : [<code>ArrayMap</code>](#ArrayMap)*
    * *[.limit](#StructureManager+limit) ⇒ <code>boolean</code>*
    * *[.length](#ArrayMap+length) : <code>number</code>*
    * *[.array(includeInactive)](#StructureManager+array) ⇒ <code>Array</code>*
    * *[.isInstance(entity)](#StructureManager+isInstance) ⇒ <code>boolean</code>*
    * *[.findById(id, includeInactive)](#StructureManager+findById) ⇒ [<code>Structure</code>](#Structure)*
    * *[.get(uuid, [includeInactive])](#StructureManager+get) ⇒ [<code>Structure</code>](#Structure)*
    * *[.limitReached()](#StructureManager+limitReached) ⇒ <code>boolean</code>*
    * *[.at()](#ArrayMap+at) ⇒ <code>any</code> \| <code>undefined</code>*
    * *[.toArray()](#ArrayMap+toArray) ⇒ <code>array</code>*

<a name="StructureManager+all"></a>

### *objectTypeManager.all : [<code>ArrayMap</code>](#ArrayMap)*
A collection containing all structures in the manager

**Kind**: instance property of [<code>ObjectTypeManager</code>](#ObjectTypeManager)  
**Overrides**: [<code>all</code>](#StructureManager+all)  
**Read only**: true  
<a name="StructureManager+limit"></a>

### *objectTypeManager.limit ⇒ <code>boolean</code>*
The server limit (maximum number of structures) of this manager

**Kind**: instance property of [<code>ObjectTypeManager</code>](#ObjectTypeManager)  
**Overrides**: [<code>limit</code>](#StructureManager+limit)  
**Read only**: true  
<a name="ArrayMap+length"></a>

### *objectTypeManager.length : <code>number</code>*
Length of this object, same as `Map.prototype.size`

**Kind**: instance property of [<code>ObjectTypeManager</code>](#ObjectTypeManager)  
**Overrides**: [<code>length</code>](#ArrayMap+length)  
**Read only**: true  
<a name="StructureManager+array"></a>

### *objectTypeManager.array(includeInactive) ⇒ <code>Array</code>*
converts the list to array

**Kind**: instance method of [<code>ObjectTypeManager</code>](#ObjectTypeManager)  
**Overrides**: [<code>array</code>](#StructureManager+array)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeInactive | <code>boolean</code> | <code>false</code> | the converted array will contain inactive structures (destroyed, disconnected) or not |

<a name="StructureManager+isInstance"></a>

### *objectTypeManager.isInstance(entity) ⇒ <code>boolean</code>*
To check whether the given object has the same instance as the structure's constructor or not

**Kind**: instance method of [<code>ObjectTypeManager</code>](#ObjectTypeManager)  
**Overrides**: [<code>isInstance</code>](#StructureManager+isInstance)  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>object</code> | The object needs to be checked |

<a name="StructureManager+findById"></a>

### *objectTypeManager.findById(id, includeInactive) ⇒ [<code>Structure</code>](#Structure)*
Find a structure inside the manager with the given ID

**Kind**: instance method of [<code>ObjectTypeManager</code>](#ObjectTypeManager)  
**Overrides**: [<code>findById</code>](#StructureManager+findById)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, `null` if not found any  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | The Structure ID to be search for |
| includeInactive | <code>includeInactive</code> | <code>false</code> | To show whether it needs to search through inactive structures or not |

<a name="StructureManager+get"></a>

### *objectTypeManager.get(uuid, [includeInactive]) ⇒ [<code>Structure</code>](#Structure)*
Get a structure by its UUID

**Kind**: instance method of [<code>ObjectTypeManager</code>](#ObjectTypeManager)  
**Overrides**: [<code>get</code>](#StructureManager+get)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, null if not found  
**Since**: 1.4.25  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| uuid | <code>string</code> |  | UUID of structure to lookup |
| [includeInactive] | <code>boolean</code> | <code>false</code> | Whether to also search for inactive structures |

<a name="StructureManager+limitReached"></a>

### *objectTypeManager.limitReached() ⇒ <code>boolean</code>*
Check whether the number of structures inside this manager exceeds the server limit or not

**Kind**: instance method of [<code>ObjectTypeManager</code>](#ObjectTypeManager)  
**Overrides**: [<code>limitReached</code>](#StructureManager+limitReached)  
<a name="ArrayMap+at"></a>

### *objectTypeManager.at() ⇒ <code>any</code> \| <code>undefined</code>*
Get element at index, Equivalent to `Array.prototype.at`

**Kind**: instance method of [<code>ObjectTypeManager</code>](#ObjectTypeManager)  
**Overrides**: [<code>at</code>](#ArrayMap+at)  
**Returns**: <code>any</code> \| <code>undefined</code> - The value at index  
<a name="ArrayMap+toArray"></a>

### *objectTypeManager.toArray() ⇒ <code>array</code>*
Get an array from this object

**Kind**: instance method of [<code>ObjectTypeManager</code>](#ObjectTypeManager)  
**Overrides**: [<code>toArray</code>](#ArrayMap+toArray)  
<a name="ShipManager"></a>

## *ShipManager ⇐ [<code>EntityManager</code>](#EntityManager)*
The Ship Manager Instance.

**Kind**: global abstract class  
**Extends**: [<code>EntityManager</code>](#EntityManager)  

* *[ShipManager](#ShipManager) ⇐ [<code>EntityManager</code>](#EntityManager)*
    * *[.ui_components](#ShipManager+ui_components) : [<code>UIComponentManager</code>](#UIComponentManager)*
    * *[.all](#StructureManager+all) : [<code>ArrayMap</code>](#ArrayMap)*
    * *[.limit](#StructureManager+limit) ⇒ <code>boolean</code>*
    * *[.length](#ArrayMap+length) : <code>number</code>*
    * *[.findById(id, includeInactive)](#ShipManager+findById) ⇒ [<code>Ship</code>](#Ship)*
    * *[.showInstructor()](#ShipManager+showInstructor) ⇒ [<code>ShipManager</code>](#ShipManager)*
    * *[.instructorSays(message, character)](#ShipManager+instructorSays) ⇒ [<code>ShipManager</code>](#ShipManager)*
    * *[.hideInstructor()](#ShipManager+hideInstructor) ⇒ [<code>ShipManager</code>](#ShipManager)*
    * *[.intermission(data, gameOver)](#ShipManager+intermission) ⇒ [<code>ShipManager</code>](#ShipManager)*
    * *[.gameOver(data)](#ShipManager+gameOver) ⇒ [<code>ShipManager</code>](#ShipManager)*
    * *[.gameover(data)](#ShipManager+gameover) ⇒ [<code>ShipManager</code>](#ShipManager)*
    * *[.add(data)](#EntityManager+add) ⇒ [<code>Entity</code>](#Entity)*
    * *[.setById(id, data)](#EntityManager+setById) ⇒ [<code>Entity</code>](#Entity)*
    * *[.set(data)](#EntityManager+set) ⇒ [<code>Entity</code>](#Entity)*
    * *[.kill(id)](#EntityManager+kill) ⇒ [<code>Entity</code>](#Entity)*
    * *[.array(includeInactive)](#StructureManager+array) ⇒ <code>Array</code>*
    * *[.isInstance(entity)](#StructureManager+isInstance) ⇒ <code>boolean</code>*
    * *[.get(uuid, [includeInactive])](#StructureManager+get) ⇒ [<code>Structure</code>](#Structure)*
    * *[.limitReached()](#StructureManager+limitReached) ⇒ <code>boolean</code>*
    * *[.at()](#ArrayMap+at) ⇒ <code>any</code> \| <code>undefined</code>*
    * *[.toArray()](#ArrayMap+toArray) ⇒ <code>array</code>*

<a name="ShipManager+ui_components"></a>

### *shipManager.ui\_components : [<code>UIComponentManager</code>](#UIComponentManager)*
The global UI Component Manager

**Kind**: instance property of [<code>ShipManager</code>](#ShipManager)  
**Read only**: true  
**Since**: 1.4.2-alpha6  
<a name="StructureManager+all"></a>

### *shipManager.all : [<code>ArrayMap</code>](#ArrayMap)*
A collection containing all structures in the manager

**Kind**: instance property of [<code>ShipManager</code>](#ShipManager)  
**Overrides**: [<code>all</code>](#StructureManager+all)  
**Read only**: true  
<a name="StructureManager+limit"></a>

### *shipManager.limit ⇒ <code>boolean</code>*
The server limit (maximum number of structures) of this manager

**Kind**: instance property of [<code>ShipManager</code>](#ShipManager)  
**Overrides**: [<code>limit</code>](#StructureManager+limit)  
**Read only**: true  
<a name="ArrayMap+length"></a>

### *shipManager.length : <code>number</code>*
Length of this object, same as `Map.prototype.size`

**Kind**: instance property of [<code>ShipManager</code>](#ShipManager)  
**Overrides**: [<code>length</code>](#ArrayMap+length)  
**Read only**: true  
<a name="ShipManager+findById"></a>

### *shipManager.findById(id, includeInactive) ⇒ [<code>Ship</code>](#Ship)*
Find an active ship inside the manager with the given ID.<br>Due to resuability of ship ID, This method cannot find ships which are already disconnected from the game.<br>Use [get](#StructureManager+get) with UUID instead for more consistent search.

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  
**Overrides**: [<code>findById</code>](#StructureManager+findById)  
**Returns**: [<code>Ship</code>](#Ship) - The ship object, `null` if not found any  
**Since**: 1.4.25  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | The ship ID to be search for |
| includeInactive | <code>includeInactive</code> | <code>false</code> | To show whether it should search for not-yet-spawned ship |

<a name="ShipManager+showInstructor"></a>

### *shipManager.showInstructor() ⇒ [<code>ShipManager</code>](#ShipManager)*
Shows instructor screen to every ships in the game

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  
<a name="ShipManager+instructorSays"></a>

### *shipManager.instructorSays(message, character) ⇒ [<code>ShipManager</code>](#ShipManager)*
Says something to every ships in the game using instructor screen with given instructor

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | The message needs to be delivered |
| character | <code>string</code> | The instructor's name |

<a name="ShipManager+hideInstructor"></a>

### *shipManager.hideInstructor() ⇒ [<code>ShipManager</code>](#ShipManager)*
Hide instructor screen from every ships in the game

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  
<a name="ShipManager+intermission"></a>

### *shipManager.intermission(data, gameOver) ⇒ [<code>ShipManager</code>](#ShipManager)*
Shows intermission to every ships in the game

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  
**Since**: 1.0.4-alpha6  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | message data |
| gameOver | <code>boolean</code> | to indicate if that intermission screen will gameover the player or not |

<a name="ShipManager+gameOver"></a>

### *shipManager.gameOver(data) ⇒ [<code>ShipManager</code>](#ShipManager)*
Show game over screen to every ships in the game

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>data</code> | message data |

<a name="ShipManager+gameover"></a>

### *shipManager.gameover(data) ⇒ [<code>ShipManager</code>](#ShipManager)*
Show game over screen to every ships in the game

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>data</code> | message data |

<a name="EntityManager+add"></a>

### *shipManager.add(data) ⇒ [<code>Entity</code>](#Entity)*
Add a new entity to the game

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  
**Overrides**: [<code>add</code>](#EntityManager+add)  
**Returns**: [<code>Entity</code>](#Entity) - - The created entity  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | entity creation options |

<a name="EntityManager+setById"></a>

### *shipManager.setById(id, data) ⇒ [<code>Entity</code>](#Entity)*
Set options to an entity based on ID

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  
**Overrides**: [<code>setById</code>](#EntityManager+setById)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The entity's ID |
| data | <code>object</code> | Options to be set on the entity |

<a name="EntityManager+set"></a>

### *shipManager.set(data) ⇒ [<code>Entity</code>](#Entity)*
Set options to an entity

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  
**Overrides**: [<code>set</code>](#EntityManager+set)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | Options to be set on the entity including the entity ID itself |

<a name="EntityManager+kill"></a>

### *shipManager.kill(id) ⇒ [<code>Entity</code>](#Entity)*
Kill an entity based on ID

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  
**Overrides**: [<code>kill</code>](#EntityManager+kill)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The entity's ID needs to be killed |

<a name="StructureManager+array"></a>

### *shipManager.array(includeInactive) ⇒ <code>Array</code>*
converts the list to array

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  
**Overrides**: [<code>array</code>](#StructureManager+array)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeInactive | <code>boolean</code> | <code>false</code> | the converted array will contain inactive structures (destroyed, disconnected) or not |

<a name="StructureManager+isInstance"></a>

### *shipManager.isInstance(entity) ⇒ <code>boolean</code>*
To check whether the given object has the same instance as the structure's constructor or not

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  
**Overrides**: [<code>isInstance</code>](#StructureManager+isInstance)  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>object</code> | The object needs to be checked |

<a name="StructureManager+get"></a>

### *shipManager.get(uuid, [includeInactive]) ⇒ [<code>Structure</code>](#Structure)*
Get a structure by its UUID

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  
**Overrides**: [<code>get</code>](#StructureManager+get)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, null if not found  
**Since**: 1.4.25  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| uuid | <code>string</code> |  | UUID of structure to lookup |
| [includeInactive] | <code>boolean</code> | <code>false</code> | Whether to also search for inactive structures |

<a name="StructureManager+limitReached"></a>

### *shipManager.limitReached() ⇒ <code>boolean</code>*
Check whether the number of structures inside this manager exceeds the server limit or not

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  
**Overrides**: [<code>limitReached</code>](#StructureManager+limitReached)  
<a name="ArrayMap+at"></a>

### *shipManager.at() ⇒ <code>any</code> \| <code>undefined</code>*
Get element at index, Equivalent to `Array.prototype.at`

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  
**Overrides**: [<code>at</code>](#ArrayMap+at)  
**Returns**: <code>any</code> \| <code>undefined</code> - The value at index  
<a name="ArrayMap+toArray"></a>

### *shipManager.toArray() ⇒ <code>array</code>*
Get an array from this object

**Kind**: instance method of [<code>ShipManager</code>](#ShipManager)  
**Overrides**: [<code>toArray</code>](#ArrayMap+toArray)  
<a name="StationModuleManager"></a>

## *StationModuleManager ⇐ [<code>StructureManager</code>](#StructureManager)*
The Station Module Manager Instance.

**Kind**: global abstract class  
**Extends**: [<code>StructureManager</code>](#StructureManager)  

* *[StationModuleManager](#StationModuleManager) ⇐ [<code>StructureManager</code>](#StructureManager)*
    * *[.all](#StructureManager+all) : [<code>ArrayMap</code>](#ArrayMap)*
    * *[.limit](#StructureManager+limit) ⇒ <code>boolean</code>*
    * *[.length](#ArrayMap+length) : <code>number</code>*
    * *[.array(includeInactive)](#StructureManager+array) ⇒ <code>Array</code>*
    * *[.isInstance(entity)](#StructureManager+isInstance) ⇒ <code>boolean</code>*
    * *[.findById(id, includeInactive)](#StructureManager+findById) ⇒ [<code>Structure</code>](#Structure)*
    * *[.get(uuid, [includeInactive])](#StructureManager+get) ⇒ [<code>Structure</code>](#Structure)*
    * *[.limitReached()](#StructureManager+limitReached) ⇒ <code>boolean</code>*
    * *[.at()](#ArrayMap+at) ⇒ <code>any</code> \| <code>undefined</code>*
    * *[.toArray()](#ArrayMap+toArray) ⇒ <code>array</code>*

<a name="StructureManager+all"></a>

### *stationModuleManager.all : [<code>ArrayMap</code>](#ArrayMap)*
A collection containing all structures in the manager

**Kind**: instance property of [<code>StationModuleManager</code>](#StationModuleManager)  
**Overrides**: [<code>all</code>](#StructureManager+all)  
**Read only**: true  
<a name="StructureManager+limit"></a>

### *stationModuleManager.limit ⇒ <code>boolean</code>*
The server limit (maximum number of structures) of this manager

**Kind**: instance property of [<code>StationModuleManager</code>](#StationModuleManager)  
**Overrides**: [<code>limit</code>](#StructureManager+limit)  
**Read only**: true  
<a name="ArrayMap+length"></a>

### *stationModuleManager.length : <code>number</code>*
Length of this object, same as `Map.prototype.size`

**Kind**: instance property of [<code>StationModuleManager</code>](#StationModuleManager)  
**Overrides**: [<code>length</code>](#ArrayMap+length)  
**Read only**: true  
<a name="StructureManager+array"></a>

### *stationModuleManager.array(includeInactive) ⇒ <code>Array</code>*
converts the list to array

**Kind**: instance method of [<code>StationModuleManager</code>](#StationModuleManager)  
**Overrides**: [<code>array</code>](#StructureManager+array)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeInactive | <code>boolean</code> | <code>false</code> | the converted array will contain inactive structures (destroyed, disconnected) or not |

<a name="StructureManager+isInstance"></a>

### *stationModuleManager.isInstance(entity) ⇒ <code>boolean</code>*
To check whether the given object has the same instance as the structure's constructor or not

**Kind**: instance method of [<code>StationModuleManager</code>](#StationModuleManager)  
**Overrides**: [<code>isInstance</code>](#StructureManager+isInstance)  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>object</code> | The object needs to be checked |

<a name="StructureManager+findById"></a>

### *stationModuleManager.findById(id, includeInactive) ⇒ [<code>Structure</code>](#Structure)*
Find a structure inside the manager with the given ID

**Kind**: instance method of [<code>StationModuleManager</code>](#StationModuleManager)  
**Overrides**: [<code>findById</code>](#StructureManager+findById)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, `null` if not found any  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | The Structure ID to be search for |
| includeInactive | <code>includeInactive</code> | <code>false</code> | To show whether it needs to search through inactive structures or not |

<a name="StructureManager+get"></a>

### *stationModuleManager.get(uuid, [includeInactive]) ⇒ [<code>Structure</code>](#Structure)*
Get a structure by its UUID

**Kind**: instance method of [<code>StationModuleManager</code>](#StationModuleManager)  
**Overrides**: [<code>get</code>](#StructureManager+get)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, null if not found  
**Since**: 1.4.25  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| uuid | <code>string</code> |  | UUID of structure to lookup |
| [includeInactive] | <code>boolean</code> | <code>false</code> | Whether to also search for inactive structures |

<a name="StructureManager+limitReached"></a>

### *stationModuleManager.limitReached() ⇒ <code>boolean</code>*
Check whether the number of structures inside this manager exceeds the server limit or not

**Kind**: instance method of [<code>StationModuleManager</code>](#StationModuleManager)  
**Overrides**: [<code>limitReached</code>](#StructureManager+limitReached)  
<a name="ArrayMap+at"></a>

### *stationModuleManager.at() ⇒ <code>any</code> \| <code>undefined</code>*
Get element at index, Equivalent to `Array.prototype.at`

**Kind**: instance method of [<code>StationModuleManager</code>](#StationModuleManager)  
**Overrides**: [<code>at</code>](#ArrayMap+at)  
**Returns**: <code>any</code> \| <code>undefined</code> - The value at index  
<a name="ArrayMap+toArray"></a>

### *stationModuleManager.toArray() ⇒ <code>array</code>*
Get an array from this object

**Kind**: instance method of [<code>StationModuleManager</code>](#StationModuleManager)  
**Overrides**: [<code>toArray</code>](#ArrayMap+toArray)  
<a name="StructureManager"></a>

## *StructureManager ⇐ [<code>ArrayMap</code>](#ArrayMap)*
The Station Module Manager Instance.

**Kind**: global abstract class  
**Extends**: [<code>ArrayMap</code>](#ArrayMap)  

* *[StructureManager](#StructureManager) ⇐ [<code>ArrayMap</code>](#ArrayMap)*
    * *[.all](#StructureManager+all) : [<code>ArrayMap</code>](#ArrayMap)*
    * *[.limit](#StructureManager+limit) ⇒ <code>boolean</code>*
    * *[.length](#ArrayMap+length) : <code>number</code>*
    * *[.array(includeInactive)](#StructureManager+array) ⇒ <code>Array</code>*
    * *[.isInstance(entity)](#StructureManager+isInstance) ⇒ <code>boolean</code>*
    * *[.findById(id, includeInactive)](#StructureManager+findById) ⇒ [<code>Structure</code>](#Structure)*
    * *[.get(uuid, [includeInactive])](#StructureManager+get) ⇒ [<code>Structure</code>](#Structure)*
    * *[.limitReached()](#StructureManager+limitReached) ⇒ <code>boolean</code>*
    * *[.at()](#ArrayMap+at) ⇒ <code>any</code> \| <code>undefined</code>*
    * *[.toArray()](#ArrayMap+toArray) ⇒ <code>array</code>*

<a name="StructureManager+all"></a>

### *structureManager.all : [<code>ArrayMap</code>](#ArrayMap)*
A collection containing all structures in the manager

**Kind**: instance property of [<code>StructureManager</code>](#StructureManager)  
**Read only**: true  
<a name="StructureManager+limit"></a>

### *structureManager.limit ⇒ <code>boolean</code>*
The server limit (maximum number of structures) of this manager

**Kind**: instance property of [<code>StructureManager</code>](#StructureManager)  
**Read only**: true  
<a name="ArrayMap+length"></a>

### *structureManager.length : <code>number</code>*
Length of this object, same as `Map.prototype.size`

**Kind**: instance property of [<code>StructureManager</code>](#StructureManager)  
**Overrides**: [<code>length</code>](#ArrayMap+length)  
**Read only**: true  
<a name="StructureManager+array"></a>

### *structureManager.array(includeInactive) ⇒ <code>Array</code>*
converts the list to array

**Kind**: instance method of [<code>StructureManager</code>](#StructureManager)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeInactive | <code>boolean</code> | <code>false</code> | the converted array will contain inactive structures (destroyed, disconnected) or not |

<a name="StructureManager+isInstance"></a>

### *structureManager.isInstance(entity) ⇒ <code>boolean</code>*
To check whether the given object has the same instance as the structure's constructor or not

**Kind**: instance method of [<code>StructureManager</code>](#StructureManager)  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>object</code> | The object needs to be checked |

<a name="StructureManager+findById"></a>

### *structureManager.findById(id, includeInactive) ⇒ [<code>Structure</code>](#Structure)*
Find a structure inside the manager with the given ID

**Kind**: instance method of [<code>StructureManager</code>](#StructureManager)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, `null` if not found any  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | The Structure ID to be search for |
| includeInactive | <code>includeInactive</code> | <code>false</code> | To show whether it needs to search through inactive structures or not |

<a name="StructureManager+get"></a>

### *structureManager.get(uuid, [includeInactive]) ⇒ [<code>Structure</code>](#Structure)*
Get a structure by its UUID

**Kind**: instance method of [<code>StructureManager</code>](#StructureManager)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, null if not found  
**Since**: 1.4.25  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| uuid | <code>string</code> |  | UUID of structure to lookup |
| [includeInactive] | <code>boolean</code> | <code>false</code> | Whether to also search for inactive structures |

<a name="StructureManager+limitReached"></a>

### *structureManager.limitReached() ⇒ <code>boolean</code>*
Check whether the number of structures inside this manager exceeds the server limit or not

**Kind**: instance method of [<code>StructureManager</code>](#StructureManager)  
<a name="ArrayMap+at"></a>

### *structureManager.at() ⇒ <code>any</code> \| <code>undefined</code>*
Get element at index, Equivalent to `Array.prototype.at`

**Kind**: instance method of [<code>StructureManager</code>](#StructureManager)  
**Overrides**: [<code>at</code>](#ArrayMap+at)  
**Returns**: <code>any</code> \| <code>undefined</code> - The value at index  
<a name="ArrayMap+toArray"></a>

### *structureManager.toArray() ⇒ <code>array</code>*
Get an array from this object

**Kind**: instance method of [<code>StructureManager</code>](#StructureManager)  
**Overrides**: [<code>toArray</code>](#ArrayMap+toArray)  
<a name="TeamManager"></a>

## *TeamManager ⇐ [<code>StructureManager</code>](#StructureManager)*
The Team Manager Instance.

**Kind**: global abstract class  
**Extends**: [<code>StructureManager</code>](#StructureManager)  

* *[TeamManager](#TeamManager) ⇐ [<code>StructureManager</code>](#StructureManager)*
    * *[.all](#StructureManager+all) : [<code>ArrayMap</code>](#ArrayMap)*
    * *[.limit](#StructureManager+limit) ⇒ <code>boolean</code>*
    * *[.length](#ArrayMap+length) : <code>number</code>*
    * *[.array(includeInactive)](#StructureManager+array) ⇒ <code>Array</code>*
    * *[.isInstance(entity)](#StructureManager+isInstance) ⇒ <code>boolean</code>*
    * *[.findById(id, includeInactive)](#StructureManager+findById) ⇒ [<code>Structure</code>](#Structure)*
    * *[.get(uuid, [includeInactive])](#StructureManager+get) ⇒ [<code>Structure</code>](#Structure)*
    * *[.limitReached()](#StructureManager+limitReached) ⇒ <code>boolean</code>*
    * *[.at()](#ArrayMap+at) ⇒ <code>any</code> \| <code>undefined</code>*
    * *[.toArray()](#ArrayMap+toArray) ⇒ <code>array</code>*

<a name="StructureManager+all"></a>

### *teamManager.all : [<code>ArrayMap</code>](#ArrayMap)*
A collection containing all structures in the manager

**Kind**: instance property of [<code>TeamManager</code>](#TeamManager)  
**Overrides**: [<code>all</code>](#StructureManager+all)  
**Read only**: true  
<a name="StructureManager+limit"></a>

### *teamManager.limit ⇒ <code>boolean</code>*
The server limit (maximum number of structures) of this manager

**Kind**: instance property of [<code>TeamManager</code>](#TeamManager)  
**Overrides**: [<code>limit</code>](#StructureManager+limit)  
**Read only**: true  
<a name="ArrayMap+length"></a>

### *teamManager.length : <code>number</code>*
Length of this object, same as `Map.prototype.size`

**Kind**: instance property of [<code>TeamManager</code>](#TeamManager)  
**Overrides**: [<code>length</code>](#ArrayMap+length)  
**Read only**: true  
<a name="StructureManager+array"></a>

### *teamManager.array(includeInactive) ⇒ <code>Array</code>*
converts the list to array

**Kind**: instance method of [<code>TeamManager</code>](#TeamManager)  
**Overrides**: [<code>array</code>](#StructureManager+array)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeInactive | <code>boolean</code> | <code>false</code> | the converted array will contain inactive structures (destroyed, disconnected) or not |

<a name="StructureManager+isInstance"></a>

### *teamManager.isInstance(entity) ⇒ <code>boolean</code>*
To check whether the given object has the same instance as the structure's constructor or not

**Kind**: instance method of [<code>TeamManager</code>](#TeamManager)  
**Overrides**: [<code>isInstance</code>](#StructureManager+isInstance)  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>object</code> | The object needs to be checked |

<a name="StructureManager+findById"></a>

### *teamManager.findById(id, includeInactive) ⇒ [<code>Structure</code>](#Structure)*
Find a structure inside the manager with the given ID

**Kind**: instance method of [<code>TeamManager</code>](#TeamManager)  
**Overrides**: [<code>findById</code>](#StructureManager+findById)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, `null` if not found any  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | The Structure ID to be search for |
| includeInactive | <code>includeInactive</code> | <code>false</code> | To show whether it needs to search through inactive structures or not |

<a name="StructureManager+get"></a>

### *teamManager.get(uuid, [includeInactive]) ⇒ [<code>Structure</code>](#Structure)*
Get a structure by its UUID

**Kind**: instance method of [<code>TeamManager</code>](#TeamManager)  
**Overrides**: [<code>get</code>](#StructureManager+get)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, null if not found  
**Since**: 1.4.25  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| uuid | <code>string</code> |  | UUID of structure to lookup |
| [includeInactive] | <code>boolean</code> | <code>false</code> | Whether to also search for inactive structures |

<a name="StructureManager+limitReached"></a>

### *teamManager.limitReached() ⇒ <code>boolean</code>*
Check whether the number of structures inside this manager exceeds the server limit or not

**Kind**: instance method of [<code>TeamManager</code>](#TeamManager)  
**Overrides**: [<code>limitReached</code>](#StructureManager+limitReached)  
<a name="ArrayMap+at"></a>

### *teamManager.at() ⇒ <code>any</code> \| <code>undefined</code>*
Get element at index, Equivalent to `Array.prototype.at`

**Kind**: instance method of [<code>TeamManager</code>](#TeamManager)  
**Overrides**: [<code>at</code>](#ArrayMap+at)  
**Returns**: <code>any</code> \| <code>undefined</code> - The value at index  
<a name="ArrayMap+toArray"></a>

### *teamManager.toArray() ⇒ <code>array</code>*
Get an array from this object

**Kind**: instance method of [<code>TeamManager</code>](#TeamManager)  
**Overrides**: [<code>toArray</code>](#ArrayMap+toArray)  
<a name="TimeManager"></a>

## *TimeManager*
The Time Manager (Timer) Instance.<br>Please note that all functions running in the timer will be bound to its parent `ModdingClient` object by default.

**Kind**: global abstract class  
**Since**: 1.0.17-alpha6  

* *[TimeManager](#TimeManager)*
    * *[.step](#TimeManager+step) : <code>number</code>*
    * *[.setTimeout(StringOrFunction, delay, ...args)](#TimeManager+setTimeout) ⇒ <code>number</code>*
    * *[.setInterval(StringOrFunction, interval, ...args)](#TimeManager+setInterval) ⇒ <code>number</code>*
    * *[.setImmediate(StringOrFunction, ...args)](#TimeManager+setImmediate) ⇒ <code>number</code>*
    * *[.clearTimeout(id)](#TimeManager+clearTimeout) ⇒ [<code>TimeManager</code>](#TimeManager)*
    * *[.clearInterval(id)](#TimeManager+clearInterval) ⇒ [<code>TimeManager</code>](#TimeManager)*
    * *[.clearImmediate(id)](#TimeManager+clearImmediate) ⇒ [<code>TimeManager</code>](#TimeManager)*
    * *[.clear(id)](#TimeManager+clear) ⇒ [<code>TimeManager</code>](#TimeManager)*

<a name="TimeManager+step"></a>

### *timeManager.step : <code>number</code>*
The game step

**Kind**: instance property of [<code>TimeManager</code>](#TimeManager)  
**Read only**: true  
<a name="TimeManager+setTimeout"></a>

### *timeManager.setTimeout(StringOrFunction, delay, ...args) ⇒ <code>number</code>*
Set timeout in sync with game

**Kind**: instance method of [<code>TimeManager</code>](#TimeManager)  
**Returns**: <code>number</code> - - The Timer ID  

| Param | Type | Description |
| --- | --- | --- |
| StringOrFunction | <code>function</code> \| <code>string</code> | The function to be executed or a string to be evaluated |
| delay | <code>number</code> | The delay (in game ticks). Defaults to 0 if omitted or null/undefined |
| ...args | <code>any</code> | The arguments to passed into the function in case the first argument is a function |

<a name="TimeManager+setInterval"></a>

### *timeManager.setInterval(StringOrFunction, interval, ...args) ⇒ <code>number</code>*
Set interval in sync with game

**Kind**: instance method of [<code>TimeManager</code>](#TimeManager)  
**Returns**: <code>number</code> - - The Timer ID  

| Param | Type | Description |
| --- | --- | --- |
| StringOrFunction | <code>function</code> \| <code>string</code> | The function to be executed or a string to be evaluated |
| interval | <code>number</code> | The delay (in game ticks). Defaults to 0 if omitted or null/undefined |
| ...args | <code>any</code> | The arguments to passed into the function in case the first argument is a function |

<a name="TimeManager+setImmediate"></a>

### *timeManager.setImmediate(StringOrFunction, ...args) ⇒ <code>number</code>*
Set immediate in sync with game (set function to call or code to execute next tick)

**Kind**: instance method of [<code>TimeManager</code>](#TimeManager)  
**Returns**: <code>number</code> - - The Timer ID  

| Param | Type | Description |
| --- | --- | --- |
| StringOrFunction | <code>function</code> \| <code>string</code> | The function to be executed or a string to be evaluated |
| ...args | <code>any</code> | The arguments to passed into the function in case the first argument is a function |

<a name="TimeManager+clearTimeout"></a>

### *timeManager.clearTimeout(id) ⇒ [<code>TimeManager</code>](#TimeManager)*
Clear a timeout with specified ID

**Kind**: instance method of [<code>TimeManager</code>](#TimeManager)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The timeout ID, omitting or null/undefined will clear all current timeouts |

<a name="TimeManager+clearInterval"></a>

### *timeManager.clearInterval(id) ⇒ [<code>TimeManager</code>](#TimeManager)*
Clear an interval with specified ID

**Kind**: instance method of [<code>TimeManager</code>](#TimeManager)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The interval ID to clear, omitting or null/undefined will clear all current intervals |

<a name="TimeManager+clearImmediate"></a>

### *timeManager.clearImmediate(id) ⇒ [<code>TimeManager</code>](#TimeManager)*
Clear an immediate with specified ID

**Kind**: instance method of [<code>TimeManager</code>](#TimeManager)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The immediate ID to clear, omitting or null/undefined will clear all current immediates |

<a name="TimeManager+clear"></a>

### *timeManager.clear(id) ⇒ [<code>TimeManager</code>](#TimeManager)*
Clear a timer (in general) with specified ID

**Kind**: instance method of [<code>TimeManager</code>](#TimeManager)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The timer ID to clear, omitting or null/undefined will clear all current timers |

<a name="UIComponentManager"></a>

## *UIComponentManager ⇐ [<code>StructureManager</code>](#StructureManager)*
The UI Components Manager.

**Kind**: global abstract class  
**Extends**: [<code>StructureManager</code>](#StructureManager)  
**Since**: 1.4.2-alpha6  

* *[UIComponentManager](#UIComponentManager) ⇐ [<code>StructureManager</code>](#StructureManager)*
    * *[.parent](#UIComponentManager+parent) : [<code>Ship</code>](#Ship) \| [<code>ModdingClient</code>](#ModdingClient)*
    * *[.all](#StructureManager+all) : [<code>ArrayMap</code>](#ArrayMap)*
    * *[.limit](#StructureManager+limit) ⇒ <code>boolean</code>*
    * *[.length](#ArrayMap+length) : <code>number</code>*
    * *[.set(data)](#UIComponentManager+set) ⇒ [<code>UIComponentManager</code>](#UIComponentManager)*
    * *[.add(data)](#UIComponentManager+add) ⇒ [<code>UIComponentManager</code>](#UIComponentManager)*
    * *[.create(data)](#UIComponentManager+create) ⇒ [<code>UIComponent</code>](#UIComponent)*
    * *[.hide(id)](#UIComponentManager+hide) ⇒ [<code>UIComponentManager</code>](#UIComponentManager)*
    * *[.show(id)](#UIComponentManager+show) ⇒ [<code>UIComponentManager</code>](#UIComponentManager)*
    * *[.updateById(id)](#UIComponentManager+updateById)*
    * *[.array(includeInactive)](#StructureManager+array) ⇒ <code>Array</code>*
    * *[.isInstance(entity)](#StructureManager+isInstance) ⇒ <code>boolean</code>*
    * *[.findById(id, includeInactive)](#StructureManager+findById) ⇒ [<code>Structure</code>](#Structure)*
    * *[.get(uuid, [includeInactive])](#StructureManager+get) ⇒ [<code>Structure</code>](#Structure)*
    * *[.limitReached()](#StructureManager+limitReached) ⇒ <code>boolean</code>*
    * *[.at()](#ArrayMap+at) ⇒ <code>any</code> \| <code>undefined</code>*
    * *[.toArray()](#ArrayMap+toArray) ⇒ <code>array</code>*

<a name="UIComponentManager+parent"></a>

### *uiComponentManager.parent : [<code>Ship</code>](#Ship) \| [<code>ModdingClient</code>](#ModdingClient)*
Parent object (ship or modding client) of this manager

**Kind**: instance property of [<code>UIComponentManager</code>](#UIComponentManager)  
**Read only**: true  
**Since**: 1.4.30-alpha6  
<a name="StructureManager+all"></a>

### *uiComponentManager.all : [<code>ArrayMap</code>](#ArrayMap)*
A collection containing all structures in the manager

**Kind**: instance property of [<code>UIComponentManager</code>](#UIComponentManager)  
**Overrides**: [<code>all</code>](#StructureManager+all)  
**Read only**: true  
<a name="StructureManager+limit"></a>

### *uiComponentManager.limit ⇒ <code>boolean</code>*
The server limit (maximum number of structures) of this manager

**Kind**: instance property of [<code>UIComponentManager</code>](#UIComponentManager)  
**Overrides**: [<code>limit</code>](#StructureManager+limit)  
**Read only**: true  
<a name="ArrayMap+length"></a>

### *uiComponentManager.length : <code>number</code>*
Length of this object, same as `Map.prototype.size`

**Kind**: instance property of [<code>UIComponentManager</code>](#UIComponentManager)  
**Overrides**: [<code>length</code>](#ArrayMap+length)  
**Read only**: true  
<a name="UIComponentManager+set"></a>

### *uiComponentManager.set(data) ⇒ [<code>UIComponentManager</code>](#UIComponentManager)*
Set/add an UI Component

**Kind**: instance method of [<code>UIComponentManager</code>](#UIComponentManager)  
**Returns**: [<code>UIComponentManager</code>](#UIComponentManager) - This manager  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Raw (or resolved) UI Component data |

<a name="UIComponentManager+add"></a>

### *uiComponentManager.add(data) ⇒ [<code>UIComponentManager</code>](#UIComponentManager)*
Set/add an UI Component

**Kind**: instance method of [<code>UIComponentManager</code>](#UIComponentManager)  
**Returns**: [<code>UIComponentManager</code>](#UIComponentManager) - This manager  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Raw (or resolved) UI Component data |

<a name="UIComponentManager+create"></a>

### *uiComponentManager.create(data) ⇒ [<code>UIComponent</code>](#UIComponent)*
Create/Clone an UI Component with data

**Kind**: instance method of [<code>UIComponentManager</code>](#UIComponentManager)  
**Returns**: [<code>UIComponent</code>](#UIComponent) - The resolved component  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Raw (or resolved) UI Component data |

<a name="UIComponentManager+hide"></a>

### *uiComponentManager.hide(id) ⇒ [<code>UIComponentManager</code>](#UIComponentManager)*
Hide the UI Component with given ID from this manager (and also from server)

**Kind**: instance method of [<code>UIComponentManager</code>](#UIComponentManager)  
**Returns**: [<code>UIComponentManager</code>](#UIComponentManager) - This manager  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>null</code> | UI Component ID, omit or set to nullish to hide all active components |

<a name="UIComponentManager+show"></a>

### *uiComponentManager.show(id) ⇒ [<code>UIComponentManager</code>](#UIComponentManager)*
Show the UI Component with given ID from this manager (and also from server)

**Kind**: instance method of [<code>UIComponentManager</code>](#UIComponentManager)  
**Returns**: [<code>UIComponentManager</code>](#UIComponentManager) - This manager  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | UI Component ID, omit or set to nullish to show all inactive components |

<a name="UIComponentManager+updateById"></a>

### *uiComponentManager.updateById(id)*
Updates the UI Component with given ID (and also server-side)

**Kind**: instance method of [<code>UIComponentManager</code>](#UIComponentManager)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | UI Component ID to update |

<a name="StructureManager+array"></a>

### *uiComponentManager.array(includeInactive) ⇒ <code>Array</code>*
converts the list to array

**Kind**: instance method of [<code>UIComponentManager</code>](#UIComponentManager)  
**Overrides**: [<code>array</code>](#StructureManager+array)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| includeInactive | <code>boolean</code> | <code>false</code> | the converted array will contain inactive structures (destroyed, disconnected) or not |

<a name="StructureManager+isInstance"></a>

### *uiComponentManager.isInstance(entity) ⇒ <code>boolean</code>*
To check whether the given object has the same instance as the structure's constructor or not

**Kind**: instance method of [<code>UIComponentManager</code>](#UIComponentManager)  
**Overrides**: [<code>isInstance</code>](#StructureManager+isInstance)  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>object</code> | The object needs to be checked |

<a name="StructureManager+findById"></a>

### *uiComponentManager.findById(id, includeInactive) ⇒ [<code>Structure</code>](#Structure)*
Find a structure inside the manager with the given ID

**Kind**: instance method of [<code>UIComponentManager</code>](#UIComponentManager)  
**Overrides**: [<code>findById</code>](#StructureManager+findById)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, `null` if not found any  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | The Structure ID to be search for |
| includeInactive | <code>includeInactive</code> | <code>false</code> | To show whether it needs to search through inactive structures or not |

<a name="StructureManager+get"></a>

### *uiComponentManager.get(uuid, [includeInactive]) ⇒ [<code>Structure</code>](#Structure)*
Get a structure by its UUID

**Kind**: instance method of [<code>UIComponentManager</code>](#UIComponentManager)  
**Overrides**: [<code>get</code>](#StructureManager+get)  
**Returns**: [<code>Structure</code>](#Structure) - The structure, null if not found  
**Since**: 1.4.25  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| uuid | <code>string</code> |  | UUID of structure to lookup |
| [includeInactive] | <code>boolean</code> | <code>false</code> | Whether to also search for inactive structures |

<a name="StructureManager+limitReached"></a>

### *uiComponentManager.limitReached() ⇒ <code>boolean</code>*
Check whether the number of structures inside this manager exceeds the server limit or not

**Kind**: instance method of [<code>UIComponentManager</code>](#UIComponentManager)  
**Overrides**: [<code>limitReached</code>](#StructureManager+limitReached)  
<a name="ArrayMap+at"></a>

### *uiComponentManager.at() ⇒ <code>any</code> \| <code>undefined</code>*
Get element at index, Equivalent to `Array.prototype.at`

**Kind**: instance method of [<code>UIComponentManager</code>](#UIComponentManager)  
**Overrides**: [<code>at</code>](#ArrayMap+at)  
**Returns**: <code>any</code> \| <code>undefined</code> - The value at index  
<a name="ArrayMap+toArray"></a>

### *uiComponentManager.toArray() ⇒ <code>array</code>*
Get an array from this object

**Kind**: instance method of [<code>UIComponentManager</code>](#UIComponentManager)  
**Overrides**: [<code>toArray</code>](#ArrayMap+toArray)  
<a name="Alien"></a>

## *Alien ⇐ [<code>Entity</code>](#Entity)*
The Alien Instance

**Kind**: global abstract class  
**Extends**: [<code>Entity</code>](#Entity)  

* *[Alien](#Alien) ⇐ [<code>Entity</code>](#Entity)*
    * *[.weapon_drop](#Alien+weapon_drop) : <code>number</code>*
    * *[.crytal_drop](#Alien+crytal_drop) : <code>number</code>*
    * *[.code](#Alien+code) : <code>number</code>*
    * *[.level](#Alien+level) : <code>number</code>*
    * *[.points](#Alien+points) : <code>number</code>*
    * *[.setShield(shield)](#Alien+setShield) ⇒ [<code>Alien</code>](#Alien)*
    * *[.setRegen(regen)](#Alien+setRegen) ⇒ [<code>Alien</code>](#Alien)*
    * *[.setDamage(damage)](#Alien+setDamage) ⇒ [<code>Alien</code>](#Alien)*
    * *[.setLaserSpeed(x)](#Alien+setLaserSpeed) ⇒ [<code>Alien</code>](#Alien)*
    * *[.setRate(rate)](#Alien+setRate) ⇒ [<code>Alien</code>](#Alien)*
    * *[.setX(x)](#Entity+setX) ⇒ [<code>Entity</code>](#Entity)*
    * *[.setY(y)](#Entity+setY) ⇒ [<code>Entity</code>](#Entity)*
    * *[.setVx(vx)](#Entity+setVx) ⇒ [<code>Entity</code>](#Entity)*
    * *[.setVy(vy)](#Entity+setVy) ⇒ [<code>Entity</code>](#Entity)*
    * *[.set(data)](#Entity+set) ⇒ [<code>Entity</code>](#Entity)*
    * *[.kill()](#Entity+kill) ⇒ [<code>Entity</code>](#Entity)*

<a name="Alien+weapon_drop"></a>

### *alien.weapon\_drop : <code>number</code>*
The collectible drop code after the alien is killed

**Kind**: instance property of [<code>Alien</code>](#Alien)  
**Read only**: true  
<a name="Alien+crytal_drop"></a>

### *alien.crytal\_drop : <code>number</code>*
The amount of crystals dropped after the alien is killed

**Kind**: instance property of [<code>Alien</code>](#Alien)  
**Read only**: true  
<a name="Alien+code"></a>

### *alien.code : <code>number</code>*
Alien code

**Kind**: instance property of [<code>Alien</code>](#Alien)  
**Read only**: true  
<a name="Alien+level"></a>

### *alien.level : <code>number</code>*
Alien level

**Kind**: instance property of [<code>Alien</code>](#Alien)  
**Read only**: true  
<a name="Alien+points"></a>

### *alien.points : <code>number</code>*
Alien points

**Kind**: instance property of [<code>Alien</code>](#Alien)  
**Read only**: true  
<a name="Alien+setShield"></a>

### *alien.setShield(shield) ⇒ [<code>Alien</code>](#Alien)*
Set alien shield

**Kind**: instance method of [<code>Alien</code>](#Alien)  

| Param | Type | Description |
| --- | --- | --- |
| shield | <code>number</code> | The shield to set |

<a name="Alien+setRegen"></a>

### *alien.setRegen(regen) ⇒ [<code>Alien</code>](#Alien)*
Set alien's regeneration rate

**Kind**: instance method of [<code>Alien</code>](#Alien)  

| Param | Type | Description |
| --- | --- | --- |
| regen | <code>number</code> | The regeneration rate to set |

<a name="Alien+setDamage"></a>

### *alien.setDamage(damage) ⇒ [<code>Alien</code>](#Alien)*
Set alien's laser damage

**Kind**: instance method of [<code>Alien</code>](#Alien)  

| Param | Type | Description |
| --- | --- | --- |
| damage | <code>number</code> | The damage to set |

<a name="Alien+setLaserSpeed"></a>

### *alien.setLaserSpeed(x) ⇒ [<code>Alien</code>](#Alien)*
Set alien's laser speed

**Kind**: instance method of [<code>Alien</code>](#Alien)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The X position to set |

<a name="Alien+setRate"></a>

### *alien.setRate(rate) ⇒ [<code>Alien</code>](#Alien)*
Set alien's firing rate

**Kind**: instance method of [<code>Alien</code>](#Alien)  

| Param | Type | Description |
| --- | --- | --- |
| rate | <code>number</code> | The firing rate to set |

<a name="Entity+setX"></a>

### *alien.setX(x) ⇒ [<code>Entity</code>](#Entity)*
Set entity's X position

**Kind**: instance method of [<code>Alien</code>](#Alien)  
**Overrides**: [<code>setX</code>](#Entity+setX)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The X position to set |

<a name="Entity+setY"></a>

### *alien.setY(y) ⇒ [<code>Entity</code>](#Entity)*
Set entity's Y position

**Kind**: instance method of [<code>Alien</code>](#Alien)  
**Overrides**: [<code>setY</code>](#Entity+setY)  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>number</code> | The Y position to set |

<a name="Entity+setVx"></a>

### *alien.setVx(vx) ⇒ [<code>Entity</code>](#Entity)*
Set entity velocity along the x Axis

**Kind**: instance method of [<code>Alien</code>](#Alien)  
**Overrides**: [<code>setVx</code>](#Entity+setVx)  

| Param | Type | Description |
| --- | --- | --- |
| vx | <code>number</code> | The velocity scalar value to set along the x Axis, can be negative |

<a name="Entity+setVy"></a>

### *alien.setVy(vy) ⇒ [<code>Entity</code>](#Entity)*
Set entity velocity along the y Axis

**Kind**: instance method of [<code>Alien</code>](#Alien)  
**Overrides**: [<code>setVy</code>](#Entity+setVy)  

| Param | Type | Description |
| --- | --- | --- |
| vy | <code>number</code> | The velovity scalar value to set along the y Axis, can be negative |

<a name="Entity+set"></a>

### *alien.set(data) ⇒ [<code>Entity</code>](#Entity)*
Set the entity with given data

**Kind**: instance method of [<code>Alien</code>](#Alien)  
**Overrides**: [<code>set</code>](#Entity+set)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | options to set to the entity |

<a name="Entity+kill"></a>

### *alien.kill() ⇒ [<code>Entity</code>](#Entity)*
Kill the entity

**Kind**: instance method of [<code>Alien</code>](#Alien)  
**Overrides**: [<code>kill</code>](#Entity+kill)  
<a name="Asteroid"></a>

## *Asteroid ⇐ [<code>Entity</code>](#Entity)*
The Asteroid Instance

**Kind**: global abstract class  
**Extends**: [<code>Entity</code>](#Entity)  

* *[Asteroid](#Asteroid) ⇐ [<code>Entity</code>](#Entity)*
    * *[.size](#Asteroid+size) : <code>number</code>*
    * *[.setSize(size)](#Asteroid+setSize) ⇒ [<code>Asteroid</code>](#Asteroid)*
    * *[.setX(x)](#Entity+setX) ⇒ [<code>Entity</code>](#Entity)*
    * *[.setY(y)](#Entity+setY) ⇒ [<code>Entity</code>](#Entity)*
    * *[.setVx(vx)](#Entity+setVx) ⇒ [<code>Entity</code>](#Entity)*
    * *[.setVy(vy)](#Entity+setVy) ⇒ [<code>Entity</code>](#Entity)*
    * *[.set(data)](#Entity+set) ⇒ [<code>Entity</code>](#Entity)*
    * *[.kill()](#Entity+kill) ⇒ [<code>Entity</code>](#Entity)*

<a name="Asteroid+size"></a>

### *asteroid.size : <code>number</code>*
Asteroid size

**Kind**: instance property of [<code>Asteroid</code>](#Asteroid)  
**Read only**: true  
<a name="Asteroid+setSize"></a>

### *asteroid.setSize(size) ⇒ [<code>Asteroid</code>](#Asteroid)*
Set asteroid size

**Kind**: instance method of [<code>Asteroid</code>](#Asteroid)  

| Param | Type | Description |
| --- | --- | --- |
| size | <code>number</code> | The size to set |

<a name="Entity+setX"></a>

### *asteroid.setX(x) ⇒ [<code>Entity</code>](#Entity)*
Set entity's X position

**Kind**: instance method of [<code>Asteroid</code>](#Asteroid)  
**Overrides**: [<code>setX</code>](#Entity+setX)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The X position to set |

<a name="Entity+setY"></a>

### *asteroid.setY(y) ⇒ [<code>Entity</code>](#Entity)*
Set entity's Y position

**Kind**: instance method of [<code>Asteroid</code>](#Asteroid)  
**Overrides**: [<code>setY</code>](#Entity+setY)  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>number</code> | The Y position to set |

<a name="Entity+setVx"></a>

### *asteroid.setVx(vx) ⇒ [<code>Entity</code>](#Entity)*
Set entity velocity along the x Axis

**Kind**: instance method of [<code>Asteroid</code>](#Asteroid)  
**Overrides**: [<code>setVx</code>](#Entity+setVx)  

| Param | Type | Description |
| --- | --- | --- |
| vx | <code>number</code> | The velocity scalar value to set along the x Axis, can be negative |

<a name="Entity+setVy"></a>

### *asteroid.setVy(vy) ⇒ [<code>Entity</code>](#Entity)*
Set entity velocity along the y Axis

**Kind**: instance method of [<code>Asteroid</code>](#Asteroid)  
**Overrides**: [<code>setVy</code>](#Entity+setVy)  

| Param | Type | Description |
| --- | --- | --- |
| vy | <code>number</code> | The velovity scalar value to set along the y Axis, can be negative |

<a name="Entity+set"></a>

### *asteroid.set(data) ⇒ [<code>Entity</code>](#Entity)*
Set the entity with given data

**Kind**: instance method of [<code>Asteroid</code>](#Asteroid)  
**Overrides**: [<code>set</code>](#Entity+set)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | options to set to the entity |

<a name="Entity+kill"></a>

### *asteroid.kill() ⇒ [<code>Entity</code>](#Entity)*
Kill the entity

**Kind**: instance method of [<code>Asteroid</code>](#Asteroid)  
**Overrides**: [<code>kill</code>](#Entity+kill)  
<a name="BaseEntity"></a>

## *BaseEntity ⇐ [<code>Structure</code>](#Structure)*
Most basic class of entity without stats modification ability

**Kind**: global abstract class  
**Extends**: [<code>Structure</code>](#Structure)  

* *[BaseEntity](#BaseEntity) ⇐ [<code>Structure</code>](#Structure)*
    * *[.x](#BaseEntity+x) : <code>number</code>*
    * *[.y](#BaseEntity+y) : <code>number</code>*
    * *[.vx](#BaseEntity+vx) : <code>number</code>*
    * *[.vy](#BaseEntity+vy) : <code>number</code>*
    * *[.lastUpdatedStep](#BaseEntity+lastUpdatedStep) : <code>number</code>*
    * *[.custom](#Structure+custom) : <code>object</code>*
    * *[.uuid](#Structure+uuid) : <code>number</code>*
    * *[.id](#Structure+id) : <code>number</code>*
    * *[.createdStep](#Structure+createdStep) : <code>number</code>*
    * *[.alive](#Structure+alive) : <code>boolean</code>*
    * *[.lastAliveStep](#Structure+lastAliveStep) : <code>number</code> \| <code>null</code>*
    * *[.isActive()](#Structure+isActive) ⇒ <code>boolean</code>*
    * *[.isSpawned()](#Structure+isSpawned) ⇒ <code>boolean</code>*

<a name="BaseEntity+x"></a>

### *baseEntity.x : <code>number</code>*
Entity X Position

**Kind**: instance property of [<code>BaseEntity</code>](#BaseEntity)  
**Read only**: true  
<a name="BaseEntity+y"></a>

### *baseEntity.y : <code>number</code>*
Entity Y Position

**Kind**: instance property of [<code>BaseEntity</code>](#BaseEntity)  
**Read only**: true  
<a name="BaseEntity+vx"></a>

### *baseEntity.vx : <code>number</code>*
Entity X Velocity

**Kind**: instance property of [<code>BaseEntity</code>](#BaseEntity)  
**Read only**: true  
<a name="BaseEntity+vy"></a>

### *baseEntity.vy : <code>number</code>*
Entity Y Velocity

**Kind**: instance property of [<code>BaseEntity</code>](#BaseEntity)  
**Read only**: true  
<a name="BaseEntity+lastUpdatedStep"></a>

### *baseEntity.lastUpdatedStep : <code>number</code>*
Entity last updated step

**Kind**: instance property of [<code>BaseEntity</code>](#BaseEntity)  
**Read only**: true  
<a name="Structure+custom"></a>

### *baseEntity.custom : <code>object</code>*
Custom object served for assigning data by the user

**Kind**: instance property of [<code>BaseEntity</code>](#BaseEntity)  
**Overrides**: [<code>custom</code>](#Structure+custom)  
<a name="Structure+uuid"></a>

### *baseEntity.uuid : <code>number</code>*
Structure's UUID

**Kind**: instance property of [<code>BaseEntity</code>](#BaseEntity)  
**Overrides**: [<code>uuid</code>](#Structure+uuid)  
**Read only**: true  
<a name="Structure+id"></a>

### *baseEntity.id : <code>number</code>*
Structure's ID

**Kind**: instance property of [<code>BaseEntity</code>](#BaseEntity)  
**Overrides**: [<code>id</code>](#Structure+id)  
**Read only**: true  
<a name="Structure+createdStep"></a>

### *baseEntity.createdStep : <code>number</code>*
Structure's creation step

**Kind**: instance property of [<code>BaseEntity</code>](#BaseEntity)  
**Overrides**: [<code>createdStep</code>](#Structure+createdStep)  
**Read only**: true  
<a name="Structure+alive"></a>

### *baseEntity.alive : <code>boolean</code>*
Indicates whether the structure is alive or not

**Kind**: instance property of [<code>BaseEntity</code>](#BaseEntity)  
**Overrides**: [<code>alive</code>](#Structure+alive)  
**Read only**: true  
<a name="Structure+lastAliveStep"></a>

### *baseEntity.lastAliveStep : <code>number</code> \| <code>null</code>*
The latest alive step of the structure (or null if the structure is never alive)

**Kind**: instance property of [<code>BaseEntity</code>](#BaseEntity)  
**Overrides**: [<code>lastAliveStep</code>](#Structure+lastAliveStep)  
**Read only**: true  
<a name="Structure+isActive"></a>

### *baseEntity.isActive() ⇒ <code>boolean</code>*
Check whether if the structure is still active or not

**Kind**: instance method of [<code>BaseEntity</code>](#BaseEntity)  
**Overrides**: [<code>isActive</code>](#Structure+isActive)  
<a name="Structure+isSpawned"></a>

### *baseEntity.isSpawned() ⇒ <code>boolean</code>*
Check whether if the structure is spawned or not

**Kind**: instance method of [<code>BaseEntity</code>](#BaseEntity)  
**Overrides**: [<code>isSpawned</code>](#Structure+isSpawned)  
<a name="Collectible"></a>

## *Collectible ⇐ [<code>BaseEntity</code>](#BaseEntity)*
The Collectible Instance

**Kind**: global abstract class  
**Extends**: [<code>BaseEntity</code>](#BaseEntity)  

* *[Collectible](#Collectible) ⇐ [<code>BaseEntity</code>](#BaseEntity)*
    * *[.code](#Collectible+code) : <code>number</code>*
    * *[.x](#BaseEntity+x) : <code>number</code>*
    * *[.y](#BaseEntity+y) : <code>number</code>*
    * *[.vx](#BaseEntity+vx) : <code>number</code>*
    * *[.vy](#BaseEntity+vy) : <code>number</code>*
    * *[.lastUpdatedStep](#BaseEntity+lastUpdatedStep) : <code>number</code>*

<a name="Collectible+code"></a>

### *collectible.code : <code>number</code>*
Collectible code

**Kind**: instance property of [<code>Collectible</code>](#Collectible)  
**Read only**: true  
<a name="BaseEntity+x"></a>

### *collectible.x : <code>number</code>*
Entity X Position

**Kind**: instance property of [<code>Collectible</code>](#Collectible)  
**Overrides**: [<code>x</code>](#BaseEntity+x)  
**Read only**: true  
<a name="BaseEntity+y"></a>

### *collectible.y : <code>number</code>*
Entity Y Position

**Kind**: instance property of [<code>Collectible</code>](#Collectible)  
**Overrides**: [<code>y</code>](#BaseEntity+y)  
**Read only**: true  
<a name="BaseEntity+vx"></a>

### *collectible.vx : <code>number</code>*
Entity X Velocity

**Kind**: instance property of [<code>Collectible</code>](#Collectible)  
**Overrides**: [<code>vx</code>](#BaseEntity+vx)  
**Read only**: true  
<a name="BaseEntity+vy"></a>

### *collectible.vy : <code>number</code>*
Entity Y Velocity

**Kind**: instance property of [<code>Collectible</code>](#Collectible)  
**Overrides**: [<code>vy</code>](#BaseEntity+vy)  
**Read only**: true  
<a name="BaseEntity+lastUpdatedStep"></a>

### *collectible.lastUpdatedStep : <code>number</code>*
Entity last updated step

**Kind**: instance property of [<code>Collectible</code>](#Collectible)  
**Overrides**: [<code>lastUpdatedStep</code>](#BaseEntity+lastUpdatedStep)  
**Read only**: true  
<a name="Coordinate"></a>

## *Coordinate*
The Coordinate Instance

**Kind**: global abstract class  

* *[Coordinate](#Coordinate)*
    * *[new Coordinate(position)](#new_Coordinate_new)*
    * *[.x](#Coordinate+x) : <code>number</code>*
    * *[.y](#Coordinate+y) : <code>number</code>*
    * *[.z](#Coordinate+z) : <code>number</code>*

<a name="new_Coordinate_new"></a>

### *new Coordinate(position)*

| Param | Type | Description |
| --- | --- | --- |
| position | <code>object</code> | The position object |

<a name="Coordinate+x"></a>

### *coordinate.x : <code>number</code>*
X Coordinate

**Kind**: instance property of [<code>Coordinate</code>](#Coordinate)  
**Read only**: true  
<a name="Coordinate+y"></a>

### *coordinate.y : <code>number</code>*
Y Coordinate

**Kind**: instance property of [<code>Coordinate</code>](#Coordinate)  
**Read only**: true  
<a name="Coordinate+z"></a>

### *coordinate.z : <code>number</code>*
Z Coordinate

**Kind**: instance property of [<code>Coordinate</code>](#Coordinate)  
**Read only**: true  
<a name="Entity"></a>

## *Entity ⇐ [<code>BaseEntity</code>](#BaseEntity)*
Represents any entity in the game, with ability to modify stats

**Kind**: global abstract class  
**Extends**: [<code>BaseEntity</code>](#BaseEntity)  

* *[Entity](#Entity) ⇐ [<code>BaseEntity</code>](#BaseEntity)*
    * *[.x](#BaseEntity+x) : <code>number</code>*
    * *[.y](#BaseEntity+y) : <code>number</code>*
    * *[.vx](#BaseEntity+vx) : <code>number</code>*
    * *[.vy](#BaseEntity+vy) : <code>number</code>*
    * *[.lastUpdatedStep](#BaseEntity+lastUpdatedStep) : <code>number</code>*
    * *[.custom](#Structure+custom) : <code>object</code>*
    * *[.uuid](#Structure+uuid) : <code>number</code>*
    * *[.id](#Structure+id) : <code>number</code>*
    * *[.createdStep](#Structure+createdStep) : <code>number</code>*
    * *[.alive](#Structure+alive) : <code>boolean</code>*
    * *[.lastAliveStep](#Structure+lastAliveStep) : <code>number</code> \| <code>null</code>*
    * *[.setX(x)](#Entity+setX) ⇒ [<code>Entity</code>](#Entity)*
    * *[.setY(y)](#Entity+setY) ⇒ [<code>Entity</code>](#Entity)*
    * *[.setVx(vx)](#Entity+setVx) ⇒ [<code>Entity</code>](#Entity)*
    * *[.setVy(vy)](#Entity+setVy) ⇒ [<code>Entity</code>](#Entity)*
    * *[.set(data)](#Entity+set) ⇒ [<code>Entity</code>](#Entity)*
    * *[.kill()](#Entity+kill) ⇒ [<code>Entity</code>](#Entity)*
    * *[.isActive()](#Structure+isActive) ⇒ <code>boolean</code>*
    * *[.isSpawned()](#Structure+isSpawned) ⇒ <code>boolean</code>*

<a name="BaseEntity+x"></a>

### *entity.x : <code>number</code>*
Entity X Position

**Kind**: instance property of [<code>Entity</code>](#Entity)  
**Overrides**: [<code>x</code>](#BaseEntity+x)  
**Read only**: true  
<a name="BaseEntity+y"></a>

### *entity.y : <code>number</code>*
Entity Y Position

**Kind**: instance property of [<code>Entity</code>](#Entity)  
**Overrides**: [<code>y</code>](#BaseEntity+y)  
**Read only**: true  
<a name="BaseEntity+vx"></a>

### *entity.vx : <code>number</code>*
Entity X Velocity

**Kind**: instance property of [<code>Entity</code>](#Entity)  
**Overrides**: [<code>vx</code>](#BaseEntity+vx)  
**Read only**: true  
<a name="BaseEntity+vy"></a>

### *entity.vy : <code>number</code>*
Entity Y Velocity

**Kind**: instance property of [<code>Entity</code>](#Entity)  
**Overrides**: [<code>vy</code>](#BaseEntity+vy)  
**Read only**: true  
<a name="BaseEntity+lastUpdatedStep"></a>

### *entity.lastUpdatedStep : <code>number</code>*
Entity last updated step

**Kind**: instance property of [<code>Entity</code>](#Entity)  
**Overrides**: [<code>lastUpdatedStep</code>](#BaseEntity+lastUpdatedStep)  
**Read only**: true  
<a name="Structure+custom"></a>

### *entity.custom : <code>object</code>*
Custom object served for assigning data by the user

**Kind**: instance property of [<code>Entity</code>](#Entity)  
**Overrides**: [<code>custom</code>](#Structure+custom)  
<a name="Structure+uuid"></a>

### *entity.uuid : <code>number</code>*
Structure's UUID

**Kind**: instance property of [<code>Entity</code>](#Entity)  
**Overrides**: [<code>uuid</code>](#Structure+uuid)  
**Read only**: true  
<a name="Structure+id"></a>

### *entity.id : <code>number</code>*
Structure's ID

**Kind**: instance property of [<code>Entity</code>](#Entity)  
**Overrides**: [<code>id</code>](#Structure+id)  
**Read only**: true  
<a name="Structure+createdStep"></a>

### *entity.createdStep : <code>number</code>*
Structure's creation step

**Kind**: instance property of [<code>Entity</code>](#Entity)  
**Overrides**: [<code>createdStep</code>](#Structure+createdStep)  
**Read only**: true  
<a name="Structure+alive"></a>

### *entity.alive : <code>boolean</code>*
Indicates whether the structure is alive or not

**Kind**: instance property of [<code>Entity</code>](#Entity)  
**Overrides**: [<code>alive</code>](#Structure+alive)  
**Read only**: true  
<a name="Structure+lastAliveStep"></a>

### *entity.lastAliveStep : <code>number</code> \| <code>null</code>*
The latest alive step of the structure (or null if the structure is never alive)

**Kind**: instance property of [<code>Entity</code>](#Entity)  
**Overrides**: [<code>lastAliveStep</code>](#Structure+lastAliveStep)  
**Read only**: true  
<a name="Entity+setX"></a>

### *entity.setX(x) ⇒ [<code>Entity</code>](#Entity)*
Set entity's X position

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The X position to set |

<a name="Entity+setY"></a>

### *entity.setY(y) ⇒ [<code>Entity</code>](#Entity)*
Set entity's Y position

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>number</code> | The Y position to set |

<a name="Entity+setVx"></a>

### *entity.setVx(vx) ⇒ [<code>Entity</code>](#Entity)*
Set entity velocity along the x Axis

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type | Description |
| --- | --- | --- |
| vx | <code>number</code> | The velocity scalar value to set along the x Axis, can be negative |

<a name="Entity+setVy"></a>

### *entity.setVy(vy) ⇒ [<code>Entity</code>](#Entity)*
Set entity velocity along the y Axis

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type | Description |
| --- | --- | --- |
| vy | <code>number</code> | The velovity scalar value to set along the y Axis, can be negative |

<a name="Entity+set"></a>

### *entity.set(data) ⇒ [<code>Entity</code>](#Entity)*
Set the entity with given data

**Kind**: instance method of [<code>Entity</code>](#Entity)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | options to set to the entity |

<a name="Entity+kill"></a>

### *entity.kill() ⇒ [<code>Entity</code>](#Entity)*
Kill the entity

**Kind**: instance method of [<code>Entity</code>](#Entity)  
<a name="Structure+isActive"></a>

### *entity.isActive() ⇒ <code>boolean</code>*
Check whether if the structure is still active or not

**Kind**: instance method of [<code>Entity</code>](#Entity)  
**Overrides**: [<code>isActive</code>](#Structure+isActive)  
<a name="Structure+isSpawned"></a>

### *entity.isSpawned() ⇒ <code>boolean</code>*
Check whether if the structure is spawned or not

**Kind**: instance method of [<code>Entity</code>](#Entity)  
**Overrides**: [<code>isSpawned</code>](#Structure+isSpawned)  
<a name="Object3D"></a>

## *Object3D ⇐ [<code>Structure</code>](#Structure)*
The Object3D Instance

**Kind**: global abstract class  
**Extends**: [<code>Structure</code>](#Structure)  

* *[Object3D](#Object3D) ⇐ [<code>Structure</code>](#Structure)*
    * *[.id](#Object3D+id) : <code>string</code>*
    * *[.type](#Object3D+type) : [<code>ObjectType</code>](#ObjectType)*
    * *[.position](#Object3D+position) : [<code>Coordinate</code>](#Coordinate)*
    * *[.rotation](#Object3D+rotation) : [<code>Coordinate</code>](#Coordinate)*
    * *[.scale](#Object3D+scale) : [<code>Coordinate</code>](#Coordinate)*
    * *[.parent](#Object3D+parent) : [<code>ObjectManager</code>](#ObjectManager)*
    * *[.custom](#Structure+custom) : <code>object</code>*
    * *[.uuid](#Structure+uuid) : <code>number</code>*
    * *[.createdStep](#Structure+createdStep) : <code>number</code>*
    * *[.alive](#Structure+alive) : <code>boolean</code>*
    * *[.lastAliveStep](#Structure+lastAliveStep) : <code>number</code> \| <code>null</code>*
    * *[.set(data)](#Object3D+set) ⇒ [<code>Object3D</code>](#Object3D)*
    * *[.remove()](#Object3D+remove) ⇒ [<code>Object3D</code>](#Object3D)*
    * *[.setType(type)](#Object3D+setType) ⇒ [<code>Object3D</code>](#Object3D)*
    * *[.setPosition(position)](#Object3D+setPosition) ⇒ [<code>Object3D</code>](#Object3D)*
    * *[.setRotation(rotation)](#Object3D+setRotation) ⇒ [<code>Object3D</code>](#Object3D)*
    * *[.setScale(type)](#Object3D+setScale) ⇒ [<code>Object3D</code>](#Object3D)*
    * *[.isActive()](#Structure+isActive) ⇒ <code>boolean</code>*
    * *[.isSpawned()](#Structure+isSpawned) ⇒ <code>boolean</code>*

<a name="Object3D+id"></a>

### *object3D.id : <code>string</code>*
Object ID

**Kind**: instance property of [<code>Object3D</code>](#Object3D)  
**Overrides**: [<code>id</code>](#Structure+id)  
**Read only**: true  
<a name="Object3D+type"></a>

### *object3D.type : [<code>ObjectType</code>](#ObjectType)*
Object type

**Kind**: instance property of [<code>Object3D</code>](#Object3D)  
**Read only**: true  
<a name="Object3D+position"></a>

### *object3D.position : [<code>Coordinate</code>](#Coordinate)*
Object position

**Kind**: instance property of [<code>Object3D</code>](#Object3D)  
**Read only**: true  
<a name="Object3D+rotation"></a>

### *object3D.rotation : [<code>Coordinate</code>](#Coordinate)*
Object rotation

**Kind**: instance property of [<code>Object3D</code>](#Object3D)  
**Read only**: true  
<a name="Object3D+scale"></a>

### *object3D.scale : [<code>Coordinate</code>](#Coordinate)*
Object scale

**Kind**: instance property of [<code>Object3D</code>](#Object3D)  
**Read only**: true  
<a name="Object3D+parent"></a>

### *object3D.parent : [<code>ObjectManager</code>](#ObjectManager)*
Parent manager of this object

**Kind**: instance property of [<code>Object3D</code>](#Object3D)  
**Read only**: true  
**Since**: 1.4.30-alpha6  
<a name="Structure+custom"></a>

### *object3D.custom : <code>object</code>*
Custom object served for assigning data by the user

**Kind**: instance property of [<code>Object3D</code>](#Object3D)  
**Overrides**: [<code>custom</code>](#Structure+custom)  
<a name="Structure+uuid"></a>

### *object3D.uuid : <code>number</code>*
Structure's UUID

**Kind**: instance property of [<code>Object3D</code>](#Object3D)  
**Overrides**: [<code>uuid</code>](#Structure+uuid)  
**Read only**: true  
<a name="Structure+createdStep"></a>

### *object3D.createdStep : <code>number</code>*
Structure's creation step

**Kind**: instance property of [<code>Object3D</code>](#Object3D)  
**Overrides**: [<code>createdStep</code>](#Structure+createdStep)  
**Read only**: true  
<a name="Structure+alive"></a>

### *object3D.alive : <code>boolean</code>*
Indicates whether the structure is alive or not

**Kind**: instance property of [<code>Object3D</code>](#Object3D)  
**Overrides**: [<code>alive</code>](#Structure+alive)  
**Read only**: true  
<a name="Structure+lastAliveStep"></a>

### *object3D.lastAliveStep : <code>number</code> \| <code>null</code>*
The latest alive step of the structure (or null if the structure is never alive)

**Kind**: instance property of [<code>Object3D</code>](#Object3D)  
**Overrides**: [<code>lastAliveStep</code>](#Structure+lastAliveStep)  
**Read only**: true  
<a name="Object3D+set"></a>

### *object3D.set(data) ⇒ [<code>Object3D</code>](#Object3D)*
Set the object with given data. Note that physics is only available on global object.

**Kind**: instance method of [<code>Object3D</code>](#Object3D)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | options to set to the object |

<a name="Object3D+remove"></a>

### *object3D.remove() ⇒ [<code>Object3D</code>](#Object3D)*
Remove the object from the game

**Kind**: instance method of [<code>Object3D</code>](#Object3D)  
<a name="Object3D+setType"></a>

### *object3D.setType(type) ⇒ [<code>Object3D</code>](#Object3D)*
Set object type

**Kind**: instance method of [<code>Object3D</code>](#Object3D)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>object</code> | The type object to set |

<a name="Object3D+setPosition"></a>

### *object3D.setPosition(position) ⇒ [<code>Object3D</code>](#Object3D)*
Set object position

**Kind**: instance method of [<code>Object3D</code>](#Object3D)  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>object</code> | The position object to set |

<a name="Object3D+setRotation"></a>

### *object3D.setRotation(rotation) ⇒ [<code>Object3D</code>](#Object3D)*
Set object rotation

**Kind**: instance method of [<code>Object3D</code>](#Object3D)  

| Param | Type | Description |
| --- | --- | --- |
| rotation | <code>object</code> | The rotation object to set |

<a name="Object3D+setScale"></a>

### *object3D.setScale(type) ⇒ [<code>Object3D</code>](#Object3D)*
Set object scale

**Kind**: instance method of [<code>Object3D</code>](#Object3D)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>object</code> | The scale object to set |

<a name="Structure+isActive"></a>

### *object3D.isActive() ⇒ <code>boolean</code>*
Check whether if the structure is still active or not

**Kind**: instance method of [<code>Object3D</code>](#Object3D)  
**Overrides**: [<code>isActive</code>](#Structure+isActive)  
<a name="Structure+isSpawned"></a>

### *object3D.isSpawned() ⇒ <code>boolean</code>*
Check whether if the structure is spawned or not

**Kind**: instance method of [<code>Object3D</code>](#Object3D)  
**Overrides**: [<code>isSpawned</code>](#Structure+isSpawned)  
<a name="ObjectType"></a>

## *ObjectType ⇐ [<code>Structure</code>](#Structure)*
The ObjectType Instance

**Kind**: global abstract class  
**Extends**: [<code>Structure</code>](#Structure)  

* *[ObjectType](#ObjectType) ⇐ [<code>Structure</code>](#Structure)*
    * *[.id](#ObjectType+id) : <code>string</code>*
    * *[.obj](#ObjectType+obj) : <code>string</code>*
    * *[.diffuse](#ObjectType+diffuse) : <code>string</code>*
    * *[.emissive](#ObjectType+emissive) : <code>string</code>*
    * *[.specular](#ObjectType+specular) : <code>string</code>*
    * *[.bump](#ObjectType+bump) : <code>string</code>*
    * *[.diffuseColor](#ObjectType+diffuseColor) : <code>string</code> \| <code>number</code>*
    * *[.emissiveColor](#ObjectType+emissiveColor) : <code>string</code> \| <code>number</code>*
    * *[.specularColor](#ObjectType+specularColor) : <code>string</code> \| <code>number</code>*
    * *[.bumpScale](#ObjectType+bumpScale) : <code>string</code> \| <code>number</code>*
    * *[.transparent](#ObjectType+transparent) : <code>boolean</code>*
    * *[.shininess](#ObjectType+shininess) : <code>boolean</code>*
    * *[.physics](#ObjectType+physics) : <code>object</code>*
    * *[.custom](#Structure+custom) : <code>object</code>*
    * *[.uuid](#Structure+uuid) : <code>number</code>*
    * *[.createdStep](#Structure+createdStep) : <code>number</code>*
    * *[.alive](#Structure+alive) : <code>boolean</code>*
    * *[.lastAliveStep](#Structure+lastAliveStep) : <code>number</code> \| <code>null</code>*
    * *[.isActive()](#Structure+isActive) ⇒ <code>boolean</code>*
    * *[.isSpawned()](#Structure+isSpawned) ⇒ <code>boolean</code>*

<a name="ObjectType+id"></a>

### *objectType.id : <code>string</code>*
ObjectType ID

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Overrides**: [<code>id</code>](#Structure+id)  
**Read only**: true  
<a name="ObjectType+obj"></a>

### *objectType.obj : <code>string</code>*
ObjectType model link (.obj file)

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Read only**: true  
<a name="ObjectType+diffuse"></a>

### *objectType.diffuse : <code>string</code>*
ObjectType diffuse texture link

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Read only**: true  
<a name="ObjectType+emissive"></a>

### *objectType.emissive : <code>string</code>*
ObjectType emissive texture link

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Read only**: true  
<a name="ObjectType+specular"></a>

### *objectType.specular : <code>string</code>*
ObjectType specular texture link

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Read only**: true  
<a name="ObjectType+bump"></a>

### *objectType.bump : <code>string</code>*
ObjectType bump texture link

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Read only**: true  
<a name="ObjectType+diffuseColor"></a>

### *objectType.diffuseColor : <code>string</code> \| <code>number</code>*
ObjectType diffuse color

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Read only**: true  
<a name="ObjectType+emissiveColor"></a>

### *objectType.emissiveColor : <code>string</code> \| <code>number</code>*
ObjectType emissive color

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Read only**: true  
<a name="ObjectType+specularColor"></a>

### *objectType.specularColor : <code>string</code> \| <code>number</code>*
ObjectType specular color

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Read only**: true  
<a name="ObjectType+bumpScale"></a>

### *objectType.bumpScale : <code>string</code> \| <code>number</code>*
ObjectType bump scale

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Read only**: true  
<a name="ObjectType+transparent"></a>

### *objectType.transparent : <code>boolean</code>*
ObjectType transparency

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Read only**: true  
<a name="ObjectType+shininess"></a>

### *objectType.shininess : <code>boolean</code>*
ObjectType shininess

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Read only**: true  
<a name="ObjectType+physics"></a>

### *objectType.physics : <code>object</code>*
ObjectType physics

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| shape | <code>array</code> | Object type's hitbox shape |
| mass | <code>number</code> | The mass of the object type |
| fixed | <code>boolean</code> | Indicates if the object type is movable or not (honestly this doesn't do anything much) |
| autoShape | <code>boolean</code> | Indicates if the object type's hitbox shape will be/was rendered automatically |

<a name="Structure+custom"></a>

### *objectType.custom : <code>object</code>*
Custom object served for assigning data by the user

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Overrides**: [<code>custom</code>](#Structure+custom)  
<a name="Structure+uuid"></a>

### *objectType.uuid : <code>number</code>*
Structure's UUID

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Overrides**: [<code>uuid</code>](#Structure+uuid)  
**Read only**: true  
<a name="Structure+createdStep"></a>

### *objectType.createdStep : <code>number</code>*
Structure's creation step

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Overrides**: [<code>createdStep</code>](#Structure+createdStep)  
**Read only**: true  
<a name="Structure+alive"></a>

### *objectType.alive : <code>boolean</code>*
Indicates whether the structure is alive or not

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Overrides**: [<code>alive</code>](#Structure+alive)  
**Read only**: true  
<a name="Structure+lastAliveStep"></a>

### *objectType.lastAliveStep : <code>number</code> \| <code>null</code>*
The latest alive step of the structure (or null if the structure is never alive)

**Kind**: instance property of [<code>ObjectType</code>](#ObjectType)  
**Overrides**: [<code>lastAliveStep</code>](#Structure+lastAliveStep)  
**Read only**: true  
<a name="Structure+isActive"></a>

### *objectType.isActive() ⇒ <code>boolean</code>*
Check whether if the structure is still active or not

**Kind**: instance method of [<code>ObjectType</code>](#ObjectType)  
**Overrides**: [<code>isActive</code>](#Structure+isActive)  
<a name="Structure+isSpawned"></a>

### *objectType.isSpawned() ⇒ <code>boolean</code>*
Check whether if the structure is spawned or not

**Kind**: instance method of [<code>ObjectType</code>](#ObjectType)  
**Overrides**: [<code>isSpawned</code>](#Structure+isSpawned)  
<a name="Ship"></a>

## *Ship ⇐ [<code>Entity</code>](#Entity)*
The Ship Instance

**Kind**: global abstract class  
**Extends**: [<code>Entity</code>](#Entity)  

* *[Ship](#Ship) ⇐ [<code>Entity</code>](#Entity)*
    * *[.ui_components](#Ship+ui_components) : [<code>UIComponentManager</code>](#UIComponentManager)*
    * *[.objects](#Ship+objects) : [<code>ObjectManager</code>](#ObjectManager)*
    * *[.name](#Ship+name) : <code>string</code>*
    * *[.type](#Ship+type) : <code>number</code>*
    * *[.angle](#Ship+angle) : <code>number</code>*
    * *[.score](#Ship+score) : <code>number</code>*
    * *[.idle](#Ship+idle) : <code>boolean</code>*
    * *[.shield](#Ship+shield) : <code>number</code>*
    * *[.generator](#Ship+generator) : <code>number</code>*
    * *[.healing](#Ship+healing) : <code>number</code>*
    * *[.crystals](#Ship+crystals) : <code>number</code>*
    * *[.stats](#Ship+stats) : <code>array.&lt;number&gt;</code>*
    * *[.team](#Ship+team) : <code>number</code>*
    * *[.hue](#Ship+hue) : <code>number</code>*
    * *[.customization](#Ship+customization) : <code>object</code>*
    * *[.showInstructor()](#Ship+showInstructor) ⇒ [<code>Ship</code>](#Ship)*
    * *[.instructorSays(text, character)](#Ship+instructorSays) ⇒ [<code>Ship</code>](#Ship)*
    * *[.hideInstructor()](#Ship+hideInstructor) ⇒ [<code>Ship</code>](#Ship)*
    * *[.intermission(data, gameOver)](#Ship+intermission) ⇒ [<code>Ship</code>](#Ship)*
    * *[.gameover(data)](#Ship+gameover) ⇒ [<code>Ship</code>](#Ship)*
    * *[.gameOver(data)](#Ship+gameOver) ⇒ [<code>Ship</code>](#Ship)*
    * *[.emptyWeapons()](#Ship+emptyWeapons) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setX(x)](#Ship+setX) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setY(y)](#Ship+setY) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setVx(vx)](#Ship+setVx) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setVy(vy)](#Ship+setVy) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setType(type)](#Ship+setType) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setAngle(angle)](#Ship+setAngle) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setScore(score)](#Ship+setScore) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setIdle(idle)](#Ship+setIdle) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setShield(shield)](#Ship+setShield) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setGenerator(generator)](#Ship+setGenerator) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setHealing(healing)](#Ship+setHealing) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setCrystals(crystals)](#Ship+setCrystals) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setStats(stats)](#Ship+setStats) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setTeam(team)](#Ship+setTeam) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setCollider(collider)](#Ship+setCollider) ⇒ [<code>Ship</code>](#Ship)*
    * *[.setHue(hue)](#Ship+setHue) ⇒ [<code>Ship</code>](#Ship)*
    * *[.set(data)](#Entity+set) ⇒ [<code>Entity</code>](#Entity)*
    * *[.kill()](#Entity+kill) ⇒ [<code>Entity</code>](#Entity)*

<a name="Ship+ui_components"></a>

### *ship.ui\_components : [<code>UIComponentManager</code>](#UIComponentManager)*
The UI Component Manager for this ship

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
**Since**: 1.4.2-alpha6  
<a name="Ship+objects"></a>

### *ship.objects : [<code>ObjectManager</code>](#ObjectManager)*
The Object Manager for this ship

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
**Since**: 1.4.30-alpha6  
<a name="Ship+name"></a>

### *ship.name : <code>string</code>*
Ship name

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
<a name="Ship+type"></a>

### *ship.type : <code>number</code>*
The ship's code whose player are on

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
<a name="Ship+angle"></a>

### *ship.angle : <code>number</code>*
Ship angle (in degrees)

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
<a name="Ship+score"></a>

### *ship.score : <code>number</code>*
Ship score

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
<a name="Ship+idle"></a>

### *ship.idle : <code>boolean</code>*
Indicates whether the ship is in idle mode or not

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
<a name="Ship+shield"></a>

### *ship.shield : <code>number</code>*
Ship shield

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
<a name="Ship+generator"></a>

### *ship.generator : <code>number</code>*
Ship generator's value

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
<a name="Ship+healing"></a>

### *ship.healing : <code>number</code>*
Indicates whether the ship is in healing mode or not

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
<a name="Ship+crystals"></a>

### *ship.crystals : <code>number</code>*
Ship crystals amount

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
<a name="Ship+stats"></a>

### *ship.stats : <code>array.&lt;number&gt;</code>*
Ship stats (specs upgrades)

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
<a name="Ship+team"></a>

### *ship.team : <code>number</code>*
Ship team id

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
<a name="Ship+hue"></a>

### *ship.hue : <code>number</code>*
Ship hue. <br>Please note that is property is provided through an external loader, you should not read this on first-spawned event of ships.

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
**Since**: 1.0.3-alpha6  
<a name="Ship+customization"></a>

### *ship.customization : <code>object</code>*
Ship customization, could be `null`. <br>Please note that is property is provided through an external loader, you should not read this on first-spawned event of ships.

**Kind**: instance property of [<code>Ship</code>](#Ship)  
**Read only**: true  
**Since**: 1.0.3-alpha6  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| badge | <code>string</code> | Badge name of the ship, or `null` if the ship doesn't have any |
| finish | <code>string</code> | Finish name of the ship |
| hue | <code>number</code> | Initial hue when user joins the game |

<a name="Ship+showInstructor"></a>

### *ship.showInstructor() ⇒ [<code>Ship</code>](#Ship)*
Show instructor screen to the ship

**Kind**: instance method of [<code>Ship</code>](#Ship)  
<a name="Ship+instructorSays"></a>

### *ship.instructorSays(text, character) ⇒ [<code>Ship</code>](#Ship)*
Display message to the ship with instructor screen

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the message to be delivered |
| character | <code>string</code> | the instructor character name |

<a name="Ship+hideInstructor"></a>

### *ship.hideInstructor() ⇒ [<code>Ship</code>](#Ship)*
Hide the instructor screen from the ship

**Kind**: instance method of [<code>Ship</code>](#Ship)  
<a name="Ship+intermission"></a>

### *ship.intermission(data, gameOver) ⇒ [<code>Ship</code>](#Ship)*
Show intermission screen to the ship

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | Data to show on the screen |
| gameOver | <code>boolean</code> | To indicate whether it's a gameover screen or not |

<a name="Ship+gameover"></a>

### *ship.gameover(data) ⇒ [<code>Ship</code>](#Ship)*
Show the gameover screen to the ship

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | Data to show on the screen |

<a name="Ship+gameOver"></a>

### *ship.gameOver(data) ⇒ [<code>Ship</code>](#Ship)*
Show the gameover screen to the ship

**Kind**: instance method of [<code>Ship</code>](#Ship)  
**Since**: 1.0.4-alpha6  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | Data to show on the screen |

<a name="Ship+emptyWeapons"></a>

### *ship.emptyWeapons() ⇒ [<code>Ship</code>](#Ship)*
Empty the ship's weapons slot

**Kind**: instance method of [<code>Ship</code>](#Ship)  
<a name="Ship+setX"></a>

### *ship.setX(x) ⇒ [<code>Ship</code>](#Ship)*
Set ship's X position

**Kind**: instance method of [<code>Ship</code>](#Ship)  
**Overrides**: [<code>setX</code>](#Entity+setX)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The X position to set |

<a name="Ship+setY"></a>

### *ship.setY(y) ⇒ [<code>Ship</code>](#Ship)*
Set ship's Y position

**Kind**: instance method of [<code>Ship</code>](#Ship)  
**Overrides**: [<code>setY</code>](#Entity+setY)  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>number</code> | The Y position to set |

<a name="Ship+setVx"></a>

### *ship.setVx(vx) ⇒ [<code>Ship</code>](#Ship)*
Set ship speed along the x Axis

**Kind**: instance method of [<code>Ship</code>](#Ship)  
**Overrides**: [<code>setVx</code>](#Entity+setVx)  

| Param | Type | Description |
| --- | --- | --- |
| vx | <code>number</code> | The speed to set along the x Axis, can be negative |

<a name="Ship+setVy"></a>

### *ship.setVy(vy) ⇒ [<code>Ship</code>](#Ship)*
Set ship speed along the y Axis

**Kind**: instance method of [<code>Ship</code>](#Ship)  
**Overrides**: [<code>setVy</code>](#Entity+setVy)  

| Param | Type | Description |
| --- | --- | --- |
| vy | <code>number</code> | The speed to set along the y Axis, can be negative |

<a name="Ship+setType"></a>

### *ship.setType(type) ⇒ [<code>Ship</code>](#Ship)*
Set ship type

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>number</code> | The type code to set |

<a name="Ship+setAngle"></a>

### *ship.setAngle(angle) ⇒ [<code>Ship</code>](#Ship)*
Set ship angle

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | The angle to set (in degree) |

<a name="Ship+setScore"></a>

### *ship.setScore(score) ⇒ [<code>Ship</code>](#Ship)*
Set ship score

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| score | <code>number</code> | The score to set |

<a name="Ship+setIdle"></a>

### *ship.setIdle(idle) ⇒ [<code>Ship</code>](#Ship)*
Set ship's idle state

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| idle | <code>boolean</code> | The idle state to set (`true` for true and vice versa) |

<a name="Ship+setShield"></a>

### *ship.setShield(shield) ⇒ [<code>Ship</code>](#Ship)*
Set ship shield

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| shield | <code>number</code> | The shield to set |

<a name="Ship+setGenerator"></a>

### *ship.setGenerator(generator) ⇒ [<code>Ship</code>](#Ship)*
Set ship's generator capacity (the energy bar)

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| generator | <code>number</code> | The generator capacity value to set |

<a name="Ship+setHealing"></a>

### *ship.setHealing(healing) ⇒ [<code>Ship</code>](#Ship)*
Set ship's healing state

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| healing | <code>boolean</code> | The healing state to set (`true` for true and vice versa) |

<a name="Ship+setCrystals"></a>

### *ship.setCrystals(crystals) ⇒ [<code>Ship</code>](#Ship)*
Set ship's crystal amount

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| crystals | <code>number</code> | The crystals amount to set |

<a name="Ship+setStats"></a>

### *ship.setStats(stats) ⇒ [<code>Ship</code>](#Ship)*
Set ship stats

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| stats | <code>number</code> | The stats number to set (8-digit number for 8 specs) |

<a name="Ship+setTeam"></a>

### *ship.setTeam(team) ⇒ [<code>Ship</code>](#Ship)*
Set ship's team

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| team | <code>number</code> | The id of the team to set |

<a name="Ship+setCollider"></a>

### *ship.setCollider(collider) ⇒ [<code>Ship</code>](#Ship)*
Set ship's collider (ability to interact with game objects and ships)

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| collider | <code>boolean</code> | The collider state to set (`true` for true and vice versa) |

<a name="Ship+setHue"></a>

### *ship.setHue(hue) ⇒ [<code>Ship</code>](#Ship)*
Set ship hue

**Kind**: instance method of [<code>Ship</code>](#Ship)  

| Param | Type | Description |
| --- | --- | --- |
| hue | <code>number</code> | The hue value to set |

<a name="Entity+set"></a>

### *ship.set(data) ⇒ [<code>Entity</code>](#Entity)*
Set the entity with given data

**Kind**: instance method of [<code>Ship</code>](#Ship)  
**Overrides**: [<code>set</code>](#Entity+set)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | options to set to the entity |

<a name="Entity+kill"></a>

### *ship.kill() ⇒ [<code>Entity</code>](#Entity)*
Kill the entity

**Kind**: instance method of [<code>Ship</code>](#Ship)  
**Overrides**: [<code>kill</code>](#Entity+kill)  
<a name="Station"></a>

## *Station ⇐ [<code>BaseEntity</code>](#BaseEntity)*
The Station Instance

**Kind**: global abstract class  
**Extends**: [<code>BaseEntity</code>](#BaseEntity)  

* *[Station](#Station) ⇐ [<code>BaseEntity</code>](#BaseEntity)*
    * *[.name](#Station+name) : <code>string</code>*
    * *[.hue](#Station+hue) : <code>number</code>*
    * *[.team](#Station+team) : [<code>Team</code>](#Team)*
    * *[.modules](#Station+modules) : [<code>StationModuleManager</code>](#StationModuleManager)*
    * *[.phase](#Station+phase) : <code>string</code>*
    * *[.level](#Station+level) : <code>number</code>*
    * *[.crystals](#Station+crystals) : <code>number</code>*
    * *[.crystals_max](#Station+crystals_max) : <code>number</code>*
    * *[.x](#BaseEntity+x) : <code>number</code>*
    * *[.y](#BaseEntity+y) : <code>number</code>*
    * *[.vx](#BaseEntity+vx) : <code>number</code>*
    * *[.vy](#BaseEntity+vy) : <code>number</code>*
    * *[.lastUpdatedStep](#BaseEntity+lastUpdatedStep) : <code>number</code>*
    * *[.custom](#Structure+custom) : <code>object</code>*
    * *[.uuid](#Structure+uuid) : <code>number</code>*
    * *[.id](#Structure+id) : <code>number</code>*
    * *[.createdStep](#Structure+createdStep) : <code>number</code>*
    * *[.alive](#Structure+alive) : <code>boolean</code>*
    * *[.lastAliveStep](#Structure+lastAliveStep) : <code>number</code> \| <code>null</code>*
    * *[.isActive()](#Structure+isActive) ⇒ <code>boolean</code>*
    * *[.isSpawned()](#Structure+isSpawned) ⇒ <code>boolean</code>*

<a name="Station+name"></a>

### *station.name : <code>string</code>*
Station name

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
<a name="Station+hue"></a>

### *station.hue : <code>number</code>*
Station hue

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
<a name="Station+team"></a>

### *station.team : [<code>Team</code>](#Team)*
The team this station belongs to

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
<a name="Station+modules"></a>

### *station.modules : [<code>StationModuleManager</code>](#StationModuleManager)*
Station modules list

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
<a name="Station+phase"></a>

### *station.phase : <code>string</code>*
Station phase (in degrees)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
<a name="Station+level"></a>

### *station.level : <code>number</code>*
Station level

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
<a name="Station+crystals"></a>

### *station.crystals : <code>number</code>*
Station crystals progress

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
<a name="Station+crystals_max"></a>

### *station.crystals\_max : <code>number</code>*
Station's maximum crystals for that level

**Kind**: instance property of [<code>Station</code>](#Station)  
**Read only**: true  
<a name="BaseEntity+x"></a>

### *station.x : <code>number</code>*
Entity X Position

**Kind**: instance property of [<code>Station</code>](#Station)  
**Overrides**: [<code>x</code>](#BaseEntity+x)  
**Read only**: true  
<a name="BaseEntity+y"></a>

### *station.y : <code>number</code>*
Entity Y Position

**Kind**: instance property of [<code>Station</code>](#Station)  
**Overrides**: [<code>y</code>](#BaseEntity+y)  
**Read only**: true  
<a name="BaseEntity+vx"></a>

### *station.vx : <code>number</code>*
Entity X Velocity

**Kind**: instance property of [<code>Station</code>](#Station)  
**Overrides**: [<code>vx</code>](#BaseEntity+vx)  
**Read only**: true  
<a name="BaseEntity+vy"></a>

### *station.vy : <code>number</code>*
Entity Y Velocity

**Kind**: instance property of [<code>Station</code>](#Station)  
**Overrides**: [<code>vy</code>](#BaseEntity+vy)  
**Read only**: true  
<a name="BaseEntity+lastUpdatedStep"></a>

### *station.lastUpdatedStep : <code>number</code>*
Entity last updated step

**Kind**: instance property of [<code>Station</code>](#Station)  
**Overrides**: [<code>lastUpdatedStep</code>](#BaseEntity+lastUpdatedStep)  
**Read only**: true  
<a name="Structure+custom"></a>

### *station.custom : <code>object</code>*
Custom object served for assigning data by the user

**Kind**: instance property of [<code>Station</code>](#Station)  
**Overrides**: [<code>custom</code>](#Structure+custom)  
<a name="Structure+uuid"></a>

### *station.uuid : <code>number</code>*
Structure's UUID

**Kind**: instance property of [<code>Station</code>](#Station)  
**Overrides**: [<code>uuid</code>](#Structure+uuid)  
**Read only**: true  
<a name="Structure+id"></a>

### *station.id : <code>number</code>*
Structure's ID

**Kind**: instance property of [<code>Station</code>](#Station)  
**Overrides**: [<code>id</code>](#Structure+id)  
**Read only**: true  
<a name="Structure+createdStep"></a>

### *station.createdStep : <code>number</code>*
Structure's creation step

**Kind**: instance property of [<code>Station</code>](#Station)  
**Overrides**: [<code>createdStep</code>](#Structure+createdStep)  
**Read only**: true  
<a name="Structure+alive"></a>

### *station.alive : <code>boolean</code>*
Indicates whether the structure is alive or not

**Kind**: instance property of [<code>Station</code>](#Station)  
**Overrides**: [<code>alive</code>](#Structure+alive)  
**Read only**: true  
<a name="Structure+lastAliveStep"></a>

### *station.lastAliveStep : <code>number</code> \| <code>null</code>*
The latest alive step of the structure (or null if the structure is never alive)

**Kind**: instance property of [<code>Station</code>](#Station)  
**Overrides**: [<code>lastAliveStep</code>](#Structure+lastAliveStep)  
**Read only**: true  
<a name="Structure+isActive"></a>

### *station.isActive() ⇒ <code>boolean</code>*
Check whether if the structure is still active or not

**Kind**: instance method of [<code>Station</code>](#Station)  
**Overrides**: [<code>isActive</code>](#Structure+isActive)  
<a name="Structure+isSpawned"></a>

### *station.isSpawned() ⇒ <code>boolean</code>*
Check whether if the structure is spawned or not

**Kind**: instance method of [<code>Station</code>](#Station)  
**Overrides**: [<code>isSpawned</code>](#Structure+isSpawned)  
<a name="StationModule"></a>

## *StationModule ⇐ [<code>BaseEntity</code>](#BaseEntity)*
The Station Module Instance

**Kind**: global abstract class  
**Extends**: [<code>BaseEntity</code>](#BaseEntity)  

* *[StationModule](#StationModule) ⇐ [<code>BaseEntity</code>](#BaseEntity)*
    * *[.parent](#StationModule+parent) : [<code>Station</code>](#Station)*
    * *[.type](#StationModule+type) : <code>string</code>*
    * *[.class](#StationModule+class) : <code>number</code>*
    * *[.offsetX](#StationModule+offsetX) : <code>number</code>*
    * *[.offsetY](#StationModule+offsetY) : <code>number</code>*
    * *[.offsetVx](#StationModule+offsetVx) : <code>number</code>*
    * *[.offsetVy](#StationModule+offsetVy) : <code>number</code>*
    * *[.angle](#StationModule+angle) : <code>number</code>*
    * *[.shield](#StationModule+shield) : <code>number</code>*
    * *[.finish](#StationModule+finish) : <code>string</code>*
    * *[.x](#BaseEntity+x) : <code>number</code>*
    * *[.y](#BaseEntity+y) : <code>number</code>*
    * *[.vx](#BaseEntity+vx) : <code>number</code>*
    * *[.vy](#BaseEntity+vy) : <code>number</code>*
    * *[.lastUpdatedStep](#BaseEntity+lastUpdatedStep) : <code>number</code>*
    * *[.custom](#Structure+custom) : <code>object</code>*
    * *[.uuid](#Structure+uuid) : <code>number</code>*
    * *[.id](#Structure+id) : <code>number</code>*
    * *[.createdStep](#Structure+createdStep) : <code>number</code>*
    * *[.alive](#Structure+alive) : <code>boolean</code>*
    * *[.lastAliveStep](#Structure+lastAliveStep) : <code>number</code> \| <code>null</code>*
    * *[.isActive()](#Structure+isActive) ⇒ <code>boolean</code>*
    * *[.isSpawned()](#Structure+isSpawned) ⇒ <code>boolean</code>*

<a name="StationModule+parent"></a>

### *stationModule.parent : [<code>Station</code>](#Station)*
The parent station of this module

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Read only**: true  
<a name="StationModule+type"></a>

### *stationModule.type : <code>string</code>*
Module type

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Read only**: true  
<a name="StationModule+class"></a>

### *stationModule.class : <code>number</code>*
Module class

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Read only**: true  
<a name="StationModule+offsetX"></a>

### *stationModule.offsetX : <code>number</code>*
Module X Offset from the parent station's center

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Read only**: true  
<a name="StationModule+offsetY"></a>

### *stationModule.offsetY : <code>number</code>*
Module Y Offset from the parent station's center

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Read only**: true  
<a name="StationModule+offsetVx"></a>

### *stationModule.offsetVx : <code>number</code>*
Module vx Offset from the parent station's Velocity

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Read only**: true  
<a name="StationModule+offsetVy"></a>

### *stationModule.offsetVy : <code>number</code>*
Module vy Offset from the parent station's Velocity

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Read only**: true  
<a name="StationModule+angle"></a>

### *stationModule.angle : <code>number</code>*
Module angle (in degrees)

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Read only**: true  
<a name="StationModule+shield"></a>

### *stationModule.shield : <code>number</code>*
Module shield

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Read only**: true  
<a name="StationModule+finish"></a>

### *stationModule.finish : <code>string</code>*
Module finish

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Read only**: true  
<a name="BaseEntity+x"></a>

### *stationModule.x : <code>number</code>*
Entity X Position

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Overrides**: [<code>x</code>](#BaseEntity+x)  
**Read only**: true  
<a name="BaseEntity+y"></a>

### *stationModule.y : <code>number</code>*
Entity Y Position

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Overrides**: [<code>y</code>](#BaseEntity+y)  
**Read only**: true  
<a name="BaseEntity+vx"></a>

### *stationModule.vx : <code>number</code>*
Entity X Velocity

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Overrides**: [<code>vx</code>](#BaseEntity+vx)  
**Read only**: true  
<a name="BaseEntity+vy"></a>

### *stationModule.vy : <code>number</code>*
Entity Y Velocity

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Overrides**: [<code>vy</code>](#BaseEntity+vy)  
**Read only**: true  
<a name="BaseEntity+lastUpdatedStep"></a>

### *stationModule.lastUpdatedStep : <code>number</code>*
Entity last updated step

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Overrides**: [<code>lastUpdatedStep</code>](#BaseEntity+lastUpdatedStep)  
**Read only**: true  
<a name="Structure+custom"></a>

### *stationModule.custom : <code>object</code>*
Custom object served for assigning data by the user

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Overrides**: [<code>custom</code>](#Structure+custom)  
<a name="Structure+uuid"></a>

### *stationModule.uuid : <code>number</code>*
Structure's UUID

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Overrides**: [<code>uuid</code>](#Structure+uuid)  
**Read only**: true  
<a name="Structure+id"></a>

### *stationModule.id : <code>number</code>*
Structure's ID

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Overrides**: [<code>id</code>](#Structure+id)  
**Read only**: true  
<a name="Structure+createdStep"></a>

### *stationModule.createdStep : <code>number</code>*
Structure's creation step

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Overrides**: [<code>createdStep</code>](#Structure+createdStep)  
**Read only**: true  
<a name="Structure+alive"></a>

### *stationModule.alive : <code>boolean</code>*
Indicates whether the structure is alive or not

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Overrides**: [<code>alive</code>](#Structure+alive)  
**Read only**: true  
<a name="Structure+lastAliveStep"></a>

### *stationModule.lastAliveStep : <code>number</code> \| <code>null</code>*
The latest alive step of the structure (or null if the structure is never alive)

**Kind**: instance property of [<code>StationModule</code>](#StationModule)  
**Overrides**: [<code>lastAliveStep</code>](#Structure+lastAliveStep)  
**Read only**: true  
<a name="Structure+isActive"></a>

### *stationModule.isActive() ⇒ <code>boolean</code>*
Check whether if the structure is still active or not

**Kind**: instance method of [<code>StationModule</code>](#StationModule)  
**Overrides**: [<code>isActive</code>](#Structure+isActive)  
<a name="Structure+isSpawned"></a>

### *stationModule.isSpawned() ⇒ <code>boolean</code>*
Check whether if the structure is spawned or not

**Kind**: instance method of [<code>StationModule</code>](#StationModule)  
**Overrides**: [<code>isSpawned</code>](#Structure+isSpawned)  
<a name="Structure"></a>

## *Structure*
The Structure Instance - represents any structrure in the game

**Kind**: global abstract class  

* *[Structure](#Structure)*
    * *[.custom](#Structure+custom) : <code>object</code>*
    * *[.uuid](#Structure+uuid) : <code>number</code>*
    * *[.id](#Structure+id) : <code>number</code>*
    * *[.createdStep](#Structure+createdStep) : <code>number</code>*
    * *[.alive](#Structure+alive) : <code>boolean</code>*
    * *[.lastAliveStep](#Structure+lastAliveStep) : <code>number</code> \| <code>null</code>*
    * *[.isActive()](#Structure+isActive) ⇒ <code>boolean</code>*
    * *[.isSpawned()](#Structure+isSpawned) ⇒ <code>boolean</code>*

<a name="Structure+custom"></a>

### *structure.custom : <code>object</code>*
Custom object served for assigning data by the user

**Kind**: instance property of [<code>Structure</code>](#Structure)  
<a name="Structure+uuid"></a>

### *structure.uuid : <code>number</code>*
Structure's UUID

**Kind**: instance property of [<code>Structure</code>](#Structure)  
**Read only**: true  
<a name="Structure+id"></a>

### *structure.id : <code>number</code>*
Structure's ID

**Kind**: instance property of [<code>Structure</code>](#Structure)  
**Read only**: true  
<a name="Structure+createdStep"></a>

### *structure.createdStep : <code>number</code>*
Structure's creation step

**Kind**: instance property of [<code>Structure</code>](#Structure)  
**Read only**: true  
<a name="Structure+alive"></a>

### *structure.alive : <code>boolean</code>*
Indicates whether the structure is alive or not

**Kind**: instance property of [<code>Structure</code>](#Structure)  
**Read only**: true  
<a name="Structure+lastAliveStep"></a>

### *structure.lastAliveStep : <code>number</code> \| <code>null</code>*
The latest alive step of the structure (or null if the structure is never alive)

**Kind**: instance property of [<code>Structure</code>](#Structure)  
**Read only**: true  
<a name="Structure+isActive"></a>

### *structure.isActive() ⇒ <code>boolean</code>*
Check whether if the structure is still active or not

**Kind**: instance method of [<code>Structure</code>](#Structure)  
<a name="Structure+isSpawned"></a>

### *structure.isSpawned() ⇒ <code>boolean</code>*
Check whether if the structure is spawned or not

**Kind**: instance method of [<code>Structure</code>](#Structure)  
<a name="Team"></a>

## *Team ⇐ [<code>Structure</code>](#Structure)*
The Team Instance

**Kind**: global abstract class  
**Extends**: [<code>Structure</code>](#Structure)  

* *[Team](#Team) ⇐ [<code>Structure</code>](#Structure)*
    * *[.faction](#Team+faction) : <code>string</code>*
    * *[.station](#Team+station) : [<code>Station</code>](#Station)*
    * *[.hue](#Team+hue) : <code>number</code>*
    * *[.open](#Team+open) : <code>boolean</code>*
    * *[.custom](#Structure+custom) : <code>object</code>*
    * *[.uuid](#Structure+uuid) : <code>number</code>*
    * *[.id](#Structure+id) : <code>number</code>*
    * *[.createdStep](#Structure+createdStep) : <code>number</code>*
    * *[.alive](#Structure+alive) : <code>boolean</code>*
    * *[.lastAliveStep](#Structure+lastAliveStep) : <code>number</code> \| <code>null</code>*
    * *[.isActive()](#Structure+isActive) ⇒ <code>boolean</code>*
    * *[.isSpawned()](#Structure+isSpawned) ⇒ <code>boolean</code>*

<a name="Team+faction"></a>

### *team.faction : <code>string</code>*
Team faction name

**Kind**: instance property of [<code>Team</code>](#Team)  
**Read only**: true  
<a name="Team+station"></a>

### *team.station : [<code>Station</code>](#Station)*
Team station

**Kind**: instance property of [<code>Team</code>](#Team)  
**Read only**: true  
<a name="Team+hue"></a>

### *team.hue : <code>number</code>*
Team hue

**Kind**: instance property of [<code>Team</code>](#Team)  
**Read only**: true  
<a name="Team+open"></a>

### *team.open : <code>boolean</code>*
Indicates whether the team is open (accepting more players) or not

**Kind**: instance property of [<code>Team</code>](#Team)  
**Read only**: true  
<a name="Structure+custom"></a>

### *team.custom : <code>object</code>*
Custom object served for assigning data by the user

**Kind**: instance property of [<code>Team</code>](#Team)  
**Overrides**: [<code>custom</code>](#Structure+custom)  
<a name="Structure+uuid"></a>

### *team.uuid : <code>number</code>*
Structure's UUID

**Kind**: instance property of [<code>Team</code>](#Team)  
**Overrides**: [<code>uuid</code>](#Structure+uuid)  
**Read only**: true  
<a name="Structure+id"></a>

### *team.id : <code>number</code>*
Structure's ID

**Kind**: instance property of [<code>Team</code>](#Team)  
**Overrides**: [<code>id</code>](#Structure+id)  
**Read only**: true  
<a name="Structure+createdStep"></a>

### *team.createdStep : <code>number</code>*
Structure's creation step

**Kind**: instance property of [<code>Team</code>](#Team)  
**Overrides**: [<code>createdStep</code>](#Structure+createdStep)  
**Read only**: true  
<a name="Structure+alive"></a>

### *team.alive : <code>boolean</code>*
Indicates whether the structure is alive or not

**Kind**: instance property of [<code>Team</code>](#Team)  
**Overrides**: [<code>alive</code>](#Structure+alive)  
**Read only**: true  
<a name="Structure+lastAliveStep"></a>

### *team.lastAliveStep : <code>number</code> \| <code>null</code>*
The latest alive step of the structure (or null if the structure is never alive)

**Kind**: instance property of [<code>Team</code>](#Team)  
**Overrides**: [<code>lastAliveStep</code>](#Structure+lastAliveStep)  
**Read only**: true  
<a name="Structure+isActive"></a>

### *team.isActive() ⇒ <code>boolean</code>*
Check whether if the structure is still active or not

**Kind**: instance method of [<code>Team</code>](#Team)  
**Overrides**: [<code>isActive</code>](#Structure+isActive)  
<a name="Structure+isSpawned"></a>

### *team.isSpawned() ⇒ <code>boolean</code>*
Check whether if the structure is spawned or not

**Kind**: instance method of [<code>Team</code>](#Team)  
**Overrides**: [<code>isSpawned</code>](#Structure+isSpawned)  
<a name="UIBasicShapeElement"></a>

## UIBasicShapeElement ⇐ [<code>UIBaseElement</code>](#UIBaseElement)
The UI BasicShape Element instance

**Kind**: global class  
**Extends**: [<code>UIBaseElement</code>](#UIBaseElement)  
**Since**: 1.4.6-alpha6  

* [UIBasicShapeElement](#UIBasicShapeElement) ⇐ [<code>UIBaseElement</code>](#UIBaseElement)
    * [new UIBasicShapeElement()](#new_UIBasicShapeElement_new)
    * [.width](#UIBasicShapeElement+width) : <code>number</code> \| <code>null</code>
    * [.fill](#UIBasicShapeElement+fill) : <code>string</code>
    * [.stroke](#UIBasicShapeElement+stroke) : <code>string</code>
    * [.position](#UIBaseElement+position) : <code>Array.&lt;number&gt;</code>
    * [.parent](#UIBaseElement+parent) : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
    * [.setWidth(width, [strictMode])](#UIBasicShapeElement+setWidth) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
    * [.setFill(fill, [strictMode])](#UIBasicShapeElement+setFill) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
    * [.setStroke(stroke, [strictMode])](#UIBasicShapeElement+setStroke) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
    * [.set(data, [strictMode])](#UIBaseElement+set) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.setPosition(position, [strictMode])](#UIBaseElement+setPosition) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.clone()](#UIBaseElement+clone) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.remove()](#UIBaseElement+remove) ⇒ <code>boolean</code>
    * [.serialize()](#UIBaseElement+serialize) ⇒ <code>Object</code>

<a name="new_UIBasicShapeElement_new"></a>

### new UIBasicShapeElement()

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [data.fill] | <code>string</code> \| <code>number</code> | <code>&quot;\&quot;hsla(0,0%,0%,0)\&quot;&quot;</code> | Background fill color of this element, in CSS value or color hex value (ARGB or RGB format) |
| [data.stroke] | <code>string</code> \| <code>number</code> | <code>&quot;\&quot;hsla(0,0%,0%,0)\&quot;&quot;</code> | Border color of this element, in CSS value or color hex value (ARGB or RGB format) |
| [data.width] | <code>number</code> | <code>0</code> | Border width of this text element |

<a name="UIBasicShapeElement+width"></a>

### uiBasicShapeElement.width : <code>number</code> \| <code>null</code>
Border width of this BasicShape element, a number in (1 / ([End user screen's pixel density](https://en.wikipedia.org/wiki/Pixel_density))) [pixels (px)](https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel) or `null` if inherit from previous box or round element

**Kind**: instance property of [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Read only**: true  
<a name="UIBasicShapeElement+fill"></a>

### uiBasicShapeElement.fill : <code>string</code>
CSS background color value of this BasicShape element

**Kind**: instance property of [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Read only**: true  
<a name="UIBasicShapeElement+stroke"></a>

### uiBasicShapeElement.stroke : <code>string</code>
CSS border color value of this BasicShape element

**Kind**: instance property of [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Read only**: true  
<a name="UIBaseElement+position"></a>

### uiBasicShapeElement.position : <code>Array.&lt;number&gt;</code>
The position array ([x, y, width, height]) of this element

**Kind**: instance property of [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Overrides**: [<code>position</code>](#UIBaseElement+position)  
**Read only**: true  
<a name="UIBaseElement+parent"></a>

### uiBasicShapeElement.parent : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
Parent group of this element

**Kind**: instance property of [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Overrides**: [<code>parent</code>](#UIBaseElement+parent)  
**Read only**: true  
<a name="UIBasicShapeElement+setWidth"></a>

### uiBasicShapeElement.setWidth(width, [strictMode]) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
Sets border width of this UI BasicShape Element

**Kind**: instance method of [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Returns**: [<code>UIBasicShapeElement</code>](#UIBasicShapeElement) - The UI BasicShape Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| width | <code>number</code> \| <code>null</code> |  | Width value to set, non-negative in (1 / ([End user screen's pixel density](https://en.wikipedia.org/wiki/Pixel_density))) [pixels (px)](https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel) or `null` if to inherit from previous box or round element |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBasicShapeElement+setFill"></a>

### uiBasicShapeElement.setFill(fill, [strictMode]) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
Sets background fill color of this UI BasicShape Element

**Kind**: instance method of [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Returns**: [<code>UIBasicShapeElement</code>](#UIBasicShapeElement) - The UI BasicShape Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fill | <code>string</code> \| <code>number</code> |  | Color value to set, either an CSS color string or a hex color value (ARGB or RGB format) |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBasicShapeElement+setStroke"></a>

### uiBasicShapeElement.setStroke(stroke, [strictMode]) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
Sets border color of this UI BasicShape Element

**Kind**: instance method of [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Returns**: [<code>UIBasicShapeElement</code>](#UIBasicShapeElement) - The UI BasicShape Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| stroke | <code>string</code> \| <code>number</code> |  | Color value to set, either an CSS color string or a hex color value (ARGB or RGB format) |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+set"></a>

### uiBasicShapeElement.set(data, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets data to this element

**Kind**: instance method of [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Overrides**: [<code>set</code>](#UIBaseElement+set)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Options to set to. Absent fields from this object will keep the old value |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+setPosition"></a>

### uiBasicShapeElement.setPosition(position, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets position of this UI Element

**Kind**: instance method of [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Overrides**: [<code>setPosition</code>](#UIBaseElement+setPosition)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Array.&lt;number&gt;</code> |  | Position array [x, y, width, height] to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+clone"></a>

### uiBasicShapeElement.clone() ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Clone this element

**Kind**: instance method of [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Overrides**: [<code>clone</code>](#UIBaseElement+clone)  
<a name="UIBaseElement+remove"></a>

### uiBasicShapeElement.remove() ⇒ <code>boolean</code>
Remove this element from parent element group

**Kind**: instance method of [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Overrides**: [<code>remove</code>](#UIBaseElement+remove)  
**Returns**: <code>boolean</code> - Indicating if the result is successful or not  
<a name="UIBaseElement+serialize"></a>

### uiBasicShapeElement.serialize() ⇒ <code>Object</code>
Serialize this element into JSON object.Some element type (e.g Group) is not supported by Modding Server, hence calling `toJSON()` method will deconstruct the element.Use this method to keep serialization of this element.

**Kind**: instance method of [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Overrides**: [<code>serialize</code>](#UIBaseElement+serialize)  
**Returns**: <code>Object</code> - Serialized result  
<a name="UIBoxElement"></a>

## UIBoxElement ⇐ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
The UI Box Element instance

**Kind**: global class  
**Extends**: [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Since**: 1.4.2-alpha6  

* [UIBoxElement](#UIBoxElement) ⇐ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
    * [.width](#UIBasicShapeElement+width) : <code>number</code> \| <code>null</code>
    * [.fill](#UIBasicShapeElement+fill) : <code>string</code>
    * [.stroke](#UIBasicShapeElement+stroke) : <code>string</code>
    * [.position](#UIBaseElement+position) : <code>Array.&lt;number&gt;</code>
    * [.parent](#UIBaseElement+parent) : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
    * [.setWidth(width, [strictMode])](#UIBasicShapeElement+setWidth) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
    * [.setFill(fill, [strictMode])](#UIBasicShapeElement+setFill) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
    * [.setStroke(stroke, [strictMode])](#UIBasicShapeElement+setStroke) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
    * [.set(data, [strictMode])](#UIBaseElement+set) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.setPosition(position, [strictMode])](#UIBaseElement+setPosition) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.clone()](#UIBaseElement+clone) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.remove()](#UIBaseElement+remove) ⇒ <code>boolean</code>
    * [.serialize()](#UIBaseElement+serialize) ⇒ <code>Object</code>

<a name="UIBasicShapeElement+width"></a>

### uiBoxElement.width : <code>number</code> \| <code>null</code>
Border width of this BasicShape element, a number in (1 / ([End user screen's pixel density](https://en.wikipedia.org/wiki/Pixel_density))) [pixels (px)](https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel) or `null` if inherit from previous box or round element

**Kind**: instance property of [<code>UIBoxElement</code>](#UIBoxElement)  
**Read only**: true  
<a name="UIBasicShapeElement+fill"></a>

### uiBoxElement.fill : <code>string</code>
CSS background color value of this BasicShape element

**Kind**: instance property of [<code>UIBoxElement</code>](#UIBoxElement)  
**Read only**: true  
<a name="UIBasicShapeElement+stroke"></a>

### uiBoxElement.stroke : <code>string</code>
CSS border color value of this BasicShape element

**Kind**: instance property of [<code>UIBoxElement</code>](#UIBoxElement)  
**Read only**: true  
<a name="UIBaseElement+position"></a>

### uiBoxElement.position : <code>Array.&lt;number&gt;</code>
The position array ([x, y, width, height]) of this element

**Kind**: instance property of [<code>UIBoxElement</code>](#UIBoxElement)  
**Read only**: true  
<a name="UIBaseElement+parent"></a>

### uiBoxElement.parent : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
Parent group of this element

**Kind**: instance property of [<code>UIBoxElement</code>](#UIBoxElement)  
**Read only**: true  
<a name="UIBasicShapeElement+setWidth"></a>

### uiBoxElement.setWidth(width, [strictMode]) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
Sets border width of this UI BasicShape Element

**Kind**: instance method of [<code>UIBoxElement</code>](#UIBoxElement)  
**Returns**: [<code>UIBasicShapeElement</code>](#UIBasicShapeElement) - The UI BasicShape Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| width | <code>number</code> \| <code>null</code> |  | Width value to set, non-negative in (1 / ([End user screen's pixel density](https://en.wikipedia.org/wiki/Pixel_density))) [pixels (px)](https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel) or `null` if to inherit from previous box or round element |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBasicShapeElement+setFill"></a>

### uiBoxElement.setFill(fill, [strictMode]) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
Sets background fill color of this UI BasicShape Element

**Kind**: instance method of [<code>UIBoxElement</code>](#UIBoxElement)  
**Returns**: [<code>UIBasicShapeElement</code>](#UIBasicShapeElement) - The UI BasicShape Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fill | <code>string</code> \| <code>number</code> |  | Color value to set, either an CSS color string or a hex color value (ARGB or RGB format) |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBasicShapeElement+setStroke"></a>

### uiBoxElement.setStroke(stroke, [strictMode]) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
Sets border color of this UI BasicShape Element

**Kind**: instance method of [<code>UIBoxElement</code>](#UIBoxElement)  
**Returns**: [<code>UIBasicShapeElement</code>](#UIBasicShapeElement) - The UI BasicShape Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| stroke | <code>string</code> \| <code>number</code> |  | Color value to set, either an CSS color string or a hex color value (ARGB or RGB format) |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+set"></a>

### uiBoxElement.set(data, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets data to this element

**Kind**: instance method of [<code>UIBoxElement</code>](#UIBoxElement)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Options to set to. Absent fields from this object will keep the old value |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+setPosition"></a>

### uiBoxElement.setPosition(position, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets position of this UI Element

**Kind**: instance method of [<code>UIBoxElement</code>](#UIBoxElement)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Array.&lt;number&gt;</code> |  | Position array [x, y, width, height] to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+clone"></a>

### uiBoxElement.clone() ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Clone this element

**Kind**: instance method of [<code>UIBoxElement</code>](#UIBoxElement)  
<a name="UIBaseElement+remove"></a>

### uiBoxElement.remove() ⇒ <code>boolean</code>
Remove this element from parent element group

**Kind**: instance method of [<code>UIBoxElement</code>](#UIBoxElement)  
**Returns**: <code>boolean</code> - Indicating if the result is successful or not  
<a name="UIBaseElement+serialize"></a>

### uiBoxElement.serialize() ⇒ <code>Object</code>
Serialize this element into JSON object.Some element type (e.g Group) is not supported by Modding Server, hence calling `toJSON()` method will deconstruct the element.Use this method to keep serialization of this element.

**Kind**: instance method of [<code>UIBoxElement</code>](#UIBoxElement)  
**Returns**: <code>Object</code> - Serialized result  
<a name="UIComponent"></a>

## UIComponent ⇐ [<code>UIElementGroup</code>](#UIElementGroup)
The UI Component instance, representing visual and interactable components in-game.This is an extension of UIElementGroup, but has more features and acts at the upmost parent of any UI Component.

**Kind**: global class  
**Extends**: [<code>UIElementGroup</code>](#UIElementGroup)  
**Since**: 1.4.2-alpha6  

* [UIComponent](#UIComponent) ⇐ [<code>UIElementGroup</code>](#UIElementGroup)
    * [new UIComponent()](#new_UIComponent_new)
    * [.id](#UIComponent+id) : <code>string</code>
    * [.uuid](#UIComponent+uuid) : <code>string</code>
    * [.visible](#UIComponent+visible) : <code>boolean</code>
    * [.clickable](#UIComponent+clickable) : <code>boolean</code>
    * [.persistent](#UIComponent+persistent) : <code>boolean</code>
    * [.shortcut](#UIComponent+shortcut) : <code>string</code>
    * [.parent](#UIComponent+parent) : [<code>UIComponentManager</code>](#UIComponentManager)
    * [.components](#UIElementGroup+components) : [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement)
    * [.position](#UIBaseElement+position) : <code>Array.&lt;number&gt;</code>
    * [.setVisible(visible, [strictMode])](#UIComponent+setVisible) ⇒ [<code>UIComponent</code>](#UIComponent)
    * [.setClickable(clickable, [strictMode])](#UIComponent+setClickable) ⇒ [<code>UIComponent</code>](#UIComponent)
    * [.setPersistent(persistent)](#UIComponent+setPersistent) ⇒ [<code>UIComponent</code>](#UIComponent)
    * [.setShortcut(shortcut, [strictMode])](#UIComponent+setShortcut) ⇒ [<code>UIComponent</code>](#UIComponent)
    * [.hide()](#UIComponent+hide) ⇒ [<code>UIComponent</code>](#UIComponent)
    * [.remove()](#UIComponent+remove) ⇒ [<code>UIComponent</code>](#UIComponent)
    * [.show()](#UIComponent+show) ⇒ [<code>UIComponent</code>](#UIComponent)
    * [.update(forceRefresh)](#UIComponent+update) ⇒ [<code>UIComponent</code>](#UIComponent)
    * [.isActive()](#UIComponent+isActive) ⇒ <code>boolean</code>
    * [.getComponentOfType(type, [findInHirearchy])](#UIElementGroup+getComponentOfType) ⇒ [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code>
    * [.getComponentsOfType(type, [findInHirearchy])](#UIElementGroup+getComponentsOfType) ⇒ [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement)
    * [.createComponent(data, [strictMode])](#UIElementGroup+createComponent) ⇒ [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code>
    * [.addComponent(data, [strictMode])](#UIElementGroup+addComponent) ⇒ [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code>
    * [.setComponents(components, [strictMode])](#UIElementGroup+setComponents) ⇒ [<code>UIElementGroup</code>](#UIElementGroup)
    * [.removeComponent(component)](#UIElementGroup+removeComponent) ⇒ <code>boolean</code>
    * [.removeComponentAtIndex(index)](#UIElementGroup+removeComponentAtIndex) ⇒ <code>boolean</code>
    * [.transform(position, [strictMode])](#UIElementGroup+transform) ⇒ [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement)
    * [.set(data, [strictMode])](#UIBaseElement+set) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.setPosition(position, [strictMode])](#UIBaseElement+setPosition) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.clone()](#UIBaseElement+clone) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.serialize()](#UIBaseElement+serialize) ⇒ <code>Object</code>

<a name="new_UIComponent_new"></a>

### new UIComponent()

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data.id | <code>string</code> |  | Custom ID for this UI Component |
| [data.visible] | <code>boolean</code> | <code>true</code> | Component visibility |
| [data.clickable] | <code>boolean</code> | <code>false</code> | Component clickability (and will yield event when clicked) |
| [data.persistent] | <code>boolean</code> | <code>false</code> | Whether this component will also show for ships joining later from this set (only available for UI Component whose parent manager is [ui_components](#ShipManager+ui_components)) |
| data.shortcut | <code>string</code> \| <code>null</code> |  | Shortcut of this UI Component (if clickable) |

<a name="UIComponent+id"></a>

### uiComponent.id : <code>string</code>
Custom ID for this UI Component

**Kind**: instance property of [<code>UIComponent</code>](#UIComponent)  
**Read only**: true  
<a name="UIComponent+uuid"></a>

### uiComponent.uuid : <code>string</code>
UUID for this UI Component

**Kind**: instance property of [<code>UIComponent</code>](#UIComponent)  
**Read only**: true  
<a name="UIComponent+visible"></a>

### uiComponent.visible : <code>boolean</code>
Visibility of this UI Component

**Kind**: instance property of [<code>UIComponent</code>](#UIComponent)  
**Read only**: true  
<a name="UIComponent+clickable"></a>

### uiComponent.clickable : <code>boolean</code>
Clickability of this UI Component

**Kind**: instance property of [<code>UIComponent</code>](#UIComponent)  
**Read only**: true  
<a name="UIComponent+persistent"></a>

### uiComponent.persistent : <code>boolean</code>
Persistency of this UI Component

**Kind**: instance property of [<code>UIComponent</code>](#UIComponent)  
**Read only**: true  
<a name="UIComponent+shortcut"></a>

### uiComponent.shortcut : <code>string</code>
Shortcut for this UI Component

**Kind**: instance property of [<code>UIComponent</code>](#UIComponent)  
**Read only**: true  
<a name="UIComponent+parent"></a>

### uiComponent.parent : [<code>UIComponentManager</code>](#UIComponentManager)
Parent manager of this UI Component

**Kind**: instance property of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>parent</code>](#UIBaseElement+parent)  
**Read only**: true  
<a name="UIElementGroup+components"></a>

### uiComponent.components : [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement)
A cloned array of component list

**Kind**: instance property of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>components</code>](#UIElementGroup+components)  
**Read only**: true  
<a name="UIBaseElement+position"></a>

### uiComponent.position : <code>Array.&lt;number&gt;</code>
The position array ([x, y, width, height]) of this element

**Kind**: instance property of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>position</code>](#UIBaseElement+position)  
**Read only**: true  
<a name="UIComponent+setVisible"></a>

### uiComponent.setVisible(visible, [strictMode]) ⇒ [<code>UIComponent</code>](#UIComponent)
Sets visibility of this UI Component

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Returns**: [<code>UIComponent</code>](#UIComponent) - The UI Component in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| visible | <code>boolean</code> |  | Visibility to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIComponent+setClickable"></a>

### uiComponent.setClickable(clickable, [strictMode]) ⇒ [<code>UIComponent</code>](#UIComponent)
Sets clickability of this UI Component

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Returns**: [<code>UIComponent</code>](#UIComponent) - The UI Component in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| clickable | <code>boolean</code> |  | Clickability to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIComponent+setPersistent"></a>

### uiComponent.setPersistent(persistent) ⇒ [<code>UIComponent</code>](#UIComponent)
Sets persistency of this UI Component

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Returns**: [<code>UIComponent</code>](#UIComponent) - The UI Component in question  

| Param | Type | Description |
| --- | --- | --- |
| persistent | <code>boolean</code> | Persistency to set |

<a name="UIComponent+setShortcut"></a>

### uiComponent.setShortcut(shortcut, [strictMode]) ⇒ [<code>UIComponent</code>](#UIComponent)
Sets shortcut assigned to this UI Component

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Returns**: [<code>UIComponent</code>](#UIComponent) - The UI Component in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| shortcut | <code>string</code> \| <code>null</code> |  | Shortcut to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIComponent+hide"></a>

### uiComponent.hide() ⇒ [<code>UIComponent</code>](#UIComponent)
Hide this component from player

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Returns**: [<code>UIComponent</code>](#UIComponent) - The UI Component in question  
<a name="UIComponent+remove"></a>

### uiComponent.remove() ⇒ [<code>UIComponent</code>](#UIComponent)
Hide this component from player

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>remove</code>](#UIBaseElement+remove)  
**Returns**: [<code>UIComponent</code>](#UIComponent) - The UI Component in question  
<a name="UIComponent+show"></a>

### uiComponent.show() ⇒ [<code>UIComponent</code>](#UIComponent)
Show this component to player (from hidden status)

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Returns**: [<code>UIComponent</code>](#UIComponent) - The UI Component in question  
<a name="UIComponent+update"></a>

### uiComponent.update(forceRefresh) ⇒ [<code>UIComponent</code>](#UIComponent)
Update the content of this component and show to player

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Returns**: [<code>UIComponent</code>](#UIComponent) - The UI Component in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| forceRefresh | <code>boolean</code> | <code>false</code> | Whether to force update to this component |

<a name="UIComponent+isActive"></a>

### uiComponent.isActive() ⇒ <code>boolean</code>
Whether this component is active (active status indicates that this UI component has an active parent and is shown to player)

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Returns**: <code>boolean</code> - The active status  
<a name="UIElementGroup+getComponentOfType"></a>

### uiComponent.getComponentOfType(type, [findInHirearchy]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code>
Find an element of type

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>getComponentOfType</code>](#UIElementGroup+getComponentOfType)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code> - Finding result  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> \| [<code>UIBaseElement</code>](#UIBaseElement) |  | Type name/class to find |
| [findInHirearchy] | <code>boolean</code> | <code>false</code> | Whether to find in hirearchy if result is not found in current group |

<a name="UIElementGroup+getComponentsOfType"></a>

### uiComponent.getComponentsOfType(type, [findInHirearchy]) ⇒ [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement)
Returns array of elements matching given type

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>getComponentsOfType</code>](#UIElementGroup+getComponentsOfType)  
**Returns**: [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement) - The resulting array  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> \| [<code>UIBaseElement</code>](#UIBaseElement) |  | Type name/class to lookup |
| [findInHirearchy] | <code>boolean</code> | <code>false</code> | Whether to include search results in hirearchy |

<a name="UIElementGroup+createComponent"></a>

### uiComponent.createComponent(data, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code>
Create a component (but does not add to this group's hierachy yet).Note that passing an already-resolved [UIBaseElement](#UIBaseElement) object will return its clone instead

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>createComponent</code>](#UIElementGroup+createComponent)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code> - The created element (or null if invalid element type is passed in non-strict mode)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Raw (or resolved) component data |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIElementGroup+addComponent"></a>

### uiComponent.addComponent(data, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code>
Create a component and add to hierarchy

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>addComponent</code>](#UIElementGroup+addComponent)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code> - The created and added element (or null if invalid element type is passed in non-strict mode)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Raw (or resolved) component data |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIElementGroup+setComponents"></a>

### uiComponent.setComponents(components, [strictMode]) ⇒ [<code>UIElementGroup</code>](#UIElementGroup)
Replace the current components list with new ones

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>setComponents</code>](#UIElementGroup+setComponents)  
**Returns**: [<code>UIElementGroup</code>](#UIElementGroup) - The UI Element Group in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| components | <code>Array.&lt;Object&gt;</code> |  | Array of raw (or resolved) component data |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIElementGroup+removeComponent"></a>

### uiComponent.removeComponent(component) ⇒ <code>boolean</code>
Remove a component

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>removeComponent</code>](#UIElementGroup+removeComponent)  
**Returns**: <code>boolean</code> - Whether the removal is successful or not  

| Param | Type | Description |
| --- | --- | --- |
| component | [<code>UIBaseElement</code>](#UIBaseElement) | The component to remove |

<a name="UIElementGroup+removeComponentAtIndex"></a>

### uiComponent.removeComponentAtIndex(index) ⇒ <code>boolean</code>
Remove a component at an index

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>removeComponentAtIndex</code>](#UIElementGroup+removeComponentAtIndex)  
**Returns**: <code>boolean</code> - Whether the removal is successful or not  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of component to remove. Allows negative number (for back-counting) |

<a name="UIElementGroup+transform"></a>

### uiComponent.transform(position, [strictMode]) ⇒ [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement)
Transform the given group with given position array

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>transform</code>](#UIElementGroup+transform)  
**Returns**: [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement) - The transformed array of elements  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Array.&lt;number&gt;</code> |  | The original position array ([x, y, width, height]) |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+set"></a>

### uiComponent.set(data, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets data to this element

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>set</code>](#UIBaseElement+set)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Options to set to. Absent fields from this object will keep the old value |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+setPosition"></a>

### uiComponent.setPosition(position, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets position of this UI Element

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>setPosition</code>](#UIBaseElement+setPosition)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Array.&lt;number&gt;</code> |  | Position array [x, y, width, height] to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+clone"></a>

### uiComponent.clone() ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Clone this element

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>clone</code>](#UIBaseElement+clone)  
<a name="UIBaseElement+serialize"></a>

### uiComponent.serialize() ⇒ <code>Object</code>
Serialize this element into JSON object.Some element type (e.g Group) is not supported by Modding Server, hence calling `toJSON()` method will deconstruct the element.Use this method to keep serialization of this element.

**Kind**: instance method of [<code>UIComponent</code>](#UIComponent)  
**Overrides**: [<code>serialize</code>](#UIBaseElement+serialize)  
**Returns**: <code>Object</code> - Serialized result  
<a name="UIBaseElement"></a>

## UIBaseElement
Base UI Element instance

**Kind**: global class  
**Since**: 1.4.6-alpha6  

* [UIBaseElement](#UIBaseElement)
    * [new UIBaseElement(data, [strictMode])](#new_UIBaseElement_new)
    * [.position](#UIBaseElement+position) : <code>Array.&lt;number&gt;</code>
    * [.parent](#UIBaseElement+parent) : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
    * [.set(data, [strictMode])](#UIBaseElement+set) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.setPosition(position, [strictMode])](#UIBaseElement+setPosition) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.clone()](#UIBaseElement+clone) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.remove()](#UIBaseElement+remove) ⇒ <code>boolean</code>
    * [.serialize()](#UIBaseElement+serialize) ⇒ <code>Object</code>

<a name="new_UIBaseElement_new"></a>

### new UIBaseElement(data, [strictMode])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Data to initialize this element |
| data.posistion | <code>Array.&lt;number&gt;</code> |  | Position of this element ([x, y, width, height]) |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+position"></a>

### uiBaseElement.position : <code>Array.&lt;number&gt;</code>
The position array ([x, y, width, height]) of this element

**Kind**: instance property of [<code>UIBaseElement</code>](#UIBaseElement)  
**Read only**: true  
<a name="UIBaseElement+parent"></a>

### uiBaseElement.parent : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
Parent group of this element

**Kind**: instance property of [<code>UIBaseElement</code>](#UIBaseElement)  
**Read only**: true  
<a name="UIBaseElement+set"></a>

### uiBaseElement.set(data, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets data to this element

**Kind**: instance method of [<code>UIBaseElement</code>](#UIBaseElement)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Options to set to. Absent fields from this object will keep the old value |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+setPosition"></a>

### uiBaseElement.setPosition(position, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets position of this UI Element

**Kind**: instance method of [<code>UIBaseElement</code>](#UIBaseElement)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Array.&lt;number&gt;</code> |  | Position array [x, y, width, height] to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+clone"></a>

### uiBaseElement.clone() ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Clone this element

**Kind**: instance method of [<code>UIBaseElement</code>](#UIBaseElement)  
<a name="UIBaseElement+remove"></a>

### uiBaseElement.remove() ⇒ <code>boolean</code>
Remove this element from parent element group

**Kind**: instance method of [<code>UIBaseElement</code>](#UIBaseElement)  
**Returns**: <code>boolean</code> - Indicating if the result is successful or not  
<a name="UIBaseElement+serialize"></a>

### uiBaseElement.serialize() ⇒ <code>Object</code>
Serialize this element into JSON object.Some element type (e.g Group) is not supported by Modding Server, hence calling `toJSON()` method will deconstruct the element.Use this method to keep serialization of this element.

**Kind**: instance method of [<code>UIBaseElement</code>](#UIBaseElement)  
**Returns**: <code>Object</code> - Serialized result  
<a name="UIElementGroup"></a>

## UIElementGroup ⇐ [<code>UIBaseElement</code>](#UIBaseElement)
The UI Element Group instance - allows grouping and scaling of UI Elements as a whole

**Kind**: global class  
**Extends**: [<code>UIBaseElement</code>](#UIBaseElement)  
**Since**: 1.4.2-alpha6  

* [UIElementGroup](#UIElementGroup) ⇐ [<code>UIBaseElement</code>](#UIBaseElement)
    * [new UIElementGroup()](#new_UIElementGroup_new)
    * [.components](#UIElementGroup+components) : [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement)
    * [.position](#UIBaseElement+position) : <code>Array.&lt;number&gt;</code>
    * [.parent](#UIBaseElement+parent) : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
    * [.getComponentOfType(type, [findInHirearchy])](#UIElementGroup+getComponentOfType) ⇒ [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code>
    * [.getComponentsOfType(type, [findInHirearchy])](#UIElementGroup+getComponentsOfType) ⇒ [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement)
    * [.createComponent(data, [strictMode])](#UIElementGroup+createComponent) ⇒ [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code>
    * [.addComponent(data, [strictMode])](#UIElementGroup+addComponent) ⇒ [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code>
    * [.setComponents(components, [strictMode])](#UIElementGroup+setComponents) ⇒ [<code>UIElementGroup</code>](#UIElementGroup)
    * [.removeComponent(component)](#UIElementGroup+removeComponent) ⇒ <code>boolean</code>
    * [.removeComponentAtIndex(index)](#UIElementGroup+removeComponentAtIndex) ⇒ <code>boolean</code>
    * [.transform(position, [strictMode])](#UIElementGroup+transform) ⇒ [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement)
    * [.set(data, [strictMode])](#UIBaseElement+set) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.setPosition(position, [strictMode])](#UIBaseElement+setPosition) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.clone()](#UIBaseElement+clone) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.remove()](#UIBaseElement+remove) ⇒ <code>boolean</code>
    * [.serialize()](#UIBaseElement+serialize) ⇒ <code>Object</code>

<a name="new_UIElementGroup_new"></a>

### new UIElementGroup()

| Param | Type | Description |
| --- | --- | --- |
| data.components | <code>Array.&lt;Object&gt;</code> | Raw (or parsed) object component list |

<a name="UIElementGroup+components"></a>

### uiElementGroup.components : [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement)
A cloned array of component list

**Kind**: instance property of [<code>UIElementGroup</code>](#UIElementGroup)  
**Read only**: true  
<a name="UIBaseElement+position"></a>

### uiElementGroup.position : <code>Array.&lt;number&gt;</code>
The position array ([x, y, width, height]) of this element

**Kind**: instance property of [<code>UIElementGroup</code>](#UIElementGroup)  
**Overrides**: [<code>position</code>](#UIBaseElement+position)  
**Read only**: true  
<a name="UIBaseElement+parent"></a>

### uiElementGroup.parent : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
Parent group of this element

**Kind**: instance property of [<code>UIElementGroup</code>](#UIElementGroup)  
**Overrides**: [<code>parent</code>](#UIBaseElement+parent)  
**Read only**: true  
<a name="UIElementGroup+getComponentOfType"></a>

### uiElementGroup.getComponentOfType(type, [findInHirearchy]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code>
Find an element of type

**Kind**: instance method of [<code>UIElementGroup</code>](#UIElementGroup)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code> - Finding result  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> \| [<code>UIBaseElement</code>](#UIBaseElement) |  | Type name/class to find |
| [findInHirearchy] | <code>boolean</code> | <code>false</code> | Whether to find in hirearchy if result is not found in current group |

<a name="UIElementGroup+getComponentsOfType"></a>

### uiElementGroup.getComponentsOfType(type, [findInHirearchy]) ⇒ [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement)
Returns array of elements matching given type

**Kind**: instance method of [<code>UIElementGroup</code>](#UIElementGroup)  
**Returns**: [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement) - The resulting array  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> \| [<code>UIBaseElement</code>](#UIBaseElement) |  | Type name/class to lookup |
| [findInHirearchy] | <code>boolean</code> | <code>false</code> | Whether to include search results in hirearchy |

<a name="UIElementGroup+createComponent"></a>

### uiElementGroup.createComponent(data, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code>
Create a component (but does not add to this group's hierachy yet).Note that passing an already-resolved [UIBaseElement](#UIBaseElement) object will return its clone instead

**Kind**: instance method of [<code>UIElementGroup</code>](#UIElementGroup)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code> - The created element (or null if invalid element type is passed in non-strict mode)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Raw (or resolved) component data |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIElementGroup+addComponent"></a>

### uiElementGroup.addComponent(data, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code>
Create a component and add to hierarchy

**Kind**: instance method of [<code>UIElementGroup</code>](#UIElementGroup)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) \| <code>null</code> - The created and added element (or null if invalid element type is passed in non-strict mode)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Raw (or resolved) component data |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIElementGroup+setComponents"></a>

### uiElementGroup.setComponents(components, [strictMode]) ⇒ [<code>UIElementGroup</code>](#UIElementGroup)
Replace the current components list with new ones

**Kind**: instance method of [<code>UIElementGroup</code>](#UIElementGroup)  
**Returns**: [<code>UIElementGroup</code>](#UIElementGroup) - The UI Element Group in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| components | <code>Array.&lt;Object&gt;</code> |  | Array of raw (or resolved) component data |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIElementGroup+removeComponent"></a>

### uiElementGroup.removeComponent(component) ⇒ <code>boolean</code>
Remove a component

**Kind**: instance method of [<code>UIElementGroup</code>](#UIElementGroup)  
**Returns**: <code>boolean</code> - Whether the removal is successful or not  

| Param | Type | Description |
| --- | --- | --- |
| component | [<code>UIBaseElement</code>](#UIBaseElement) | The component to remove |

<a name="UIElementGroup+removeComponentAtIndex"></a>

### uiElementGroup.removeComponentAtIndex(index) ⇒ <code>boolean</code>
Remove a component at an index

**Kind**: instance method of [<code>UIElementGroup</code>](#UIElementGroup)  
**Returns**: <code>boolean</code> - Whether the removal is successful or not  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of component to remove. Allows negative number (for back-counting) |

<a name="UIElementGroup+transform"></a>

### uiElementGroup.transform(position, [strictMode]) ⇒ [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement)
Transform the given group with given position array

**Kind**: instance method of [<code>UIElementGroup</code>](#UIElementGroup)  
**Returns**: [<code>Array.&lt;UIBaseElement&gt;</code>](#UIBaseElement) - The transformed array of elements  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Array.&lt;number&gt;</code> |  | The original position array ([x, y, width, height]) |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+set"></a>

### uiElementGroup.set(data, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets data to this element

**Kind**: instance method of [<code>UIElementGroup</code>](#UIElementGroup)  
**Overrides**: [<code>set</code>](#UIBaseElement+set)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Options to set to. Absent fields from this object will keep the old value |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+setPosition"></a>

### uiElementGroup.setPosition(position, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets position of this UI Element

**Kind**: instance method of [<code>UIElementGroup</code>](#UIElementGroup)  
**Overrides**: [<code>setPosition</code>](#UIBaseElement+setPosition)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Array.&lt;number&gt;</code> |  | Position array [x, y, width, height] to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+clone"></a>

### uiElementGroup.clone() ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Clone this element

**Kind**: instance method of [<code>UIElementGroup</code>](#UIElementGroup)  
**Overrides**: [<code>clone</code>](#UIBaseElement+clone)  
<a name="UIBaseElement+remove"></a>

### uiElementGroup.remove() ⇒ <code>boolean</code>
Remove this element from parent element group

**Kind**: instance method of [<code>UIElementGroup</code>](#UIElementGroup)  
**Overrides**: [<code>remove</code>](#UIBaseElement+remove)  
**Returns**: <code>boolean</code> - Indicating if the result is successful or not  
<a name="UIBaseElement+serialize"></a>

### uiElementGroup.serialize() ⇒ <code>Object</code>
Serialize this element into JSON object.Some element type (e.g Group) is not supported by Modding Server, hence calling `toJSON()` method will deconstruct the element.Use this method to keep serialization of this element.

**Kind**: instance method of [<code>UIElementGroup</code>](#UIElementGroup)  
**Overrides**: [<code>serialize</code>](#UIBaseElement+serialize)  
**Returns**: <code>Object</code> - Serialized result  
<a name="UIPlayerElement"></a>

## UIPlayerElement ⇐ [<code>UITextBasedElement</code>](#UITextBasedElement)
The UI Text Element instance

**Kind**: global class  
**Extends**: [<code>UITextBasedElement</code>](#UITextBasedElement)  
**Since**: 1.4.2-alpha6  

* [UIPlayerElement](#UIPlayerElement) ⇐ [<code>UITextBasedElement</code>](#UITextBasedElement)
    * [new UIPlayerElement()](#new_UIPlayerElement_new)
    * [.fontSize](#UIPlayerElement+fontSize) : <code>number</code> \| <code>null</code>
    * [.id](#UIPlayerElement+id) : <code>number</code>
    * [.color](#UITextBasedElement+color) : <code>string</code>
    * [.align](#UITextBasedElement+align) : <code>string</code>
    * [.position](#UIBaseElement+position) : <code>Array.&lt;number&gt;</code>
    * [.parent](#UIBaseElement+parent) : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
    * [.setId(id, [strictMode])](#UIPlayerElement+setId) ⇒ [<code>UITextElement</code>](#UITextElement)
    * [.setFontSize(fontSize, [strictMode])](#UIPlayerElement+setFontSize) ⇒ [<code>UIPlayerElement</code>](#UIPlayerElement)
    * [.setColor(color, [strictMode])](#UITextBasedElement+setColor) ⇒ [<code>UITextElement</code>](#UITextElement)
    * [.setAlign([align], [strictMode])](#UITextBasedElement+setAlign) ⇒ [<code>UITextElement</code>](#UITextElement)
    * [.set(data, [strictMode])](#UIBaseElement+set) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.setPosition(position, [strictMode])](#UIBaseElement+setPosition) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.clone()](#UIBaseElement+clone) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.remove()](#UIBaseElement+remove) ⇒ <code>boolean</code>
    * [.serialize()](#UIBaseElement+serialize) ⇒ <code>Object</code>

<a name="new_UIPlayerElement_new"></a>

### new UIPlayerElement()

| Param | Type | Description |
| --- | --- | --- |
| data.id | <code>number</code> | Ship ID to get info from |

<a name="UIPlayerElement+fontSize"></a>

### uiPlayerElement.fontSize : <code>number</code> \| <code>null</code>
Font size of current player element, a number in in [pt](https://en.wikipedia.org/wiki/Point_(typography)) or `null` if it's inherited from previous text elements

**Kind**: instance property of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Read only**: true  
<a name="UIPlayerElement+id"></a>

### uiPlayerElement.id : <code>number</code>
Ship id of this text element

**Kind**: instance property of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Read only**: true  
<a name="UITextBasedElement+color"></a>

### uiPlayerElement.color : <code>string</code>
CSS Color value of this text element

**Kind**: instance property of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Overrides**: [<code>color</code>](#UITextBasedElement+color)  
**Read only**: true  
<a name="UITextBasedElement+align"></a>

### uiPlayerElement.align : <code>string</code>
Alignment of this text element

**Kind**: instance property of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Overrides**: [<code>align</code>](#UITextBasedElement+align)  
**Read only**: true  
<a name="UIBaseElement+position"></a>

### uiPlayerElement.position : <code>Array.&lt;number&gt;</code>
The position array ([x, y, width, height]) of this element

**Kind**: instance property of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Overrides**: [<code>position</code>](#UIBaseElement+position)  
**Read only**: true  
<a name="UIBaseElement+parent"></a>

### uiPlayerElement.parent : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
Parent group of this element

**Kind**: instance property of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Overrides**: [<code>parent</code>](#UIBaseElement+parent)  
**Read only**: true  
<a name="UIPlayerElement+setId"></a>

### uiPlayerElement.setId(id, [strictMode]) ⇒ [<code>UITextElement</code>](#UITextElement)
Sets ship id to get info of for this UI Player Element

**Kind**: instance method of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Returns**: [<code>UITextElement</code>](#UITextElement) - The UI Text Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | Id to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIPlayerElement+setFontSize"></a>

### uiPlayerElement.setFontSize(fontSize, [strictMode]) ⇒ [<code>UIPlayerElement</code>](#UIPlayerElement)
Sets font size of this UI Player Element

**Kind**: instance method of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Returns**: [<code>UIPlayerElement</code>](#UIPlayerElement) - The UI Player Element in question  
**Since**: 1.4.8-alpha6  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fontSize | <code>number</code> \| <code>null</code> |  | Font size to set, non-negative (in [pt](https://en.wikipedia.org/wiki/Point_(typography))) or `null`/`undefined` to inherit from previous text elements |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UITextBasedElement+setColor"></a>

### uiPlayerElement.setColor(color, [strictMode]) ⇒ [<code>UITextElement</code>](#UITextElement)
Sets text color of this UI Text Element

**Kind**: instance method of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Overrides**: [<code>setColor</code>](#UITextBasedElement+setColor)  
**Returns**: [<code>UITextElement</code>](#UITextElement) - The UI Text Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> \| <code>number</code> |  | Color value to set, either an CSS color string or a hex color value (ARGB or RGB format) |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UITextBasedElement+setAlign"></a>

### uiPlayerElement.setAlign([align], [strictMode]) ⇒ [<code>UITextElement</code>](#UITextElement)
Sets alignment of this UI Text Element

**Kind**: instance method of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Overrides**: [<code>setAlign</code>](#UITextBasedElement+setAlign)  
**Returns**: [<code>UITextElement</code>](#UITextElement) - The UI Text Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [align] | <code>&quot;center&quot;</code> \| <code>&quot;left&quot;</code> \| <code>&quot;right&quot;</code> \| <code>null</code> | <code>&quot;center&quot;</code> | Text alignment to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+set"></a>

### uiPlayerElement.set(data, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets data to this element

**Kind**: instance method of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Overrides**: [<code>set</code>](#UIBaseElement+set)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Options to set to. Absent fields from this object will keep the old value |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+setPosition"></a>

### uiPlayerElement.setPosition(position, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets position of this UI Element

**Kind**: instance method of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Overrides**: [<code>setPosition</code>](#UIBaseElement+setPosition)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Array.&lt;number&gt;</code> |  | Position array [x, y, width, height] to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+clone"></a>

### uiPlayerElement.clone() ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Clone this element

**Kind**: instance method of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Overrides**: [<code>clone</code>](#UIBaseElement+clone)  
<a name="UIBaseElement+remove"></a>

### uiPlayerElement.remove() ⇒ <code>boolean</code>
Remove this element from parent element group

**Kind**: instance method of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Overrides**: [<code>remove</code>](#UIBaseElement+remove)  
**Returns**: <code>boolean</code> - Indicating if the result is successful or not  
<a name="UIBaseElement+serialize"></a>

### uiPlayerElement.serialize() ⇒ <code>Object</code>
Serialize this element into JSON object.Some element type (e.g Group) is not supported by Modding Server, hence calling `toJSON()` method will deconstruct the element.Use this method to keep serialization of this element.

**Kind**: instance method of [<code>UIPlayerElement</code>](#UIPlayerElement)  
**Overrides**: [<code>serialize</code>](#UIBaseElement+serialize)  
**Returns**: <code>Object</code> - Serialized result  
<a name="UIRoundElement"></a>

## UIRoundElement ⇐ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
The UI Round Element instance

**Kind**: global class  
**Extends**: [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)  
**Since**: 1.4.2-alpha6  

* [UIRoundElement](#UIRoundElement) ⇐ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
    * [.width](#UIBasicShapeElement+width) : <code>number</code> \| <code>null</code>
    * [.fill](#UIBasicShapeElement+fill) : <code>string</code>
    * [.stroke](#UIBasicShapeElement+stroke) : <code>string</code>
    * [.position](#UIBaseElement+position) : <code>Array.&lt;number&gt;</code>
    * [.parent](#UIBaseElement+parent) : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
    * [.setWidth(width, [strictMode])](#UIBasicShapeElement+setWidth) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
    * [.setFill(fill, [strictMode])](#UIBasicShapeElement+setFill) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
    * [.setStroke(stroke, [strictMode])](#UIBasicShapeElement+setStroke) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
    * [.set(data, [strictMode])](#UIBaseElement+set) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.setPosition(position, [strictMode])](#UIBaseElement+setPosition) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.clone()](#UIBaseElement+clone) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.remove()](#UIBaseElement+remove) ⇒ <code>boolean</code>
    * [.serialize()](#UIBaseElement+serialize) ⇒ <code>Object</code>

<a name="UIBasicShapeElement+width"></a>

### uiRoundElement.width : <code>number</code> \| <code>null</code>
Border width of this BasicShape element, a number in (1 / ([End user screen's pixel density](https://en.wikipedia.org/wiki/Pixel_density))) [pixels (px)](https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel) or `null` if inherit from previous box or round element

**Kind**: instance property of [<code>UIRoundElement</code>](#UIRoundElement)  
**Read only**: true  
<a name="UIBasicShapeElement+fill"></a>

### uiRoundElement.fill : <code>string</code>
CSS background color value of this BasicShape element

**Kind**: instance property of [<code>UIRoundElement</code>](#UIRoundElement)  
**Read only**: true  
<a name="UIBasicShapeElement+stroke"></a>

### uiRoundElement.stroke : <code>string</code>
CSS border color value of this BasicShape element

**Kind**: instance property of [<code>UIRoundElement</code>](#UIRoundElement)  
**Read only**: true  
<a name="UIBaseElement+position"></a>

### uiRoundElement.position : <code>Array.&lt;number&gt;</code>
The position array ([x, y, width, height]) of this element

**Kind**: instance property of [<code>UIRoundElement</code>](#UIRoundElement)  
**Read only**: true  
<a name="UIBaseElement+parent"></a>

### uiRoundElement.parent : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
Parent group of this element

**Kind**: instance property of [<code>UIRoundElement</code>](#UIRoundElement)  
**Read only**: true  
<a name="UIBasicShapeElement+setWidth"></a>

### uiRoundElement.setWidth(width, [strictMode]) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
Sets border width of this UI BasicShape Element

**Kind**: instance method of [<code>UIRoundElement</code>](#UIRoundElement)  
**Returns**: [<code>UIBasicShapeElement</code>](#UIBasicShapeElement) - The UI BasicShape Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| width | <code>number</code> \| <code>null</code> |  | Width value to set, non-negative in (1 / ([End user screen's pixel density](https://en.wikipedia.org/wiki/Pixel_density))) [pixels (px)](https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel) or `null` if to inherit from previous box or round element |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBasicShapeElement+setFill"></a>

### uiRoundElement.setFill(fill, [strictMode]) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
Sets background fill color of this UI BasicShape Element

**Kind**: instance method of [<code>UIRoundElement</code>](#UIRoundElement)  
**Returns**: [<code>UIBasicShapeElement</code>](#UIBasicShapeElement) - The UI BasicShape Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fill | <code>string</code> \| <code>number</code> |  | Color value to set, either an CSS color string or a hex color value (ARGB or RGB format) |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBasicShapeElement+setStroke"></a>

### uiRoundElement.setStroke(stroke, [strictMode]) ⇒ [<code>UIBasicShapeElement</code>](#UIBasicShapeElement)
Sets border color of this UI BasicShape Element

**Kind**: instance method of [<code>UIRoundElement</code>](#UIRoundElement)  
**Returns**: [<code>UIBasicShapeElement</code>](#UIBasicShapeElement) - The UI BasicShape Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| stroke | <code>string</code> \| <code>number</code> |  | Color value to set, either an CSS color string or a hex color value (ARGB or RGB format) |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+set"></a>

### uiRoundElement.set(data, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets data to this element

**Kind**: instance method of [<code>UIRoundElement</code>](#UIRoundElement)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Options to set to. Absent fields from this object will keep the old value |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+setPosition"></a>

### uiRoundElement.setPosition(position, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets position of this UI Element

**Kind**: instance method of [<code>UIRoundElement</code>](#UIRoundElement)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Array.&lt;number&gt;</code> |  | Position array [x, y, width, height] to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+clone"></a>

### uiRoundElement.clone() ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Clone this element

**Kind**: instance method of [<code>UIRoundElement</code>](#UIRoundElement)  
<a name="UIBaseElement+remove"></a>

### uiRoundElement.remove() ⇒ <code>boolean</code>
Remove this element from parent element group

**Kind**: instance method of [<code>UIRoundElement</code>](#UIRoundElement)  
**Returns**: <code>boolean</code> - Indicating if the result is successful or not  
<a name="UIBaseElement+serialize"></a>

### uiRoundElement.serialize() ⇒ <code>Object</code>
Serialize this element into JSON object.Some element type (e.g Group) is not supported by Modding Server, hence calling `toJSON()` method will deconstruct the element.Use this method to keep serialization of this element.

**Kind**: instance method of [<code>UIRoundElement</code>](#UIRoundElement)  
**Returns**: <code>Object</code> - Serialized result  
<a name="UITextElement"></a>

## UITextElement ⇐ [<code>UITextBasedElement</code>](#UITextBasedElement)
The UI Text Element instance

**Kind**: global class  
**Extends**: [<code>UITextBasedElement</code>](#UITextBasedElement)  
**Since**: 1.4.2-alpha6  

* [UITextElement](#UITextElement) ⇐ [<code>UITextBasedElement</code>](#UITextBasedElement)
    * [new UITextElement()](#new_UITextElement_new)
    * [.value](#UITextElement+value) : <code>string</code>
    * [.color](#UITextBasedElement+color) : <code>string</code>
    * [.align](#UITextBasedElement+align) : <code>string</code>
    * [.position](#UIBaseElement+position) : <code>Array.&lt;number&gt;</code>
    * [.parent](#UIBaseElement+parent) : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
    * [.setValue(textValue, [strictMode])](#UITextElement+setValue) ⇒ [<code>UITextElement</code>](#UITextElement)
    * [.setColor(color, [strictMode])](#UITextBasedElement+setColor) ⇒ [<code>UITextElement</code>](#UITextElement)
    * [.setAlign([align], [strictMode])](#UITextBasedElement+setAlign) ⇒ [<code>UITextElement</code>](#UITextElement)
    * [.set(data, [strictMode])](#UIBaseElement+set) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.setPosition(position, [strictMode])](#UIBaseElement+setPosition) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.clone()](#UIBaseElement+clone) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.remove()](#UIBaseElement+remove) ⇒ <code>boolean</code>
    * [.serialize()](#UIBaseElement+serialize) ⇒ <code>Object</code>

<a name="new_UITextElement_new"></a>

### new UITextElement()

| Param | Type | Description |
| --- | --- | --- |
| data.value | <code>string</code> | String value of this text element |

<a name="UITextElement+value"></a>

### uiTextElement.value : <code>string</code>
String value of this text element

**Kind**: instance property of [<code>UITextElement</code>](#UITextElement)  
**Read only**: true  
<a name="UITextBasedElement+color"></a>

### uiTextElement.color : <code>string</code>
CSS Color value of this text element

**Kind**: instance property of [<code>UITextElement</code>](#UITextElement)  
**Overrides**: [<code>color</code>](#UITextBasedElement+color)  
**Read only**: true  
<a name="UITextBasedElement+align"></a>

### uiTextElement.align : <code>string</code>
Alignment of this text element

**Kind**: instance property of [<code>UITextElement</code>](#UITextElement)  
**Overrides**: [<code>align</code>](#UITextBasedElement+align)  
**Read only**: true  
<a name="UIBaseElement+position"></a>

### uiTextElement.position : <code>Array.&lt;number&gt;</code>
The position array ([x, y, width, height]) of this element

**Kind**: instance property of [<code>UITextElement</code>](#UITextElement)  
**Overrides**: [<code>position</code>](#UIBaseElement+position)  
**Read only**: true  
<a name="UIBaseElement+parent"></a>

### uiTextElement.parent : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
Parent group of this element

**Kind**: instance property of [<code>UITextElement</code>](#UITextElement)  
**Overrides**: [<code>parent</code>](#UIBaseElement+parent)  
**Read only**: true  
<a name="UITextElement+setValue"></a>

### uiTextElement.setValue(textValue, [strictMode]) ⇒ [<code>UITextElement</code>](#UITextElement)
Sets text value of this UI Text Element

**Kind**: instance method of [<code>UITextElement</code>](#UITextElement)  
**Returns**: [<code>UITextElement</code>](#UITextElement) - The UI Text Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| textValue | <code>string</code> |  | Value to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UITextBasedElement+setColor"></a>

### uiTextElement.setColor(color, [strictMode]) ⇒ [<code>UITextElement</code>](#UITextElement)
Sets text color of this UI Text Element

**Kind**: instance method of [<code>UITextElement</code>](#UITextElement)  
**Overrides**: [<code>setColor</code>](#UITextBasedElement+setColor)  
**Returns**: [<code>UITextElement</code>](#UITextElement) - The UI Text Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> \| <code>number</code> |  | Color value to set, either an CSS color string or a hex color value (ARGB or RGB format) |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UITextBasedElement+setAlign"></a>

### uiTextElement.setAlign([align], [strictMode]) ⇒ [<code>UITextElement</code>](#UITextElement)
Sets alignment of this UI Text Element

**Kind**: instance method of [<code>UITextElement</code>](#UITextElement)  
**Overrides**: [<code>setAlign</code>](#UITextBasedElement+setAlign)  
**Returns**: [<code>UITextElement</code>](#UITextElement) - The UI Text Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [align] | <code>&quot;center&quot;</code> \| <code>&quot;left&quot;</code> \| <code>&quot;right&quot;</code> \| <code>null</code> | <code>&quot;center&quot;</code> | Text alignment to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+set"></a>

### uiTextElement.set(data, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets data to this element

**Kind**: instance method of [<code>UITextElement</code>](#UITextElement)  
**Overrides**: [<code>set</code>](#UIBaseElement+set)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Options to set to. Absent fields from this object will keep the old value |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+setPosition"></a>

### uiTextElement.setPosition(position, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets position of this UI Element

**Kind**: instance method of [<code>UITextElement</code>](#UITextElement)  
**Overrides**: [<code>setPosition</code>](#UIBaseElement+setPosition)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Array.&lt;number&gt;</code> |  | Position array [x, y, width, height] to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+clone"></a>

### uiTextElement.clone() ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Clone this element

**Kind**: instance method of [<code>UITextElement</code>](#UITextElement)  
**Overrides**: [<code>clone</code>](#UIBaseElement+clone)  
<a name="UIBaseElement+remove"></a>

### uiTextElement.remove() ⇒ <code>boolean</code>
Remove this element from parent element group

**Kind**: instance method of [<code>UITextElement</code>](#UITextElement)  
**Overrides**: [<code>remove</code>](#UIBaseElement+remove)  
**Returns**: <code>boolean</code> - Indicating if the result is successful or not  
<a name="UIBaseElement+serialize"></a>

### uiTextElement.serialize() ⇒ <code>Object</code>
Serialize this element into JSON object.Some element type (e.g Group) is not supported by Modding Server, hence calling `toJSON()` method will deconstruct the element.Use this method to keep serialization of this element.

**Kind**: instance method of [<code>UITextElement</code>](#UITextElement)  
**Overrides**: [<code>serialize</code>](#UIBaseElement+serialize)  
**Returns**: <code>Object</code> - Serialized result  
<a name="UITextBasedElement"></a>

## UITextBasedElement ⇐ [<code>UIBaseElement</code>](#UIBaseElement)
The UI Text-Based Element instance

**Kind**: global class  
**Extends**: [<code>UIBaseElement</code>](#UIBaseElement)  
**Since**: 1.4.6-alpha6  

* [UITextBasedElement](#UITextBasedElement) ⇐ [<code>UIBaseElement</code>](#UIBaseElement)
    * [new UITextBasedElement()](#new_UITextBasedElement_new)
    * [.color](#UITextBasedElement+color) : <code>string</code>
    * [.align](#UITextBasedElement+align) : <code>string</code>
    * [.position](#UIBaseElement+position) : <code>Array.&lt;number&gt;</code>
    * [.parent](#UIBaseElement+parent) : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
    * [.setColor(color, [strictMode])](#UITextBasedElement+setColor) ⇒ [<code>UITextElement</code>](#UITextElement)
    * [.setAlign([align], [strictMode])](#UITextBasedElement+setAlign) ⇒ [<code>UITextElement</code>](#UITextElement)
    * [.set(data, [strictMode])](#UIBaseElement+set) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.setPosition(position, [strictMode])](#UIBaseElement+setPosition) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.clone()](#UIBaseElement+clone) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
    * [.remove()](#UIBaseElement+remove) ⇒ <code>boolean</code>
    * [.serialize()](#UIBaseElement+serialize) ⇒ <code>Object</code>

<a name="new_UITextBasedElement_new"></a>

### new UITextBasedElement()

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [data.color] | <code>string</code> \| <code>number</code> | <code>&quot;\&quot;#000\&quot;&quot;</code> | Text color of this element, in CSS value or color hex value (ARGB or RGB format) |
| [data.align] | <code>&quot;center&quot;</code> \| <code>&quot;left&quot;</code> \| <code>&quot;right&quot;</code> \| <code>null</code> | <code>&quot;center&quot;</code> | Text alignment of this text element |

<a name="UITextBasedElement+color"></a>

### uiTextBasedElement.color : <code>string</code>
CSS Color value of this text element

**Kind**: instance property of [<code>UITextBasedElement</code>](#UITextBasedElement)  
**Read only**: true  
<a name="UITextBasedElement+align"></a>

### uiTextBasedElement.align : <code>string</code>
Alignment of this text element

**Kind**: instance property of [<code>UITextBasedElement</code>](#UITextBasedElement)  
**Read only**: true  
<a name="UIBaseElement+position"></a>

### uiTextBasedElement.position : <code>Array.&lt;number&gt;</code>
The position array ([x, y, width, height]) of this element

**Kind**: instance property of [<code>UITextBasedElement</code>](#UITextBasedElement)  
**Overrides**: [<code>position</code>](#UIBaseElement+position)  
**Read only**: true  
<a name="UIBaseElement+parent"></a>

### uiTextBasedElement.parent : [<code>UIElementGroup</code>](#UIElementGroup) \| <code>null</code>
Parent group of this element

**Kind**: instance property of [<code>UITextBasedElement</code>](#UITextBasedElement)  
**Overrides**: [<code>parent</code>](#UIBaseElement+parent)  
**Read only**: true  
<a name="UITextBasedElement+setColor"></a>

### uiTextBasedElement.setColor(color, [strictMode]) ⇒ [<code>UITextElement</code>](#UITextElement)
Sets text color of this UI Text Element

**Kind**: instance method of [<code>UITextBasedElement</code>](#UITextBasedElement)  
**Returns**: [<code>UITextElement</code>](#UITextElement) - The UI Text Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> \| <code>number</code> |  | Color value to set, either an CSS color string or a hex color value (ARGB or RGB format) |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UITextBasedElement+setAlign"></a>

### uiTextBasedElement.setAlign([align], [strictMode]) ⇒ [<code>UITextElement</code>](#UITextElement)
Sets alignment of this UI Text Element

**Kind**: instance method of [<code>UITextBasedElement</code>](#UITextBasedElement)  
**Returns**: [<code>UITextElement</code>](#UITextElement) - The UI Text Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [align] | <code>&quot;center&quot;</code> \| <code>&quot;left&quot;</code> \| <code>&quot;right&quot;</code> \| <code>null</code> | <code>&quot;center&quot;</code> | Text alignment to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+set"></a>

### uiTextBasedElement.set(data, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets data to this element

**Kind**: instance method of [<code>UITextBasedElement</code>](#UITextBasedElement)  
**Overrides**: [<code>set</code>](#UIBaseElement+set)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Options to set to. Absent fields from this object will keep the old value |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+setPosition"></a>

### uiTextBasedElement.setPosition(position, [strictMode]) ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Sets position of this UI Element

**Kind**: instance method of [<code>UITextBasedElement</code>](#UITextBasedElement)  
**Overrides**: [<code>setPosition</code>](#UIBaseElement+setPosition)  
**Returns**: [<code>UIBaseElement</code>](#UIBaseElement) - The UI Element in question  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>Array.&lt;number&gt;</code> |  | Position array [x, y, width, height] to set |
| [strictMode] | <code>boolean</code> | <code>false</code> | Whether strict mode will be enabled (invalid value will be silently replaced with default value) or throw an error instead |

<a name="UIBaseElement+clone"></a>

### uiTextBasedElement.clone() ⇒ [<code>UIBaseElement</code>](#UIBaseElement)
Clone this element

**Kind**: instance method of [<code>UITextBasedElement</code>](#UITextBasedElement)  
**Overrides**: [<code>clone</code>](#UIBaseElement+clone)  
<a name="UIBaseElement+remove"></a>

### uiTextBasedElement.remove() ⇒ <code>boolean</code>
Remove this element from parent element group

**Kind**: instance method of [<code>UITextBasedElement</code>](#UITextBasedElement)  
**Overrides**: [<code>remove</code>](#UIBaseElement+remove)  
**Returns**: <code>boolean</code> - Indicating if the result is successful or not  
<a name="UIBaseElement+serialize"></a>

### uiTextBasedElement.serialize() ⇒ <code>Object</code>
Serialize this element into JSON object.Some element type (e.g Group) is not supported by Modding Server, hence calling `toJSON()` method will deconstruct the element.Use this method to keep serialization of this element.

**Kind**: instance method of [<code>UITextBasedElement</code>](#UITextBasedElement)  
**Overrides**: [<code>serialize</code>](#UIBaseElement+serialize)  
**Returns**: <code>Object</code> - Serialized result  
<a name="ArrayMap"></a>

## *ArrayMap ⇐ <code>Map</code>*
The Map Instance with a few array methods

**Kind**: global abstract class  
**Extends**: <code>Map</code>  

* *[ArrayMap](#ArrayMap) ⇐ <code>Map</code>*
    * *[.length](#ArrayMap+length) : <code>number</code>*
    * *[.at()](#ArrayMap+at) ⇒ <code>any</code> \| <code>undefined</code>*
    * *[.toArray()](#ArrayMap+toArray) ⇒ <code>array</code>*

<a name="ArrayMap+length"></a>

### *arrayMap.length : <code>number</code>*
Length of this object, same as `Map.prototype.size`

**Kind**: instance property of [<code>ArrayMap</code>](#ArrayMap)  
**Read only**: true  
<a name="ArrayMap+at"></a>

### *arrayMap.at() ⇒ <code>any</code> \| <code>undefined</code>*
Get element at index, Equivalent to `Array.prototype.at`

**Kind**: instance method of [<code>ArrayMap</code>](#ArrayMap)  
**Returns**: <code>any</code> \| <code>undefined</code> - The value at index  
<a name="ArrayMap+toArray"></a>

### *arrayMap.toArray() ⇒ <code>array</code>*
Get an array from this object

**Kind**: instance method of [<code>ArrayMap</code>](#ArrayMap)  
<a name="abstract_message_handler"></a>

## abstract\_message\_handler(data)
Message handler function

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Message data |
| data.type | <code>&quot;error&quot;</code> \| <code>&quot;log&quot;</code> | Type of message |
| data.content | <code>String</code> | Parsed content of the message |
| data.raw | <code>String</code> | Raw content of the message |

