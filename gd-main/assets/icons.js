import { AntDesign, Feather } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

export const icons = {
    index: (props)=> <AntDesign name="home" size={26} {...props} />,
    explore: (props)=> <Feather name="camera" size={26} {...props} />,
    create: (props)=> <Ionicons name="text" size={24} color="black" />,
    object: (props)=> <FontAwesome name="cube" size={24} color="black" />,
    profile: (props)=> <AntDesign name="questioncircleo" size={26} {...props} />
    
}