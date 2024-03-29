import 'package:amazone/constants/global_variables.dart';
import 'package:amazone/features/auth/screen/auth_screen.dart';
import 'package:amazone/router.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Amazon',
      theme: ThemeData(
        scaffoldBackgroundColor: GlobalVariables.backgroundColor,
        colorScheme:
            const ColorScheme.light(primary: GlobalVariables.secondaryColor),
        appBarTheme: const AppBarTheme(
          elevation: 0,
        ),
        iconTheme: const IconThemeData(color: Colors.black87),
        useMaterial3: true,
      ),
      // OnGenerate Route
      onGenerateRoute: (settings) => generateRoute(settings),
      home: AuthScreen(),
    );
  }
}
