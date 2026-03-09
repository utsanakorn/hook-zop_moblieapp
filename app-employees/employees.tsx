import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { employeeSchema, EmployeeFormData } from "@/schemas/validationSchemas";

export default function Employees() {
  const { 
    control, 
    handleSubmit, 
    formState: { errors, isValid } 
  } = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
    mode: 'onChange', // validate everytime
  });

  const onSubmit = (data: EmployeeFormData) => {
    Alert.alert('Success!', `Employee ${data.fullName} added successfully!`);
    console.log('Form Data:', data);
  };

  return (
      <View style={styles.employeeCard}>
        <Text style={styles.topTitle}>Employee Info</Text>

        {/* Full Name Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <Controller
            control={control}
            name="fullName"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput 
                style={[styles.input, errors.fullName && styles.inputError]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter full name"
              />
            )}
          />
          {errors.fullName && (
            <Text style={styles.errorText}>{errors.fullName.message}</Text>
          )}
        </View>

        {/* Email Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput 
                style={[styles.input, errors.email && styles.inputError]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="example@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}
        </View>

        {/* Phone Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone</Text>
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput 
                style={[styles.input, errors.phone && styles.inputError]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="1234567890"
                keyboardType="phone-pad"
              />
            )}
          />
          {errors.phone && (
            <Text style={styles.errorText}>{errors.phone.message}</Text>
          )}
        </View>

        {/* Postal Code Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Postal Code</Text>
          <Controller
            control={control}
            name="postalCode"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput 
                style={[styles.input, errors.postalCode && styles.inputError]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="T2P 1J9"
                autoCapitalize="characters"
              />
            )}
          />
          {errors.postalCode && (
            <Text style={styles.errorText}>{errors.postalCode.message}</Text>
          )}
        </View>

        {/* Department Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Department</Text>
          <Controller
            control={control}
            name="department"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput 
                style={[styles.input, errors.department && styles.inputError]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="IT, HR, Sales, etc."
              />
            )}
          />
          {errors.department && (
            <Text style={styles.errorText}>{errors.department.message}</Text>
          )}
        </View>

        <TouchableOpacity 
          style={[styles.button, !isValid && styles.buttonDisabled]}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
employeeCard: {width: 500, maxWidth: 500, backgroundColor: 'white', padding: 20, borderRadius: 10},
topTitle: {fontSize: 20, fontWeight: 'bold', marginBottom: 15, textAlign: 'center'},
inputGroup: { marginBottom: 12 },
label: { fontSize: 12, color: '#666', marginBottom: 4},
input: {borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, height: 45, backgroundColor: '#fff'},
inputError: {borderColor: '#ff3b30', borderWidth: 2, backgroundColor: '#fff5f5'},
errorText: {color: '#ff3b30', fontSize: 11, marginTop: 4},
button: {backgroundColor: '#007AFF', padding: 15, borderRadius: 10, marginTop: 10}, 
buttonDisabled: {backgroundColor: '#ccc', opacity: 0.6},
buttonText: {color: 'white', textAlign: 'center', fontWeight: 'bold'},
});