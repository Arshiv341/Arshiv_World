import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  purpose: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: SignupData) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

interface SignupData {
  fullName: string;
  phoneNumber: string;
  email: string;
  purpose: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Simple password hashing simulation (in production, use bcrypt on backend)
const hashPassword = (password: string): string => {
  return btoa(password + 'arshiv-salt-key');
};

const verifyPassword = (password: string, hash: string): boolean => {
  return hashPassword(password) === hash;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored authentication
    const storedUser = localStorage.getItem('arshiv_user');
    const storedToken = localStorage.getItem('arshiv_token');
    
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signup = async (userData: SignupData): Promise<boolean> => {
    setLoading(true);
    
    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('arshiv_users') || '[]');
    const userExists = existingUsers.find((u: any) => u.email === userData.email);
    
    if (userExists) {
      setLoading(false);
      return false;
    }

    // Create new user
    const hashedPassword = hashPassword(userData.password);
    const newUser = {
      id: Date.now().toString(),
      fullName: userData.fullName,
      phoneNumber: userData.phoneNumber,
      email: userData.email,
      purpose: userData.purpose,
      password: hashedPassword
    };

    // Store user in "database" (localStorage)
    existingUsers.push(newUser);
    localStorage.setItem('arshiv_users', JSON.stringify(existingUsers));

    // Create JWT-like token (simplified)
    const token = btoa(JSON.stringify({ 
      userId: newUser.id, 
      email: newUser.email,
      exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    }));

    // Set user and token
    const userForState = { ...newUser };
    delete (userForState as any).password;
    
    setUser(userForState);
    localStorage.setItem('arshiv_user', JSON.stringify(userForState));
    localStorage.setItem('arshiv_token', token);

    setLoading(false);
    return true;
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // Get users from "database"
    const users = JSON.parse(localStorage.getItem('arshiv_users') || '[]');
    const user = users.find((u: any) => u.email === email);

    if (!user || !verifyPassword(password, user.password)) {
      setLoading(false);
      return false;
    }

    // Create JWT-like token
    const token = btoa(JSON.stringify({
      userId: user.id,
      email: user.email,
      exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    }));

    // Set user and token
    const userForState = { ...user };
    delete userForState.password;
    
    setUser(userForState);
    localStorage.setItem('arshiv_user', JSON.stringify(userForState));
    localStorage.setItem('arshiv_token', token);

    setLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('arshiv_user');
    localStorage.removeItem('arshiv_token');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};