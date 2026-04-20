import React, { useState } from 'react';
import { View, Text, Switch, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [dataSaverEnabled, setDataSaverEnabled] = useState(false);
  const [liveScoresEnabled, setLiveScoresEnabled] = useState(true);
  const [breakingNewsEnabled, setBreakingNewsEnabled] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-background px-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="items-center mt-6 mb-8">
          <View className="w-24 h-24 rounded-full border-4 border-primary items-center justify-center p-1">
            <Image 
              source={{ uri: 'https://i.pravatar.cc/150?img=11' }} 
              className="w-full h-full rounded-full"
            />
          </View>
          <Text className="text-text text-2xl font-bold mt-3">Alex Mercer</Text>
          <Text className="text-accent text-sm">@alex_plays</Text>
          
          <View className="flex-row mt-4 space-x-8">
            <View className="items-center">
              <Text className="text-primary font-bold text-lg">1.2K</Text>
              <Text className="text-textMuted text-xs uppercase tracking-wider">Followers</Text>
            </View>
            <View className="items-center">
              <Text className="text-primary font-bold text-lg">48</Text>
              <Text className="text-textMuted text-xs uppercase tracking-wider">Following</Text>
            </View>
          </View>
        </View>

        {/* Time Watched Chart Placeholder */}
        <View className="bg-accent/20 rounded-2xl p-4 mb-4">
          <View className="flex-row justify-between items-center mb-6">
             <View className="flex-row items-center">
               <Ionicons name="time-outline" size={20} color="#8b5cf6" />
               <Text className="text-accent font-bold ml-2">Time Watched</Text>
             </View>
             <TouchableOpacity className="bg-white/10 px-3 py-1 rounded-full">
               <Text className="text-text text-xs">This Week</Text>
             </TouchableOpacity>
          </View>
          {/* Chart placeholder */}
          <View className="h-32 items-center justify-center border-b border-accent/30 mb-2">
            <Text className="text-accent font-bold">4h</Text>
          </View>
          <View className="flex-row justify-between px-2">
            <Text className="text-textMuted text-xs">Mon</Text>
            <Text className="text-textMuted text-xs">Tue</Text>
            <Text className="text-textMuted text-xs">Wed</Text>
            <Text className="text-textMuted text-xs">Thu</Text>
            <Text className="text-accent font-bold text-xs">Fri</Text>
            <Text className="text-textMuted text-xs">Sat</Text>
            <Text className="text-textMuted text-xs">Sun</Text>
          </View>
        </View>

        {/* Daily Average */}
        <View className="bg-primary/90 rounded-2xl p-4 mb-4 flex-row items-center justify-between">
           <View>
             <Text className="text-blue-200 text-sm">Daily Average</Text>
             <Text className="text-white text-3xl font-bold mt-1">2h 15m</Text>
             <View className="bg-white/20 self-start px-2 py-1 rounded mt-2">
                <Text className="text-white text-xs">↗ +12% from last week</Text>
             </View>
           </View>
        </View>

        {/* Favorites */}
        <Text className="text-text text-lg font-bold mb-3 mt-4">Favorites</Text>
        <View className="space-y-3 mb-6">
          <View className="bg-accent/10 rounded-xl p-3 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="bg-accent/20 w-10 h-10 rounded-lg items-center justify-center">
                <Ionicons name="game-controller" size={20} color="#8b5cf6" />
              </View>
              <View className="ml-3">
                <Text className="text-text font-bold">Cyber Legends</Text>
                <Text className="text-textMuted text-xs">Action RPG</Text>
              </View>
            </View>
            <Ionicons name="star" size={20} color="#3d61ff" />
          </View>
          <View className="bg-accent/10 rounded-xl p-3 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="bg-accent/20 w-10 h-10 rounded-lg items-center justify-center">
                <Ionicons name="football" size={20} color="#8b5cf6" />
              </View>
              <View className="ml-3">
                <Text className="text-text font-bold">FC City Strikers</Text>
                <Text className="text-textMuted text-xs">E-Sports Team</Text>
              </View>
            </View>
            <Ionicons name="star" size={20} color="#3d61ff" />
          </View>
        </View>

        {/* Preferences */}
        <Text className="text-text text-lg font-bold mb-3">Preferences</Text>
        <View className="bg-card rounded-2xl p-4 mb-6">
           <View className="flex-row justify-between items-center mb-4">
             <View className="flex-row items-center">
               <Ionicons name="notifications-outline" size={20} color="#fff" />
               <View className="ml-3">
                 <Text className="text-text">Push Notifications</Text>
                 <Text className="text-textMuted text-xs">Match alerts and updates</Text>
               </View>
             </View>
             <Switch value={pushEnabled} onValueChange={setPushEnabled} trackColor={{ true: '#3d61ff' }} />
           </View>
           <View className="flex-row justify-between items-center mb-4 border-t border-white/10 pt-4">
             <View className="flex-row items-center">
               <Ionicons name="cellular-outline" size={20} color="#fff" />
               <View className="ml-3">
                 <Text className="text-text">Data Saver</Text>
                 <Text className="text-textMuted text-xs">Lower quality on cellular</Text>
               </View>
             </View>
             <Switch value={dataSaverEnabled} onValueChange={setDataSaverEnabled} trackColor={{ true: '#3d61ff' }} />
           </View>
           <TouchableOpacity className="flex-row justify-between items-center border-t border-white/10 pt-4">
             <View className="flex-row items-center">
               <Ionicons name="settings-outline" size={20} color="#fff" />
               <View className="ml-3">
                 <Text className="text-text">Advanced Settings</Text>
               </View>
             </View>
             <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
           </TouchableOpacity>
        </View>

        {/* Alert Feed */}
        <Text className="text-primary text-xl font-bold mb-1">Alert Feed</Text>
        <Text className="text-primary/70 text-xs mb-4">Real-time updates, match starts, and breaking news. Your command center for the grand arena.</Text>
        
        <View className="mb-4">
           <View className="flex-row justify-between items-center mb-6">
             <View>
               <Text className="text-text font-bold">Live Scores</Text>
               <Text className="text-primary/70 text-xs">Real-time updates for favorited matches.</Text>
             </View>
             <Switch value={liveScoresEnabled} onValueChange={setLiveScoresEnabled} trackColor={{ true: '#3d61ff' }} />
           </View>
           <View className="flex-row justify-between items-center mb-6">
             <View>
               <Text className="text-text font-bold">Breaking News</Text>
               <Text className="text-primary/70 text-xs">Major announcements and roster changes.</Text>
             </View>
             <Switch value={breakingNewsEnabled} onValueChange={setBreakingNewsEnabled} trackColor={{ true: '#3d61ff' }} />
           </View>
        </View>

        {/* Pro Tip */}
        <View className="bg-[#0f172a] rounded-2xl p-4 mb-8 flex-row items-start border border-[#1e293b]">
           <Ionicons name="bulb" size={24} color="#3d61ff" className="mr-3" />
           <View className="flex-1 ml-3">
             <Text className="text-primary font-bold text-xs mb-1">PRO TIP</Text>
             <Text className="text-textMuted text-xs">Customize your alert preferences above to ensure you only receive notifications that matter to your viewing experience.</Text>
           </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
