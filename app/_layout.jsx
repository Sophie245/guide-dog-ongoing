// _layout.jsx
import { useState } from 'react'; // Import useState to manage state
import { Tabs } from 'expo-router'; 
import TabBar from '../components/TabBar'; 

const _layout = () => {
  const [detectionLog, setDetectionLog] = useState([]); // State to hold the detection log

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home"
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Photo"
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Navigation"
        }}
        children={() => <Create setDetectionLog={setDetectionLog} />} // Pass setDetectionLog to Create
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Tutorial"
        }}
      />
      <Tabs.Screen
        name="misc"
        options={{
          title: "Notification"
        }}
        children={() => <Misc detectionLog={detectionLog} />} // Pass detectionLog to Misc
      />
    </Tabs>
  );
};

export default _layout;

