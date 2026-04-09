import { Core, LogLevel, type Client } from "@voximplant/websdk";
import { ConferenceLoader, conferenceToken, type Conference, type ConferenceManager } from "@voximplant/websdk/modules/conference-manager";
import { StreamHelper, StreamLoader, streamToken, type DeviceTrackerHelper } from "@voximplant/websdk/modules/stream";

/**
 * Only connect to the vox implamt sdk happens here
 */
const main = async (): Promise<void> => {

  const core: Core = Core.init({
    logger: {
      logLevel: LogLevel.Error
    }
  });

  core.registerModules(
    [StreamLoader(), ConferenceLoader()]
  );

  const client: Client = core.client;
  await client.connect({
    node: import.meta.env.VOX_NODE,
    autoReconnect: true,
  });
  await client.login({
    username: import.meta.env.VITE_VOX_USER_NAME,
    password: import.meta.env.VITE_VOX_PASSWORD,
  });


  const confManager: ConferenceManager | undefined = core.getModule(conferenceToken);
  if (!confManager) {
    alert("Not conf manager");
    return;
  }
  const conf: Conference = confManager.createConference({
    conferenceName: "hello",
  });


  const deviceTracker: DeviceTrackerHelper | undefined = core.getModule(streamToken)?.createHelper(StreamHelper.DeviceTracker);
  if (!deviceTracker) {
    alert("No device tracker");
    return;
  }
  deviceTracker.enableTracker();
  deviceTracker.shouldSendVideo.value = true;
  deviceTracker.attachConference(conf);


  await conf.join();


  document.getElementById("app")!.innerHTML = `<div style="color: green;">Conference connected</div>`
};

alert("Page started");

const button = document.createElement("button");
button.onclick = () => main();
button.style.width = "100px";
button.style.height = "100px";
button.innerText = "Connect";
document.getElementById("app")?.appendChild(button);


